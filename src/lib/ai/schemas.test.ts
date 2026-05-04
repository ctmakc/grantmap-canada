import { describe, it, expect } from "vitest";
import { CompanyProfileSchema, GrantMatchSchema, ApplicationDraftSchema } from "./schemas";

describe("CompanyProfileSchema", () => {
  const validProfile = {
    companyName: "Acme Tech Inc.",
    industryNaics: "541512",
    industryDescription: "Custom computer programming services",
    employeeCount: 15,
    annualRevenueCdn: 2500000,
    province: "ON",
    city: "Toronto",
    foundingYear: 2020,
    founderDemographics: ["women-owned"],
    rdActivity: true,
    exportActivity: false,
    isStartup: true,
    sector: "technology",
  };

  it("validates a complete profile", () => {
    const result = CompanyProfileSchema.safeParse(validProfile);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.companyName).toBe("Acme Tech Inc.");
      expect(result.data.employeeCount).toBe(15);
      expect(result.data.rdActivity).toBe(true);
    }
  });

  it("applies defaults for optional fields", () => {
    const minimal = { ...validProfile };
    delete minimal.city;
    delete minimal.rdRatio;
    delete minimal.exportMarkets;
    delete minimal.isNonProfit;

    const result = CompanyProfileSchema.safeParse(minimal);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.isNonProfit).toBe(false);
    }
  });

  it("rejects missing required fields", () => {
    const { companyName, ...missing } = validProfile;
    const result = CompanyProfileSchema.safeParse(missing);
    expect(result.success).toBe(false);
  });

  it("rejects negative employee count", () => {
    const result = CompanyProfileSchema.safeParse({ ...validProfile, employeeCount: -1 });
    expect(result.success).toBe(false);
  });

  it("rejects future founding year", () => {
    const result = CompanyProfileSchema.safeParse({ ...validProfile, foundingYear: 2030 });
    expect(result.success).toBe(false);
  });

  it("rejects negative revenue", () => {
    const result = CompanyProfileSchema.safeParse({ ...validProfile, annualRevenueCdn: -100 });
    expect(result.success).toBe(false);
  });
});

describe("GrantMatchSchema", () => {
  const validMatch = {
    programId: "sred-tax-credit",
    programName: "SR&ED Tax Credit",
    eligibilityScore: 85,
    expectedAmountMin: 20000,
    expectedAmountMax: 1000000,
    complexity: "complex" as const,
    deadline: null,
    reasoning: ["Company does R&D", "Located in Canada"],
    keyRequirements: ["T661 form", "Technical documentation"],
  };

  it("validates a complete match", () => {
    const result = GrantMatchSchema.safeParse(validMatch);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.eligibilityScore).toBe(85);
    }
  });

  it("rejects score above 100", () => {
    const result = GrantMatchSchema.safeParse({ ...validMatch, eligibilityScore: 150 });
    expect(result.success).toBe(false);
  });

  it("rejects score below 0", () => {
    const result = GrantMatchSchema.safeParse({ ...validMatch, eligibilityScore: -5 });
    expect(result.success).toBe(false);
  });

  it("accepts null deadline", () => {
    const result = GrantMatchSchema.safeParse({ ...validMatch, deadline: null });
    expect(result.success).toBe(true);
  });

  it("accepts string deadline", () => {
    const result = GrantMatchSchema.safeParse({ ...validMatch, deadline: "2026-03-31" });
    expect(result.success).toBe(true);
  });

  it("rejects invalid complexity", () => {
    const result = GrantMatchSchema.safeParse({ ...validMatch, complexity: "hard" });
    expect(result.success).toBe(false);
  });
});

describe("ApplicationDraftSchema", () => {
  const validDraft = {
    programId: "sred-tax-credit",
    programName: "SR&ED Tax Credit",
    sections: [
      {
        sectionTitle: "Project Description",
        content: "Our company conducts experimental development...",
        wordCount: 250,
        tips: ["Quantify R&D expenditure", "Highlight technological advancement"],
      },
    ],
    overallTips: ["Start early", "Document everything"],
    estimatedPrepHours: 8,
  };

  it("validates a complete draft", () => {
    const result = ApplicationDraftSchema.safeParse(validDraft);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.sections.length).toBe(1);
      expect(result.data.estimatedPrepHours).toBe(8);
    }
  });

  it("rejects missing programId", () => {
    const { programId, ...missing } = validDraft;
    const result = ApplicationDraftSchema.safeParse(missing);
    expect(result.success).toBe(false);
  });

  it("accepts empty sections array", () => {
    const result = ApplicationDraftSchema.safeParse({ ...validDraft, sections: [] });
    expect(result.success).toBe(true);
  });
});