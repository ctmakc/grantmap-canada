import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db/client";
import { profiles, matches } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { PipelineRunner } from "@/lib/ai/pipeline";

export async function POST(req: NextRequest) {
  try {
    const { profileId, rawInput } = await req.json();

    if (!profileId || !rawInput) {
      return NextResponse.json({ error: "profileId and rawInput required" }, { status: 400 });
    }

    const db = getDb();
    const runner = new PipelineRunner();
    const state = await runner.run(rawInput, profileId);

    // Update profile with enriched data
    if (state.enrichedProfile) {
      await db
        .update(profiles)
        .set({
          structuredProfile: state.enrichedProfile,
          status: state.drafts ? "drafted" : state.matches ? "matched" : "enriched",
        })
        .where(eq(profiles.id, profileId));
    }

    // Save matches
    if (state.matches) {
      for (const match of state.matches) {
        await db.insert(matches).values({
          id: crypto.randomUUID(),
          profileId,
          programId: match.programId,
          eligibilityScore: match.eligibilityScore,
          expectedAmountMin: match.expectedAmountMin,
          expectedAmountMax: match.expectedAmountMax,
          complexity: match.complexity,
          deadline: match.deadline,
          reasoning: match.reasoning,
          createdAt: new Date(),
        });
      }
    }

    return NextResponse.json({
      profileId,
      stage: state.currentStage,
      enrichedProfile: state.enrichedProfile,
      matchesCount: state.matches?.length ?? 0,
      draftsCount: state.drafts?.length ?? 0,
      matches: state.matches,
      drafts: state.drafts,
      error: state.error,
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const db = getDb();
    const profileId = req.nextUrl.searchParams.get("profileId");

    if (!profileId) {
      return NextResponse.json({ error: "profileId required" }, { status: 400 });
    }

    const result = db.select().from(matches).where(eq(matches.profileId, profileId)).all();
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}