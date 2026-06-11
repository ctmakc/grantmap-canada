# GrantMap Canada — Setup & Deploy Guide

## Quick Summary

- **Landing page**: `/` — pricing, features, Stripe CTAs
- **App dashboard**: `/app` — AI matching pipeline, quiz, explorer, chat
- **Stripe checkout**: `POST /api/stripe/checkout`
- **Stripe webhook**: `POST /api/stripe/webhook`
- **Grant programs**: `src/grants-db/programs/*.json` (static JSON, no DB required)

---

## 1. Local Development

```bash
pnpm install
cp .env.example .env.local
# Fill in at minimum one AI provider key (OPENAI_API_KEY recommended)
pnpm dev     # runs on http://localhost:3003
```

For local dev, SQLite is used automatically when `DATABASE_URL` is not set.
The Stripe checkout and webhook will not work without Stripe keys — the rest of the app (quiz, explorer, chat, AI pipeline) works without Stripe.

---

## 2. Vercel Deploy

### Step 1 — Push to GitHub

```bash
git remote add origin https://github.com/YOUR_ORG/grantmap-canada
git push -u origin master
```

### Step 2 — Import on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel auto-detects Next.js; build/install commands are in `vercel.json`

### Step 3 — Set Environment Variables

In Vercel project settings → Environment Variables, add:

| Variable | Value |
|---|---|
| `AI_PROVIDER` | `openai` |
| `OPENAI_API_KEY` | `sk-...` |
| `DATABASE_URL` | Neon connection string (see §3) |
| `STRIPE_SECRET_KEY` | `sk_live_...` or `sk_test_...` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_live_...` or `pk_test_...` |
| `STRIPE_WEBHOOK_SECRET` | `whsec_...` (see §4) |
| `NEXT_PUBLIC_APP_URL` | `https://your-app.vercel.app` |

### Step 4 — Deploy

Click Deploy. Vercel runs `pnpm build` automatically.

---

## 3. Neon Postgres Setup

1. Create a free account at [neon.tech](https://neon.tech)
2. Create a new project → get the connection string
3. Run the init migration:

```bash
psql $DATABASE_URL -f src/lib/db/migrations/pg/0000_init.sql
```

Or paste the SQL directly in the Neon SQL Editor in their dashboard.

4. Add `DATABASE_URL` to Vercel env vars (see §2 Step 3)

**Free tier is enough** — the app stores profiles, matches, drafts, and orders only.

---

## 4. Stripe Setup

### Create Products

In [Stripe Dashboard](https://dashboard.stripe.com/products) → Add Product:

**Product 1: Single Grant Report**
- Name: `GrantMap Canada — Single Grant Report`
- Price: `$150.00 CAD`, one-time
- Copy the Price ID → set as `STRIPE_PRICE_ID_REPORT`

**Product 2: Monthly Unlimited**
- Name: `GrantMap Canada — Monthly Unlimited`
- Price: `$50.00 CAD`, recurring monthly
- Copy the Price ID → set as `STRIPE_PRICE_ID_MONTHLY`

> If you skip setting Price IDs, the app creates inline prices automatically (fine for testing, less flexible for Stripe dashboard management).

### Create Webhook Endpoint

1. Stripe Dashboard → Developers → Webhooks → Add endpoint
2. Endpoint URL: `https://your-app.vercel.app/api/stripe/webhook`
3. Events to listen to:
   - `checkout.session.completed`
   - `invoice.payment_succeeded`
4. Copy the Signing Secret → set as `STRIPE_WEBHOOK_SECRET`

### Test Locally with Stripe CLI

```bash
stripe login
stripe listen --forward-to localhost:3003/api/stripe/webhook
```

Use test card `4242 4242 4242 4242` with any future expiry.

---

## 5. AI Provider Setup

**Recommended for Vercel: OpenAI** (`gpt-4o-mini` — fast, $0.15/1M input tokens)

| Provider | Env Var | Recommended Model |
|---|---|---|
| OpenAI | `OPENAI_API_KEY` | gpt-4o-mini |
| Anthropic | `ANTHROPIC_API_KEY` | claude-haiku |
| Google | `GEMINI_API_KEY` | gemini-2.0-flash |
| Ollama (local only) | `OLLAMA_BASE_URL` | qwen2.5:latest |

Set `AI_PROVIDER=openai` (or `anthropic`, `google`) — the gateway auto-detects based on available keys if not set.

Cost per report (OpenAI gpt-4o-mini estimate): ~$0.05–0.20 per full pipeline run.

---

## 6. Adding More Grant Programs

Grant programs are static JSON files. To add a new program:

1. Copy any existing file from `src/grants-db/programs/`
2. Edit the fields — required fields: `id`, `name`, `jurisdiction`, `type`, `eligibilitySummary`, `eligibilityCriteria`, `funding`, `application`
3. Set `"embedding": []` (the app generates a pseudo-embedding at runtime)
4. Restart the dev server — programs are loaded on startup

No DB migration or rebuild needed — the loader reads all `*.json` files at startup.

---

## 7. URL Structure

| Route | Purpose |
|---|---|
| `/` | Landing page with pricing |
| `/app` | AI dashboard (quiz, matching, explorer, chat) |
| `/report/success?session_id=...` | Post-payment confirmation |
| `/api/stripe/checkout` | POST — create Stripe session |
| `/api/stripe/webhook` | POST — receive Stripe events |
| `/api/grants` | GET — list all grant programs |
| `/api/matches` | POST/GET — run pipeline / fetch results |
| `/api/quiz` | POST — quick eligibility check |
| `/api/chat` | POST — streaming AI advisor |
