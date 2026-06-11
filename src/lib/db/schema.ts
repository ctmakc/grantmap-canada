// Schema supports both Postgres (Neon/Vercel) and SQLite (local dev).
// When DATABASE_URL is set → Postgres columns; otherwise SQLite columns.
// The same column names/types are used so Drizzle queries work identically.

import { pgTable, text, integer, real } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  planTier: text("plan_tier").notNull().default("starter"),
  createdAt: text("created_at").notNull().$defaultFn(() => new Date().toISOString()),
});

export const clients = pgTable("clients", {
  id: text("id").primaryKey(),
  userId: text("user_id"),
  name: text("name").notNull(),
  companyName: text("company_name").notNull(),
  createdAt: text("created_at").notNull().$defaultFn(() => new Date().toISOString()),
});

export const profiles = pgTable("profiles", {
  id: text("id").primaryKey(),
  clientId: text("client_id"),
  rawData: text("raw_data").notNull(),
  structuredProfile: text("structured_profile"),
  status: text("status").notNull().default("raw"),
  createdAt: text("created_at").notNull().$defaultFn(() => new Date().toISOString()),
});

export const matches = pgTable("matches", {
  id: text("id").primaryKey(),
  profileId: text("profile_id"),
  programId: text("program_id").notNull(),
  eligibilityScore: integer("eligibility_score").notNull(),
  expectedAmountMin: integer("expected_amount_min").notNull(),
  expectedAmountMax: integer("expected_amount_max").notNull(),
  complexity: text("complexity").notNull(),
  deadline: text("deadline"),
  reasoning: text("reasoning").notNull(),
  createdAt: text("created_at").notNull().$defaultFn(() => new Date().toISOString()),
});

export const drafts = pgTable("drafts", {
  id: text("id").primaryKey(),
  matchId: text("match_id"),
  sectionsJson: text("sections_json").notNull(),
  createdAt: text("created_at").notNull().$defaultFn(() => new Date().toISOString()),
});

export const aiUsage = pgTable("ai_usage", {
  id: text("id").primaryKey(),
  userId: text("user_id"),
  stage: text("stage").notNull(),
  provider: text("provider").notNull(),
  model: text("model").notNull(),
  inputTokens: integer("input_tokens").notNull(),
  outputTokens: integer("output_tokens").notNull(),
  costCents: real("cost_cents").notNull(),
  createdAt: text("created_at").notNull().$defaultFn(() => new Date().toISOString()),
});

// Stripe orders table for payment tracking
export const grantOrders = pgTable("grant_orders", {
  id: text("id").primaryKey(),
  stripeSessionId: text("stripe_session_id").notNull().unique(),
  plan: text("plan").notNull(), // 'report' | 'monthly'
  email: text("email"),
  profileData: text("profile_data"), // JSON stringified business profile
  status: text("status").notNull().default("pending"), // pending | paid | used
  reportGenerated: integer("report_generated").notNull().default(0),
  createdAt: text("created_at").notNull().$defaultFn(() => new Date().toISOString()),
  paidAt: text("paid_at"),
});
