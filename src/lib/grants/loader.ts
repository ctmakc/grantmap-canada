import fs from "fs";
import path from "path";
import { z } from "zod";

const GrantProgramSchema = z.object({
  id: z.string(),
  name: z.string(),
  jurisdiction: z.enum(["federal", "AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"]),
  type: z.enum(["grant", "tax_credit", "loan", "subsidy", "voucher"]),
  eligibilitySummary: z.string(),
  eligibilityCriteria: z.object({
    industries: z.array(z.string()).optional(),
    revenueMin: z.number().optional(),
    revenueMax: z.number().optional(),
    employeeMin: z.number().optional(),
    employeeMax: z.number().optional(),
    provinces: z.array(z.string()).optional(),
    founderDemographics: z.array(z.string()).optional(),
    rdRequired: z.boolean().optional(),
    exportRequired: z.boolean().optional(),
    startupOnly: z.boolean().optional(),
    yearsInOperationMax: z.number().optional(),
    nonProfitOnly: z.boolean().optional(),
  }),
  funding: z.object({
    amountMin: z.number(),
    amountMax: z.number(),
    description: z.string(),
  }),
  application: z.object({
    deadline: z.string().nullable(),
    ongoing: z.boolean(),
    complexity: z.enum(["simple", "moderate", "complex"]),
    url: z.string(),
    requiredDocuments: z.array(z.string()),
    applicationRequirements: z.string().optional(),
  }),
  embedding: z.array(z.number()),
});

export type GrantProgram = z.infer<typeof GrantProgramSchema>;

let _programs: GrantProgram[] | null = null;

export function getPrograms(): GrantProgram[] {
  if (!_programs) {
    _programs = loadPrograms();
  }
  return _programs;
}

export function getProgramById(id: string): GrantProgram | undefined {
  return getPrograms().find((p) => p.id === id);
}

export function resetCache() {
  _programs = null;
}

function loadPrograms(): GrantProgram[] {
  const dir = path.join(process.cwd(), "src", "grants-db", "programs");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  const programs: GrantProgram[] = [];

  for (const file of files) {
    try {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const parsed = GrantProgramSchema.parse(JSON.parse(raw));
      programs.push(parsed);
    } catch (err) {
      console.warn(`Failed to load grant program ${file}:`, err);
    }
  }

  return programs;
}