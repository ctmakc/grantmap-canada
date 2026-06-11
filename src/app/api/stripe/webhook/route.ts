import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getDb } from "@/lib/db/client";
import { grantOrders } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// Lazy Stripe init so build doesn't fail when env var is absent
function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not configured");
  return new Stripe(key, { apiVersion: "2026-04-22.dahlia" });
}

// App Router (Next.js 13+) provides req.text() without any bodyParser config.
// Stripe signature verification works correctly with the raw text body.
export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  let event: Stripe.Event;

  try {
    const rawBody = await req.text();
    event = getStripe().webhooks.constructEvent(rawBody, sig ?? "", webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const plan = (session.metadata?.plan ?? "report") as "report" | "monthly";

      const db = getDb();

      // Upsert order — either update existing pending record or insert new one
      const existing = await db
        .select()
        .from(grantOrders)
        .where(eq(grantOrders.stripeSessionId, session.id));

      if (existing.length > 0) {
        await db
          .update(grantOrders)
          .set({ status: "paid", paidAt: new Date().toISOString() })
          .where(eq(grantOrders.stripeSessionId, session.id));
      } else {
        await db.insert(grantOrders).values({
          id: crypto.randomUUID(),
          stripeSessionId: session.id,
          plan,
          email: session.customer_details?.email ?? null,
          profileData: session.metadata?.profileData ?? null,
          status: "paid",
          reportGenerated: 0,
          createdAt: new Date().toISOString(),
          paidAt: new Date().toISOString(),
        });
      }
    }

    if (event.type === "invoice.payment_succeeded") {
      // Subscription renewal — log it but no action needed for now
      console.info("Subscription payment succeeded:", event.id);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook handler error:", err);
    return NextResponse.json({ error: "Handler failed" }, { status: 500 });
  }
}
