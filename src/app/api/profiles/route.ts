import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db/client";
import { profiles, clients } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { clientId, rawData } = body;

    if (!clientId || !rawData) {
      return NextResponse.json({ error: "clientId and rawData required" }, { status: 400 });
    }

    const db = getDb();
    const profileId = crypto.randomUUID();

    await db.insert(profiles).values({
      id: profileId,
      clientId,
      rawData,
      structuredProfile: null,
      status: "raw",
      createdAt: new Date(),
    });

    // Trigger matching pipeline in background
    const pipelineUrl = new URL("/api/matches", req.url);
    fetch(pipelineUrl.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profileId, rawInput: rawData }),
    }).catch(console.error);

    return NextResponse.json({ profileId, status: "raw" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const db = getDb();
    const clientId = req.nextUrl.searchParams.get("clientId");

    let result;
    if (clientId) {
      result = db.select().from(profiles).where(eq(profiles.clientId, clientId)).all();
    } else {
      result = db.select().from(profiles).all();
    }

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}