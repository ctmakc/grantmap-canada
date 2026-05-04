import { NextResponse } from "next/server";
import { getPrograms } from "@/lib/grants/loader";

export async function GET() {
  try {
    const programs = getPrograms();
    return NextResponse.json(
      programs.map((p) => ({
        id: p.id,
        name: p.name,
        jurisdiction: p.jurisdiction,
        type: p.type,
        fundingMin: p.funding.amountMin,
        fundingMax: p.funding.amountMax,
        complexity: p.application.complexity,
        ongoing: p.application.ongoing,
        deadline: p.application.deadline,
        eligibilitySummary: p.eligibilitySummary,
      }))
    );
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}