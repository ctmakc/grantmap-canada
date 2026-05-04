import { describe, it, expect, beforeEach } from "vitest";
import { getPrograms, getProgramById, resetCache } from "./loader";

describe("Grant Program Loader", () => {
  beforeEach(() => {
    resetCache();
  });

  it("loads all 15 grant programs", () => {
    const programs = getPrograms();
    expect(programs.length).toBe(15);
  });

  it("each program has required fields", () => {
    const programs = getPrograms();
    for (const p of programs) {
      expect(p.id).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.jurisdiction).toBeTruthy();
      expect(p.type).toBeTruthy();
      expect(p.eligibilitySummary).toBeTruthy();
      expect(p.funding.amountMin).toBeGreaterThanOrEqual(0);
      expect(p.funding.amountMax).toBeGreaterThanOrEqual(p.funding.amountMin);
      expect(["simple", "moderate", "complex"]).toContain(p.application.complexity);
    }
  });

  it("finds program by id", () => {
    const sred = getProgramById("sred-tax-credit");
    expect(sred).toBeDefined();
    expect(sred!.name).toContain("SR&ED");
    expect(sred!.jurisdiction).toBe("federal");
    expect(sred!.type).toBe("tax_credit");
    expect(sred!.funding.amountMax).toBe(3000000);
    expect(sred!.application.ongoing).toBe(true);
  });

  it("returns undefined for nonexistent id", () => {
    expect(getProgramById("nonexistent")).toBeUndefined();
  });

  it("programs include federal and provincial jurisdictions", () => {
    const programs = getPrograms();
    const jurisdictions = new Set(programs.map((p) => p.jurisdiction));
    expect(jurisdictions.has("federal")).toBe(true);
    expect(jurisdictions.has("ON")).toBe(true);
  });

  it("programs include grants and tax credits", () => {
    const programs = getPrograms();
    const types = new Set(programs.map((p) => p.type));
    expect(types.has("grant")).toBe(true);
    expect(types.has("tax_credit")).toBe(true);
  });

  it("cache returns same reference on second call", () => {
    const first = getPrograms();
    const second = getPrograms();
    expect(first).toBe(second);
  });

  it("resetCache forces reload", () => {
    const first = getPrograms();
    resetCache();
    const second = getPrograms();
    expect(first).not.toBe(second);
    expect(first.length).toBe(second.length);
  });
});