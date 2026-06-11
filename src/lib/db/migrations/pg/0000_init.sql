-- GrantMap Canada — Neon Postgres initial schema
-- Run once against your Neon database to initialize tables.
-- Connect with: psql $DATABASE_URL -f src/lib/db/migrations/pg/0000_init.sql

CREATE TABLE IF NOT EXISTS users (
  id         TEXT PRIMARY KEY,
  email      TEXT NOT NULL UNIQUE,
  name       TEXT NOT NULL,
  plan_tier  TEXT NOT NULL DEFAULT 'starter',
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS clients (
  id           TEXT PRIMARY KEY,
  user_id      TEXT,
  name         TEXT NOT NULL,
  company_name TEXT NOT NULL,
  created_at   TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS profiles (
  id                 TEXT PRIMARY KEY,
  client_id          TEXT,
  raw_data           TEXT NOT NULL,
  structured_profile TEXT,
  status             TEXT NOT NULL DEFAULT 'raw',
  created_at         TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS matches (
  id                   TEXT PRIMARY KEY,
  profile_id           TEXT,
  program_id           TEXT NOT NULL,
  eligibility_score    INTEGER NOT NULL,
  expected_amount_min  INTEGER NOT NULL,
  expected_amount_max  INTEGER NOT NULL,
  complexity           TEXT NOT NULL,
  deadline             TEXT,
  reasoning            TEXT NOT NULL,
  created_at           TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS drafts (
  id           TEXT PRIMARY KEY,
  match_id     TEXT,
  sections_json TEXT NOT NULL,
  created_at   TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS ai_usage (
  id             TEXT PRIMARY KEY,
  user_id        TEXT,
  stage          TEXT NOT NULL,
  provider       TEXT NOT NULL,
  model          TEXT NOT NULL,
  input_tokens   INTEGER NOT NULL,
  output_tokens  INTEGER NOT NULL,
  cost_cents     REAL NOT NULL,
  created_at     TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS grant_orders (
  id               TEXT PRIMARY KEY,
  stripe_session_id TEXT NOT NULL UNIQUE,
  plan             TEXT NOT NULL,
  email            TEXT,
  profile_data     TEXT,
  status           TEXT NOT NULL DEFAULT 'pending',
  report_generated INTEGER NOT NULL DEFAULT 0,
  created_at       TEXT NOT NULL,
  paid_at          TEXT
);
