# GrantMap Canada — AI Grant Matching for Canadian Small Business

## Grant Angle

**OpenAI / Anthropic / Google Startup Program Pitch:**

> "An AI-native grant intelligence platform that matches Canadian small businesses to 300+ federal and provincial funding programs using structured reasoning and tool use. GrantMap Canada deploys a four-stage AI pipeline — profile ingestion, semantic candidate retrieval, multi-model scoring with reasoning chains, and application drafting in grant-officer register. Built on a multi-provider AI gateway that routes each task to the optimal model. Open-source, self-hostable, with measurable ROI for accountants and advisors."

**Why grants love it:**

- **Multi-step structured reasoning pipeline** — four distinct AI stages with Zod-validated schemas, high token burn per request
- **Tool use / function calling** — pipeline stages invoke grant database tools, embedding search, and per-program requirement lookups
- **Multi-provider AI gateway** — Claude for reasoning, GPT-4o for parsing, Gemini for embeddings — fits any provider's grant program
- **Measurable ROI** — accountants pay $150+/client, clear business value, grant evaluators love monetizable products
- **Docker + self-hostable** — developer-friendly, open-source distribution

---

## Core Features (MVP Scope)

1. **Company Profile Intake** — structured form: revenue, employees, location, industry (NAICS), founding year, founder demographics, R&D activity, export markets
2. **AI Profile Enrichment** — model infers missing eligibility signals from raw input (industry-specific programs, regional qualifiers)
3. **Semantic Grant Matching** — embedding-based candidate retrieval against pre-indexed grant program database (top-30 candidates)
4. **Structured Scoring & Ranking** — per-candidate reasoning with eligibility confidence, expected amount range, application complexity, deadline
5. **Application Draft Generator** — structured draft for top 3 matches, written in grant-officer language, section-by-section
6. **Advisor Dashboard** — client list, match history, application status, per-client notes
7. **Multi-Provider AI Gateway** — Claude / GPT-4o / Gemini routing with fallback chains and usage tracking
8. **Export** — PDF and Markdown export for application drafts
9. **Docker** — one-command deploy

---

## Architecture

### Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 15 App Router, monolith |
| Database | SQLite + Drizzle ORM |
| AI Orchestration | Vercel AI SDK + custom PipelineRunner |
| Structured Output | `generateObject()` with strict Zod schemas |
| Embeddings | Gemini text-embedding-004 via AI Gateway |
| Frontend | React Server Components + shadcn/ui |
| Styling | Tailwind CSS |
| PDF Export | @react-pdf/renderer |
| Auth | NextAuth.js (credentials + magic link) |
| Docker | Dockerfile + docker-compose.yml |

### AI Pipeline (4 Stages)

```
CompanyProfile → Stage 1: Profile Ingestion
                              ↓
                    Stage 2: Candidate Retrieval (embedding search)
                              ↓
                    Stage 3: Scoring & Ranking (structured reasoning)
                              ↓
                    Stage 4: Application Draft (tool-use generation)
                              ↓
                    GrantMatch[] + ApplicationDraft[]
```

**Stage 1 — Profile Ingestion** (`generateObject`)
- Input: raw company data (form submission)
- Output: structured `CompanyProfile` with normalized fields
- Model: GPT-4o (fast, reliable schema adherence)
- Zod schema: industry codes, size band, location, R&D ratio, export activity, founder demographics

**Stage 2 — Candidate Retrieval** (embedding similarity)
- Input: embedded `CompanyProfile`
- Output: top-30 candidate `GrantProgram[]`
- Model: Gemini text-embedding-004 (cost-effective)
- Method: cosine similarity against pre-computed program embeddings in SQLite (sqlite-vec)

**Stage 3 — Scoring & Ranking** (`generateObject`)
- Input: `CompanyProfile` + top-30 candidates
- Output: `GrantMatch[]` with eligibilityScore, expectedAmount, complexity, deadline, reasoning chain
- Model: Claude (highest reasoning quality for complex eligibility logic)
- This is the high-token step — compound eligibility rules require deep reasoning

**Stage 4 — Application Draft** (`generateObject` with tools)
- Input: top-3 `GrantMatch[]` + program-specific requirements
- Output: `ApplicationDraft[]` — section-by-section draft in grant-officer register
- Model: Claude (creative + structured output)
- Tool calls: `getProgramRequirements(programId)`, `getSuccessfulExamples(programId)`

Each stage persists state to SQLite. Failed steps can resume without re-running earlier stages.

