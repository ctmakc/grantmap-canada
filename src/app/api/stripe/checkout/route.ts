import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getDb } from "@/lib/db/client";
import { grantOrders } from "@/lib/db/schema";

// Lazy Stripe init so build doesn't fail when env var is absent
function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not configured");
  return new Stripe(key, { apiVersion: "2026-04-22.dahlia" });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { plan, businessProfile, email } = body as {
      plan: "report" | "monthly";
      businessProfile?: Record<string, unknown>;
      email?: string;
    };

    if (!plan || !["report", "monthly"].includes(plan)) {
      return NextResponse.json({ error: "plan must be 'report' or 'monthly'" }, { status: 400 });
    }

    const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3003";

    let sessionConfig: Stripe.Checkout.SessionCreateParams;

    if (plan === "report") {
      // One-time $150 payment
      const priceId = process.env.STRIPE_PRICE_ID_REPORT;
      if (priceId) {
        sessionConfig = {
          mode: "payment",
          line_items: [{ price: priceId, quantity: 1 }],
          success_url: `${origin}/report/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${origin}/?cancelled=1`,
          customer_email: email,
          metadata: {
            plan: "report",
            profileData: businessProfile ? JSON.stringify(businessProfile).slice(0, 500) : "",
          },
        };
      } else {
        // Fallback: inline price definition (for testing without pre-created price)
        sessionConfig = {
          mode: "payment",
          line_items: [
            {
              price_data: {
                currency: "cad",
                unit_amount: 15000, // $150.00 CAD in cents
                product_data: {
                  name: "GrantMap Canada — Single Grant Report",
                  description: "AI-powered matching across 15+ Canadian grant programs. Includes application drafts for top 3 matches.",
                },
              },
              quantity: 1,
            },
          ],
          success_url: `${origin}/report/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${origin}/?cancelled=1`,
          customer_email: email,
          metadata: {
            plan: "report",
            profileData: businessProfile ? JSON.stringify(businessProfile).slice(0, 500) : "",
          },
        };
      }
    } else {
      // Monthly $50 subscription
      const priceId = process.env.STRIPE_PRICE_ID_MONTHLY;
      if (priceId) {
        sessionConfig = {
          mode: "subscription",
          line_items: [{ price: priceId, quantity: 1 }],
          success_url: `${origin}/report/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${origin}/?cancelled=1`,
          customer_email: email,
          metadata: { plan: "monthly" },
        };
      } else {
        sessionConfig = {
          mode: "subscription",
          line_items: [
            {
              price_data: {
                currency: "cad",
                unit_amount: 5000, // $50.00 CAD/month in cents
                recurring: { interval: "month" },
                product_data: {
                  name: "GrantMap Canada — Monthly Unlimited",
                  description: "Unlimited AI grant matching reports for accountants and advisors.",
                },
              },
              quantity: 1,
            },
          ],
          success_url: `${origin}/report/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${origin}/?cancelled=1`,
          customer_email: email,
          metadata: { plan: "monthly" },
        };
      }
    }

    const session = await getStripe().checkout.sessions.create(sessionConfig);

    // Record the pending order in the database
    try {
      const db = getDb();
      await db.insert(grantOrders).values({
        id: crypto.randomUUID(),
        stripeSessionId: session.id,
        plan,
        email: email ?? null,
        profileData: businessProfile ? JSON.stringify(businessProfile) : null,
        status: "pending",
        reportGenerated: 0,
        createdAt: new Date().toISOString(),
        paidAt: null,
      });
    } catch {
      // Order pre-record is best-effort; webhook will create it on success
    }

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
