import { generateObject, embed } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { ZodSchema } from "zod";
import { getDb } from "../db/client";
import { aiUsage } from "../db/schema";

type Provider = "ollama" | "anthropic" | "openai" | "google";

interface GatewayOptions {
  preferredProvider?: Provider;
  fallbackChain?: Provider[];
  maxRetries?: number;
}

interface TokenCount {
  input: number;
  output: number;
}

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL ?? "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL ?? "qwen2.5:latest";

function getProviderModel(provider: Provider) {
  switch (provider) {
    case "ollama":
      return createOpenAI({ baseURL: `${OLLAMA_BASE_URL}/v1`, apiKey: "ollama" })(OLLAMA_MODEL);
    case "openai":
      return createOpenAI({ apiKey: process.env.OPENAI_API_KEY })("gpt-4o");
    case "anthropic":
      return createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY })("claude-sonnet-4-20250514");
    case "google":
      return createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY })("gemini-2.5-pro");
  }
}

const DEFAULT_MODELS: Record<Provider, string> = {
  ollama: OLLAMA_MODEL,
  openai: "gpt-4o",
  anthropic: "claude-sonnet-4-20250514",
  google: "gemini-2.5-pro",
};

// Ollama always first (free, local), then cloud providers as fallback
const DEFAULT_FALLBACK: Record<Provider, Provider[]> = {
  ollama: ["openai", "anthropic", "google"],
  openai: ["ollama", "anthropic", "google"],
  anthropic: ["ollama", "openai", "google"],
  google: ["ollama", "openai", "anthropic"],
};

export class AIGateway {
  async generateObject<T>(
    schema: ZodSchema<T>,
    prompt: string,
    options?: GatewayOptions
  ): Promise<T> {
    const preferred = options?.preferredProvider ?? "ollama";
    const chain = options?.fallbackChain ?? [preferred, ...DEFAULT_FALLBACK[preferred]];
    const maxRetries = options?.maxRetries ?? 1;

    let lastError: Error | null = null;

    for (const provider of chain) {
      // Skip cloud providers if no API key configured
      if (provider === "openai" && !process.env.OPENAI_API_KEY) continue;
      if (provider === "anthropic" && !process.env.ANTHROPIC_API_KEY) continue;
      if (provider === "google" && !process.env.GEMINI_API_KEY) continue;

      for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
          const model = getProviderModel(provider);
          const result = await generateObject({ model, schema, prompt });

          await this.logUsage("generateObject", provider, DEFAULT_MODELS[provider], {
            input: result.usage?.inputTokens ?? 0,
            output: result.usage?.outputTokens ?? 0,
          });

          return result.object;
        } catch (err) {
          lastError = err instanceof Error ? err : new Error(String(err));
          console.warn(`Provider ${provider} failed (attempt ${attempt + 1}):`, lastError.message);
        }
      }
    }

    throw new Error(`All AI providers failed: ${lastError?.message}`);
  }

  async generateEmbedding(text: string): Promise<number[]> {
    // Use Ollama for embeddings too
    const ollama = createOpenAI({ baseURL: `${OLLAMA_BASE_URL}/v1`, apiKey: "ollama" });
    const model = ollama.textEmbeddingModel(OLLAMA_MODEL);

    try {
      const result = await embed({ model, value: text });
      await this.logUsage("embedding", "ollama", OLLAMA_MODEL, {
        input: text.length,
        output: 0,
      });
      return result.embedding;
    } catch {
      // If Ollama embedding fails, generate a simple hash-based pseudo-embedding
      // This allows the app to work without a dedicated embedding model
      console.warn("Ollama embedding failed, using fallback pseudo-embedding");
      return this.pseudoEmbed(text);
    }
  }

  private pseudoEmbed(text: string): number[] {
    // Deterministic pseudo-embedding from text hash for development
    const dim = 256;
    const vec = new Array(dim).fill(0);
    const words = text.toLowerCase().split(/\s+/);
    for (const word of words) {
      for (let i = 0; i < word.length; i++) {
        const idx = (word.charCodeAt(i) * 31 + i) % dim;
        vec[idx] += 1;
      }
    }
    // Normalize
    const norm = Math.sqrt(vec.reduce((s, v) => s + v * v, 0)) || 1;
    return vec.map((v) => v / norm);
  }

  private async logUsage(
    stage: string,
    provider: Provider,
    model: string,
    tokens: TokenCount
  ) {
    try {
      const db = getDb();
      const costPerToken: Record<Provider, { input: number; output: number }> = {
        ollama: { input: 0, output: 0 },
        openai: { input: 0.005, output: 0.015 },
        anthropic: { input: 0.003, output: 0.015 },
        google: { input: 0.002, output: 0.008 },
      };
      const rates = costPerToken[provider];
      const costCents = ((tokens.input * rates.input + tokens.output * rates.output) / 1000) * 100;

      await db.insert(aiUsage).values({
        id: crypto.randomUUID(),
        userId: "system",
        stage,
        provider,
        model,
        inputTokens: tokens.input,
        outputTokens: tokens.output,
        costCents,
        createdAt: new Date(),
      });
    } catch {
      // Usage logging is best-effort
    }
  }
}