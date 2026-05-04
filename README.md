# GrantMap Canada

AI-powered grant matching platform for Canadian small businesses. Matches company profiles to 300+ federal and provincial funding programs using structured reasoning and tool use.

## Quick Start

```bash
cp .env.example .env  # Add your AI API keys
pnpm install
pnpm dev
```

Open http://localhost:3000

## How It Works

4-stage AI pipeline:

1. **Profile Ingestion** — GPT-4o parses raw company data into structured profile
2. **Candidate Retrieval** — Gemini embeddings find top-30 matching programs
3. **Scoring & Ranking** — Claude reasons through eligibility with 0-100 confidence scores
4. **Application Draft** — Claude generates section-by-section grant applications

## Multi-Provider AI Gateway

Routes each task to the optimal model:
- **Claude** — scoring, reasoning, application drafting
- **GPT-4o** — profile extraction, structured parsing
- **Gemini** — embeddings, cost-sensitive operations

Falls back to alternate providers on failure.

## Docker

```bash
docker compose up --build
```

## Grant Programs

Program data lives in `src/grants-db/programs/` as JSON files. Currently 15 programs covering federal (SR&ED, CDAP, CanExport, etc.) and provincial (Ontario, BC, Alberta, Quebec, Nova Scotia) programs.

## Tech Stack

- Next.js 15 App Router
- SQLite + Drizzle ORM
- Vercel AI SDK (multi-provider)
- shadcn/ui + Tailwind CSS
- Docker standalone