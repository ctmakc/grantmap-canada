import { NextResponse } from "next/server";
import { getDb } from "@/lib/db/client";
import { aiUsage } from "@/lib/db/schema";
import { desc, sql } from "drizzle-orm";

export async function GET() {
  try {
    const db = getDb();

    const recent = db
      .select()
      .from(aiUsage)
      .orderBy(desc(aiUsage.createdAt))
      .limit(100)
      .all();

    const totalCost = db
      .select({
        totalCostCents: sql<number>`sum(${aiUsage.costCents})`,
        totalInputTokens: sql<number>`sum(${aiUsage.inputTokens})`,
        totalOutputTokens: sql<number>`sum(${aiUsage.outputTokens})`,
      })
      .from(aiUsage)
      .all();

    return NextResponse.json({
      recent,
      totals: {
        totalCostCents: totalCost[0]?.totalCostCents ?? 0,
        totalInputTokens: totalCost[0]?.totalInputTokens ?? 0,
        totalOutputTokens: totalCost[0]?.totalOutputTokens ?? 0,
      },
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}