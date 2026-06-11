import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { AIGateway } from "@/lib/ai/gateway";

const QuizAnswerSchema = z.object({
  province: z.string(),
  employeeCount: z.number(),
  annualRevenue: z.number(),
  sector: z.string(),
  rdActivity: z.boolean(),
  exportActivity: z.boolean(),
  founderDemographics: z.array(z.string()),
  yearsInOperation: z.number(),
});

const QuizResultSchema = z.object({
  topPrograms: z.array(z.object({
    programId: z.string(),
    programName: z.string(),
    eligibilityScore: z.number(),
    expectedFunding: z.string(),
    oneLineReason: z.string(),
  })),
  summary: z.string(),
  nextSteps: z.array(z.string()),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const answers = QuizAnswerSchema.parse(body);

    const gateway = new AIGateway();
    const prompt = `Based on this Canadian company profile, recommend the top 5 grant programs they should apply for.

Company: ${answers.sector} sector in ${answers.province}, ${answers.employeeCount} employees, $${answers.annualRevenue} annual revenue.
R&D: ${answers.rdActivity ? "Yes" : "No"}, Exports: ${answers.exportActivity ? "Yes" : "No"}
Demographics: ${answers.founderDemographics.join(", ") || "None specified"}
Years in operation: ${answers.yearsInOperation}

Known programs to consider: SR&ED Tax Credit, CDAP, Ontario Innovation Tax Credit, CanExport, Women Entrepreneurship Strategy, BC Tech Pilot, Alberta Innovates, Quebec Jeunes Promesse, Nova Scotia Business Rebate, Indigenous Entrepreneurship Program, Skills Hire Ontario, Young Canada Works, AgriInnovate, Canada Summer Jobs, IDEA Ontario.

For each, give a realistic eligibility score (0-100), expected funding range, and one-line reason why they qualify.

End with a 2-3 sentence summary and 3 actionable next steps.`;

    const result = await gateway.generateObject(QuizResultSchema, prompt);

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}