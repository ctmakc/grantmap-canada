import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db/client";
import { drafts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  try {
    const db = getDb();
    const matchId = req.nextUrl.searchParams.get("matchId");

    if (!matchId) {
      return NextResponse.json({ error: "matchId required" }, { status: 400 });
    }

    const result = await db.select().from(drafts).where(eq(drafts.matchId, matchId));
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
