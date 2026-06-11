import { NextRequest, NextResponse } from "next/server";
import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText, type LanguageModel } from "ai";

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL ?? "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL ?? "qwen2.5:latest";

function getChatModel(): LanguageModel {
  const provider = process.env.AI_PROVIDER;

  // Explicit override
  if (provider === "anthropic" && process.env.ANTHROPIC_API_KEY) {
    return createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY })("claude-haiku-4-20250514");
  }
  if (provider === "google" && process.env.GEMINI_API_KEY) {
    return createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY })("gemini-2.0-flash");
  }
  if (provider === "openai" && process.env.OPENAI_API_KEY) {
    return createOpenAI({ apiKey: process.env.OPENAI_API_KEY })("gpt-4o-mini");
  }

  // Auto-detect: Ollama first, then cloud providers
  if (process.env.OLLAMA_BASE_URL) {
    return createOpenAI({ baseURL: `${OLLAMA_BASE_URL}/v1`, apiKey: "ollama" })(OLLAMA_MODEL);
  }
  if (process.env.OPENAI_API_KEY) {
    return createOpenAI({ apiKey: process.env.OPENAI_API_KEY })("gpt-4o-mini");
  }
  if (process.env.ANTHROPIC_API_KEY) {
    return createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY })("claude-haiku-4-20250514");
  }
  if (process.env.GEMINI_API_KEY) {
    return createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY })("gemini-2.0-flash");
  }

  // Last resort fallback to Ollama (will fail with a clear error if not running)
  return createOpenAI({ baseURL: `${OLLAMA_BASE_URL}/v1`, apiKey: "ollama" })(OLLAMA_MODEL);
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const model = getChatModel();

    const result = streamText({
      model,
      messages,
      system: `You are GrantMap AI Advisor — an expert on Canadian government grants, subsidies, tax credits, and funding programs. You help small business owners and accountants navigate 300+ federal and provincial programs.

Key programs you know well:
- SR&ED Tax Credit (federal R&D tax credit, 15-35% of eligible expenditures)
- CDAP (Canada Digital Adoption Program, up to $15K for digital tools)
- Ontario Innovation Tax Credit (8-12% refundable R&D credit)
- CanExport (federal export grants $3K-$75K)
- Women Entrepreneurship Strategy (federal, women-owned businesses)
- BC Tech Pilot (BC tech startups, up to $75K)
- Alberta Innovates (AB R&D grants up to $500K)
- And many more provincial and federal programs

Be specific, actionable, and reference actual program names and amounts. If unsure about a detail, say so rather than guessing. Always ask follow-up questions to narrow down the best programs for the user's situation.`,
    });

    return result.toTextStreamResponse();
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
