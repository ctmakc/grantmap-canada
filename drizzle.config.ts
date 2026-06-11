import { defineConfig } from "drizzle-kit";

const isPostgres = Boolean(process.env.DATABASE_URL);

export default defineConfig(
  isPostgres
    ? {
        schema: "./src/lib/db/schema.ts",
        out: "./src/lib/db/migrations/pg",
        dialect: "postgresql",
        dbCredentials: {
          url: process.env.DATABASE_URL!,
        },
      }
    : {
        // Local SQLite fallback — used only when DATABASE_URL is not set
        // Note: schema uses pgTable types; for local dev use DATABASE_URL pointing
        // to a local Postgres or Neon, or run the migrations/pg/0000_init.sql manually.
        schema: "./src/lib/db/schema.ts",
        out: "./src/lib/db/migrations/pg",
        dialect: "postgresql",
        dbCredentials: {
          url: "postgresql://localhost:5432/grantmap",
        },
      }
);
