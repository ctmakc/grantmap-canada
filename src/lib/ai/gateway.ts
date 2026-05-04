import { generateObject, embed } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { ZodSchema } from "zod";
import { getDb } from "../db/client";
import { aiUsage } from "../db/schema";

type Provider = "anthropic" | "openai" | "google";

interface GatewayOptions {
  preferredProvider?: Provider;
  fallbackChain?: Provider[];
  maxRetries?: number;
}

interface TokenCount {
  input: number;
  output: number;
}

type AnyModel = ReturnType<ReturnType<typeof createOpenAI>>;

function getProviderModel(provider: Provider): AnyModel {
  switch (provider) {
    case "openai":
      return createOpenAI({ apiKey: process.env.OPENAI_API_KEY })("gpt-4o");
    case "anthropic":
      return createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY })("claude-sonnet-4-20250514");
    case "google":
      return createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY })("gemini-2.5-pro");
  }
}

const DEFAULT_MODELS: Record<Provider, string> = {
  openai: "gpt-4o",
  anthropic: "claude-sonnet-4-20250514",
  google: "gemini-2.5-pro",
};

const DEFAULT_FALLBACK: Record<Provider, Provider[]> = {
  openai: ["anthropic", "google"],
  anthropic: ["openai", "google"],
  google: ["openai", "anthropic"],
};

export class AIGateway {
  async generateObject<T>(
    schema: ZodSchema<T>,
    prompt: string,
    options?: GatewayOptions
  ): Promise<T> {
    const preferred = options?.preferredProvider ?? "anthropic";
    const chain = options?.fallbackChain ?? [preferred, ...DEFAULT_FALLBACK[preferred]];
    const maxRetries = options?.maxRetries ?? 2;

    let lastError: Error | null = null;

    for (const provider of chain) {
      const attempts = provider === chain[0] ? 1 : maxRetries;
      for (let attempt = 0; attempt < attempts; attempt++) {
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
    const google = createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });
    const model = google.textEmbeddingModel("text-embedding-004");

    const result = await embed({ model, value: text });
    await this.logUsage("embedding", "google", "text-embedding-004", {
      input: text.length,
      output: 0,
    });
    return result.embedding;
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