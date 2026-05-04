import { z } from "zod";

// Stage 1: Profile Ingestion
export const CompanyProfileSchema = z.object({
  companyName: z.string(),
  industryNaics: z.string().describe("NAICS industry code"),
  industryDescription: z.string().describe("Human-readable industry description"),
  employeeCount: z.number().int().min(0),
  annualRevenueCdn: z.number().min(0).describe("Annual revenue in CAD"),
  province: z.string().describe("Canadian province or territory code, e.g. ON, BC, QC"),
  city: z.string().optional(),
  foundingYear: z.number().int().min(1900).max(new Date().getFullYear()),
  founderDemographics: z.array(z.string()).describe("Visible minority, women-owned, Indigenous, immigrant founder tags"),
  rdActivity: z.boolean().describe("Does the company do R&D?"),
  rdRatio: z.number().min(0).max(1).optional().describe("R&D spend as fraction of revenue"),
  exportActivity: z.boolean().describe("Does the company export?"),
  exportMarkets: z.array(z.string()).optional().describe("Export market country codes"),
  isStartup: z.boolean().describe("Less than 5 years old?"),
  isNonProfit: z.boolean().default(false),
  sector: z.string().describe("Broad sector: technology, manufacturing, agriculture, services, retail, etc."),
});

export type CompanyProfile = z.infer<typeof CompanyProfileSchema>;

// Stage 2: Candidate Retrieval (uses program data directly, no separate schema)

// Stage 3: Scoring & Ranking
export const GrantMatchSchema = z.object({
  programId: z.string(),
  programName: z.string(),
  eligibilityScore: z.number().int().min(0).max(100).describe("0-100 eligibility confidence"),
  expectedAmountMin: z.number().int().describe("Minimum expected funding in CAD"),
  expectedAmountMax: z.number().int().describe("Maximum expected funding in CAD"),
  complexity: z.enum(["simple", "moderate", "complex"]),
  deadline: z.string().nullable().describe("Application deadline, or null if ongoing"),
  reasoning: z.array(z.string()).describe("Step-by-step eligibility reasoning chain"),
  keyRequirements: z.array(z.string()).describe("Key requirements to address in application"),
});

export type GrantMatch = z.infer<typeof GrantMatchSchema>;

// Stage 4: Application Draft
export const ApplicationSectionSchema = z.object({
  sectionTitle: z.string(),
  content: z.string().describe("Draft content in grant-officer register"),
  wordCount: z.number().int(),
  tips: z.array(z.string()).describe("Tips for strengthening this section"),
});

export const ApplicationDraftSchema = z.object({
  programId: z.string(),
  programName: z.string(),
  sections: z.array(ApplicationSectionSchema),
  overallTips: z.array(z.string()),
  estimatedPrepHours: z.number().describe("Estimated hours to finalize this application"),
});

export type ApplicationDraft = z.infer<typeof ApplicationDraftSchema>;