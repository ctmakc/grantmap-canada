import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  planTier: text("plan_tier", { enum: ["starter", "pro", "firm"] }).notNull().default("starter"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
});

export const clients = sqliteTable("clients", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id),
  name: text("name").notNull(),
  companyName: text("company_name").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
});

export const profiles = sqliteTable("profiles", {
  id: text("id").primaryKey(),
  clientId: text("client_id").notNull().references(() => clients.id),
  rawData: text("raw_data", { mode: "json" }).notNull(),
  structuredProfile: text("structured_profile", { mode: "json" }),
  status: text("status", { enum: ["raw", "enriched", "matched", "drafted"] }).notNull().default("raw"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
});

export const matches = sqliteTable("matches", {
  id: text("id").primaryKey(),
  profileId: text("profile_id").notNull().references(() => profiles.id),
  programId: text("program_id").notNull(),
  eligibilityScore: integer("eligibility_score").notNull(),
  expectedAmountMin: integer("expected_amount_min").notNull(),
  expectedAmountMax: integer("expected_amount_max").notNull(),
  complexity: text("complexity", { enum: ["simple", "moderate", "complex"] }).notNull(),
  deadline: text("deadline"),
  reasoning: text("reasoning", { mode: "json" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
});

export const drafts = sqliteTable("drafts", {
  id: text("id").primaryKey(),
  matchId: text("match_id").notNull().references(() => matches.id),
  sectionsJson: text("sections_json", { mode: "json" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
});

export const aiUsage = sqliteTable("ai_usage", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id),
  stage: text("stage").notNull(),
  provider: text("provider", { enum: ["anthropic", "openai", "google"] }).notNull(),
  model: text("model").notNull(),
  inputTokens: integer("input_tokens").notNull(),
  outputTokens: integer("output_tokens").notNull(),
  costCents: real("cost_cents").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
});