"use client";

import Link from "next/link";
import { useState } from "react";

const FEATURES = [
  {
    icon: "◎",
    title: "Smart Matching",
    desc: "4-stage AI pipeline: profile parsing, semantic retrieval, eligibility scoring, and application drafting — all in one run.",
    color: "blue",
  },
  {
    icon: "◈",
    title: "Application Drafts",
    desc: "Get ready-to-submit draft text for your top 3 matched programs, written in formal grant-officer register with Canadian English.",
    color: "violet",
  },
  {
    icon: "✦",
    title: "15+ Programs",
    desc: "Federal and provincial programs including SR&ED, CDAP, CanExport, Ontario Innovation Credit, Alberta Innovates, and more.",
    color: "fuchsia",
  },
];

const PROGRAMS = [
  { name: "SR&ED Tax Credit", amount: "Up to 35%", type: "Federal" },
  { name: "CDAP", amount: "Up to $15K", type: "Federal" },
  { name: "CanExport", amount: "$3K–$75K", type: "Federal" },
  { name: "Ontario Innovation Credit", amount: "8–12%", type: "Ontario" },
  { name: "Alberta Innovates", amount: "Up to $500K", type: "Alberta" },
  { name: "BC Tech Pilot", amount: "Up to $75K", type: "BC" },
];

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReportCTA() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: "report", email }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }

  async function handleSubscribeCTA() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: "monthly", email }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Nav */}
      <nav className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">
              G
            </div>
            <span className="text-lg font-bold">
              GrantMap<span className="text-blue-400">.ca</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/app" className="text-sm text-slate-400 hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link
              href="/app"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
            >
              Try Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Trusted by 50+ Canadian accountants and advisors
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
          Find Every Grant Your
          <br />
          <span className="text-gradient">Business Qualifies For</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          AI-powered matching across 15+ Canadian federal and provincial programs.
          Used by accountants and business advisors to find funding in minutes.
        </p>

        {/* CTA block */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-4">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
          />
          <button
            onClick={handleReportCTA}
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm hover:from-blue-500 hover:to-violet-500 transition-all disabled:opacity-60 whitespace-nowrap"
          >
            {loading ? "Redirecting..." : "Get Report — $150"}
          </button>
        </div>
        <p className="text-xs text-slate-500">
          Or{" "}
          <Link href="/app" className="text-blue-400 hover:text-blue-300 underline">
            try the dashboard free
          </Link>{" "}
          to explore programs before paying.
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-12 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-white">15+</div>
            <div className="text-sm text-slate-500 mt-1">Grant Programs</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">$4.2B</div>
            <div className="text-sm text-slate-500 mt-1">Available Funding</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">4-Stage</div>
            <div className="text-sm text-slate-500 mt-1">AI Pipeline</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">&lt;5 min</div>
            <div className="text-sm text-slate-500 mt-1">Time to Report</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          How GrantMap Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="glass rounded-2xl p-6 hover:border-slate-600/50 transition-colors"
            >
              <div className={`text-3xl mb-4 text-${f.color}-400`}>{f.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Covered Programs</h2>
        <p className="text-center text-slate-400 mb-10 text-sm">
          A sample of the programs GrantMap checks your business against.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {PROGRAMS.map((p) => (
            <div
              key={p.name}
              className="glass rounded-xl p-4 flex flex-col gap-1"
            >
              <span className="text-xs font-medium text-blue-400">{p.type}</span>
              <span className="text-sm font-semibold text-white">{p.name}</span>
              <span className="text-xs text-slate-400">{p.amount}</span>
            </div>
          ))}
          <div className="glass rounded-xl p-4 flex items-center justify-center">
            <span className="text-sm text-slate-500">+ 9 more programs</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 py-16" id="pricing">
        <h2 className="text-3xl font-bold text-center mb-4">Simple Pricing</h2>
        <p className="text-center text-slate-400 mb-12 text-sm">
          No subscriptions required for a one-off report. Advisors get unlimited access.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Report */}
          <div className="glass rounded-2xl p-8 border border-slate-700/50">
            <div className="text-sm font-medium text-slate-400 mb-2">Single Report</div>
            <div className="text-4xl font-bold text-white mb-1">
              $150
              <span className="text-lg font-normal text-slate-400"> CAD</span>
            </div>
            <div className="text-sm text-slate-500 mb-6">one-time payment</div>
            <ul className="space-y-2 text-sm text-slate-300 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Full 4-stage AI pipeline
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> 15+ programs evaluated
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Top 3 application drafts
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> PDF report delivered by email
              </li>
            </ul>
            <button
              onClick={handleReportCTA}
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all disabled:opacity-60"
            >
              Get Report
            </button>
          </div>

          {/* Monthly */}
          <div className="glass rounded-2xl p-8 border border-blue-500/40 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold">
              Best for Advisors
            </div>
            <div className="text-sm font-medium text-blue-400 mb-2">Monthly Unlimited</div>
            <div className="text-4xl font-bold text-white mb-1">
              $50
              <span className="text-lg font-normal text-slate-400">/mo CAD</span>
            </div>
            <div className="text-sm text-slate-500 mb-6">cancel anytime</div>
            <ul className="space-y-2 text-sm text-slate-300 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Everything in Single Report
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Unlimited reports per month
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Manage multiple clients
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Priority AI processing
              </li>
            </ul>
            <button
              onClick={handleSubscribeCTA}
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all disabled:opacity-60"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="glass rounded-2xl p-10 max-w-2xl mx-auto">
          <div className="text-4xl mb-4 text-slate-600">"</div>
          <p className="text-lg text-slate-300 italic mb-4">
            GrantMap found three programs my client had never heard of. The SR&ED pre-screening alone
            saved us hours of manual research.
          </p>
          <div className="text-sm text-slate-500">
            — A Canadian accounting firm (beta user)
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Funding?</h2>
        <p className="text-slate-400 mb-8">
          Run a free eligibility quiz or go straight to a full AI report.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/app"
            className="px-8 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white font-medium transition-all"
          >
            Try Free Quiz
          </Link>
          <button
            onClick={handleReportCTA}
            disabled={loading}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all disabled:opacity-60"
          >
            Generate Grant Report — $150
          </button>
        </div>
      </section>

      {/* Internal links section for SEO */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-800/30">
        <h2 className="text-lg font-semibold text-slate-300 mb-6">Grant Resources</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="text-slate-400 font-medium mb-3">Grant Guides</div>
            <ul className="space-y-2">
              <li><Link href="/grants/federal/" className="text-slate-500 hover:text-blue-400 transition-colors">Federal Grants Guide</Link></li>
              <li><Link href="/grants/ontario/" className="text-slate-500 hover:text-blue-400 transition-colors">Ontario Grants Guide</Link></li>
              <li><Link href="/sred/" className="text-slate-500 hover:text-blue-400 transition-colors">SR&amp;ED Tax Credit Guide</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-slate-400 font-medium mb-3">Blog</div>
            <ul className="space-y-2">
              <li><Link href="/blog/canadian-business-grants-2026/" className="text-slate-500 hover:text-blue-400 transition-colors">Canadian Grants 2026</Link></li>
              <li><Link href="/blog/irap-grant-guide/" className="text-slate-500 hover:text-blue-400 transition-colors">NRC IRAP Guide</Link></li>
              <li><Link href="/blog/cdap-digital-adoption-program/" className="text-slate-500 hover:text-blue-400 transition-colors">CDAP Guide</Link></li>
              <li><Link href="/blog/sred-tax-credit-calculator/" className="text-slate-500 hover:text-blue-400 transition-colors">SR&amp;ED Calculator</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-slate-400 font-medium mb-3">For Professionals</div>
            <ul className="space-y-2">
              <li><Link href="/for-accountants/" className="text-slate-500 hover:text-blue-400 transition-colors">For Accountants</Link></li>
              <li><Link href="/compare/grantmap-vs-manual-research/" className="text-slate-500 hover:text-blue-400 transition-colors">AI vs Manual Research</Link></li>
              <li><Link href="/about/" className="text-slate-500 hover:text-blue-400 transition-colors">About GrantMap</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-slate-400 font-medium mb-3">Product</div>
            <ul className="space-y-2">
              <li><Link href="/app" className="text-slate-500 hover:text-blue-400 transition-colors">Free Dashboard</Link></li>
              <li><a href="#pricing" className="text-slate-500 hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><Link href="/blog/" className="text-slate-500 hover:text-blue-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/30 mt-4">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between text-xs text-slate-600">
          <span>GrantMap Canada — AI Grant Intelligence for Canadian Businesses</span>
          <div className="flex gap-6">
            <Link href="/app" className="hover:text-slate-400 transition-colors">Dashboard</Link>
            <Link href="/about/" className="hover:text-slate-400 transition-colors">About</Link>
            <a href="#pricing" className="hover:text-slate-400 transition-colors">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
