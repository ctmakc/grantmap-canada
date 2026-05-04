import { describe, it, expect } from "vitest";
import { users, clients, profiles, matches, drafts, aiUsage } from "./schema";

describe("Database Schema", () => {
  it("users table has correct columns", () => {
    const columns = Object.keys(users);
    expect(columns).toContain("id");
    expect(columns).toContain("email");
    expect(columns).toContain("name");
    expect(columns).toContain("planTier");
    expect(columns).toContain("createdAt");
  });

  it("clients table references users", () => {
    const columns = Object.keys(clients);
    expect(columns).toContain("userId");
  });

  it("profiles table references clients", () => {
    const columns = Object.keys(profiles);
    expect(columns).toContain("clientId");
    expect(columns).toContain("rawData");
    expect(columns).toContain("status");
  });

  it("matches table references profiles", () => {
    const columns = Object.keys(matches);
    expect(columns).toContain("profileId");
    expect(columns).toContain("programId");
    expect(columns).toContain("eligibilityScore");
    expect(columns).toContain("expectedAmountMin");
    expect(columns).toContain("expectedAmountMax");
    expect(columns).toContain("complexity");
  });

  it("drafts table references matches", () => {
    const columns = Object.keys(drafts);
    expect(columns).toContain("matchId");
    expect(columns).toContain("sectionsJson");
  });

  it("aiUsage table tracks provider", () => {
    const columns = Object.keys(aiUsage);
    expect(columns).toContain("provider");
    expect(columns).toContain("model");
    expect(columns).toContain("inputTokens");
    expect(columns).toContain("outputTokens");
    expect(columns).toContain("costCents");
    expect(columns).toContain("stage");
  });
});