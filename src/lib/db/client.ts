// DB client: uses Neon Postgres when DATABASE_URL is set (Vercel/production),
// falls back to better-sqlite3 for local development.
//
// NOTE: All queries must be awaited — neon-http returns promises,
// and drizzle-orm/better-sqlite3 also supports promise-based API when called via async.

import * as schema from "./schema";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _db: any | null = null;

function buildPgDb() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { neon } = require("@neondatabase/serverless");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { drizzle } = require("drizzle-orm/neon-http");
  const sql = neon(process.env.DATABASE_URL!);
  return drizzle(sql, { schema });
}

// For local SQLite fallback we use a lightweight promise-wrapping approach
function buildSqliteDb() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Database = require("better-sqlite3");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { drizzle } = require("drizzle-orm/better-sqlite3");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const path = require("path");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const fs = require("fs");
  const dbDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });
  const DB_PATH = path.join(dbDir, "grantmap.db");
  const sqlite = new Database(DB_PATH);
  sqlite.pragma("journal_mode = WAL");
  sqlite.pragma("foreign_keys = ON");
  return drizzle(sqlite, { schema });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getDb(): any {
  if (!_db) {
    if (process.env.DATABASE_URL) {
      _db = buildPgDb();
    } else {
      _db = buildSqliteDb();
    }
  }
  return _db;
}