### Multi-Provider AI Gateway

```typescript
class AIGateway {
  // Intelligent routing by capability
  async generateObject<T>(schema: ZodSchema<T>, prompt: string, options?: {
    preferredProvider?: 'anthropic' | 'openai' | 'google'
    fallbackChain?: Provider[]
    maxRetries?: number
  }): Promise<T>

  // Token usage tracking
  async logUsage(stage: PipelineStage, provider: Provider, tokens: TokenCount): Promise<void>
}
```

Routing strategy:
- **Claude** — scoring/reasoning stages, application drafting
- **GPT-4o** — profile extraction, structured parsing
- **Gemini** — embedding generation, cost-sensitive bulk operations

Fallback: if primary provider fails (rate limit, error), next provider in chain takes over.

### Grant Data Management

```
grants-db/
  programs/
    sred-tax-credit.json
    cdap.json
    ontario-innovation-credit.json
    ...
  schemas/
    program.schema.ts    — Zod schema for program validation
  index.ts              — loads and validates all programs at startup
scripts/
  update-grants.ts       — CLI scraper for quarterly updates
```

Each program JSON contains:
- Program ID, name, jurisdiction (federal/provincial/territorial)
- Eligibility criteria (structured: industry codes, revenue ranges, employee counts, location, founder demographics)
- Funding details (amount range, type: grant/tax credit/loan/subsidy)
- Application info (deadline, complexity, URL, required documents)
- Embedding text (pre-computed for semantic search)
- Program-specific requirements for application drafting

Initial database: 50-80 highest-value programs for MVP. Expand to 300+ post-launch.

### Database Schema

```sql
-- Users (advisors/accountants)
users: id, email, name, plan_tier, created_at
clients: id, user_id, name, company_name, created_at
profiles: id, client_id, raw_data, structured_profile, created_at
matches: id, profile_id, program_id, eligibility_score, expected_amount, complexity, deadline, reasoning, created_at
drafts: id, match_id, sections_json, created_at
ai_usage: id, user_id, stage, provider, model, input_tokens, output_tokens, cost_cents, created_at
```

---

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| Advisor Starter | $49/month | 5 client profiles, matching only, no drafts |
| Advisor Pro | $149/month | 25 profiles, full matching + drafting, priority AI |
| Advisor Firm | $399/month | Unlimited profiles, white-label, team seats, API |
| Per-draft credit | $15-25 | Application draft beyond tier limit |

---

## MVP Scope

**In** (v1.0):
- Company profile intake form
- AI profile enrichment (Stage 1)
- Semantic grant matching (Stages 2-3)
- Structured match results with eligibility scores
- Application draft generator for top 3 matches (Stage 4)
- Advisor dashboard with client list
- Multi-provider AI gateway with usage tracking
- 50-80 Canadian grant programs in database
- Docker one-command deploy

**Out** (v2.0+):
- Full 300+ program coverage
- Automated deadline tracking and reminders
- Application status tracking
- QuickBooks/Xero integration
- White-label client reports
- API access
- Billing and subscription management

---

## Project Structure

```
grantmap-canada/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Auth pages
│   │   ├── (dashboard)/       # Advisor dashboard
│   │   ├── api/
│   │   │   ├── ai/            # AI gateway endpoints
│   │   │   ├── profiles/      # Profile CRUD
│   │   │   ├── matches/       # Matching pipeline
│   │   │   └── drafts/        # Draft generation
│   ├── lib/
│   │   ├── ai/
│   │   │   ├── gateway.ts     # Multi-provider AI gateway
│   │   │   ├── pipeline.ts    # Pipeline orchestrator
│   │   │   ├── stages/
│   │   │   │   ├── 1-ingest.ts
│   │   │   │   ├── 2-retrieve.ts
│   │   │   │   ├── 3-score.ts
│   │   │   │   └── 4-draft.ts
│   │   │   └── schemas.ts    # Zod schemas for all stages
│   │   ├── db/
│   │   │   ├── schema.ts      # Drizzle schema
│   │   │   ├── client.ts      # SQLite connection
│   │   │   └── migrations/
│   │   └── grants/
│   │       ├── loader.ts       # Load and validate programs
│   │       └── embeddings.ts   # Embedding management
│   ├── components/             # shadcn/ui components
│   └── grants-db/
│       ├── programs/           # JSON program files
│       └── schemas/
├── scripts/
│   └── update-grants.ts        # CLI scraper
├── docker-compose.yml
├── Dockerfile
└── package.json
```