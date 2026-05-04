import { NextRequest, NextResponse } from "next/server";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL ?? "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL ?? "qwen2.5:latest";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const ollama = createOpenAI({ baseURL: `${OLLAMA_BASE_URL}/v1`, apiKey: "ollama" });
    const model = ollama(OLLAMA_MODEL);

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