import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Grant Matching vs Manual Research — 2026 Comparison for Canadian Businesses",
  description:
    "Should you spend 5+ hours researching Canadian grants manually, or get an AI-generated report in 5 minutes for $150? An honest comparison of both approaches.",
  alternates: { canonical: "/compare/grantmap-vs-manual-research/" },
  openGraph: {
    title: "AI Grant Matching vs Manual Research — 2026 Comparison",
    description:
      "Comparing AI-powered grant matching to manual government research for Canadian small businesses. Time, cost, and accuracy breakdown.",
  },
};

const COMPARISON = [
  {
    criterion: "Time to complete",
    manual: "5–15+ hours",
    ai: "Under 5 minutes",
    winner: "ai",
  },
  {
    criterion: "Programs checked",
    manual: "Typically 3–5 (what you already know)",
    ai: "15+ automatically",
    winner: "ai",
  },
  {
    criterion: "Accuracy of eligibility",
    manual: "Depends on your expertise",
    ai: "Consistent rule-based scoring across all programs",
    winner: "ai",
  },
  {
    criterion: "Draft application text",
    manual: "You write it from scratch",
    ai: "Included for top 3 matches",
    winner: "ai",
  },
  {
    criterion: "Cost",
    manual: "$0 direct (but hours of your time)",
    ai: "$150 one-time report",
    winner: "depends",
  },
  {
    criterion: "Up-to-date information",
    manual: "Only as current as what you find",
    ai: "Database updated regularly",
    winner: "ai",
  },
  {
    criterion: "Specialist knowledge required",
    manual: "High — you need to understand eligibility rules",
    ai: "None — AI interprets rules for you",
    winner: "ai",
  },
  {
    criterion: "Stacking detection",
    manual: "Requires cross-referencing multiple program guides",
    ai: "Automatic — flags programs that can be combined",
    winner: "ai",
  },
];

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Nav */}
      <nav className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">G</div>
            <span className="text-lg font-bold">GrantMap<span className="text-blue-400">.ca</span></span>
          </Link>
          <Link href="/app" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors">
            Try GrantMap
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">AI vs Manual Research</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            AI Grant Matching vs Manual Research: The 2026 Comparison for Canadian Businesses
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Every Canadian small business owner asking about government grants faces the same question: do you spend hours digging through government websites yourself, or pay for an AI to do it in minutes? Here is an honest breakdown of both approaches.
          </p>
        </header>

        {/* The problem */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">The Problem: Grant Research Is Genuinely Hard</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Canada has over 1,500 federal and provincial business support programs — but most businesses only ever hear about a handful of them. The reasons are structural:
          </p>
          <ul className="space-y-3 text-slate-300 mb-6">
            {[
              "Programs are scattered across 12+ government agencies (CRA, ISED, NRC, EDC, provincial ministries)",
              "Eligibility rules are buried in dense PDF program guides and frequently change",
              "Many programs have rolling intake periods with no central calendar",
              "Stacking rules (which programs can be combined) are not documented in one place",
              "The most valuable programs (SR&ED, IRAP) require specialist knowledge to evaluate properly",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="text-rose-400 mt-0.5 shrink-0">×</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-300 leading-relaxed">
            The result: businesses either give up after checking one or two programs, or spend enormous amounts of time on research that a specialist or AI could complete far faster.
          </p>
        </section>

        {/* Time breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Manual Research: What It Actually Takes</h2>
          <div className="glass rounded-2xl p-8 mb-4">
            <div className="text-sm text-slate-400 mb-4">Estimated time for a thorough manual grant search for one business:</div>
            <div className="space-y-3">
              {[
                { task: "Identify relevant federal programs (CRA, ISED, NRC, EDC portals)", time: "1–2 hours" },
                { task: "Read eligibility criteria for each program", time: "1–2 hours" },
                { task: "Identify and check applicable provincial programs", time: "1–2 hours" },
                { task: "Verify current intake periods and deadlines", time: "30–60 min" },
                { task: "Research stacking rules and restrictions", time: "30–60 min" },
                { task: "Draft a summary for the business owner", time: "1–2 hours" },
              ].map((row) => (
                <div key={row.task} className="flex justify-between items-start gap-4 py-2 border-b border-slate-800/50">
                  <span className="text-slate-300 text-sm">{row.task}</span>
                  <span className="text-amber-400 font-medium text-sm shrink-0">{row.time}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-2">
                <span className="text-white font-bold">Total</span>
                <span className="text-amber-400 font-bold text-lg">5–11 hours</span>
              </div>
            </div>
          </div>
          <p className="text-slate-400 text-sm">
            At even $75/hour for a business owner's time, that is $375–$825 in opportunity cost — before writing a single word of an application.
          </p>
        </section>

        {/* Side-by-side comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Head-to-Head Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800/50">
                  <th className="text-left px-4 py-3 text-slate-300 font-medium">Criterion</th>
                  <th className="text-left px-4 py-3 text-slate-300 font-medium">Manual Research</th>
                  <th className="text-left px-4 py-3 text-blue-400 font-medium">GrantMap AI</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.criterion} className={`border-t border-slate-800 ${i % 2 === 0 ? "bg-slate-900/30" : ""}`}>
                    <td className="px-4 py-3 text-white font-medium">{row.criterion}</td>
                    <td className="px-4 py-3 text-slate-400">{row.manual}</td>
                    <td className={`px-4 py-3 font-medium ${row.winner === "ai" ? "text-emerald-400" : "text-slate-300"}`}>
                      {row.ai}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ROI calculation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">ROI Calculation: Is $150 Worth It?</h2>
          <div className="glass rounded-2xl p-8">
            <p className="text-slate-400 text-sm mb-6">Scenario: An Ontario tech company with 8 employees, $1.2M revenue, conducting software R&D.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="text-slate-300 font-semibold mb-3">Manual Research</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-slate-400">Time spent</span><span className="text-slate-300">8 hours</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Opportunity cost (@$100/hr)</span><span className="text-amber-400">$800</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Programs identified</span><span className="text-slate-300">3–4</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">SR&ED identified?</span><span className="text-rose-400">Likely missed</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Draft text produced</span><span className="text-rose-400">None</span></div>
                  <div className="flex justify-between font-bold pt-2 border-t border-slate-800"><span className="text-white">Estimated funding found</span><span className="text-amber-400">$15,000</span></div>
                </div>
              </div>
              <div>
                <div className="text-blue-400 font-semibold mb-3">GrantMap AI Report</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-slate-400">Time spent</span><span className="text-slate-300">10 minutes</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Report cost</span><span className="text-blue-400">$150</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Programs identified</span><span className="text-slate-300">15+ checked</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">SR&ED identified?</span><span className="text-emerald-400">Yes — ~$85K credit</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Draft text produced</span><span className="text-emerald-400">Top 3 matches</span></div>
                  <div className="flex justify-between font-bold pt-2 border-t border-slate-800"><span className="text-white">Estimated funding found</span><span className="text-emerald-400">$120,000+</span></div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-center">
              <div className="text-emerald-400 font-bold text-lg">Net advantage: $119,850 + 8 hours saved</div>
              <div className="text-slate-500 text-xs mt-1">Estimates based on typical CCPC SR&ED claim on $200K eligible R&D expenditures + CDAP + Canada Job Grant.</div>
            </div>
          </div>
        </section>

        {/* When manual works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">When Manual Research Makes Sense</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            We are being honest: manual research works well in specific situations:
          </p>
          <ul className="space-y-3 text-slate-300">
            {[
              "You already have deep expertise in a specific program (e.g., a CPA who specialises in SR&ED)",
              "Your business is in a niche sector with program-specific grants not in GrantMap's database",
              "You have a dedicated grant writer or research team on staff",
              "You are applying to a highly specialised government tender or competition",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-400 text-sm mt-4">
            For everyone else — the vast majority of Canadian small business owners — AI-assisted matching is faster, more thorough, and more cost-effective.
          </p>
        </section>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">See What GrantMap Finds for Your Business</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Try the free eligibility quiz — no payment required. Get a sense of which programs you might qualify for before committing to the full $150 report.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/app" className="px-8 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white font-medium transition-all">
              Free Eligibility Quiz
            </Link>
            <Link href="/#pricing" className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all">
              Get AI Report — $150
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-slate-300 mb-4">Related</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <Link href="/for-accountants/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">For Accountants</div>
              <div className="text-slate-500">Run reports for all clients — $50/mo</div>
            </Link>
            <Link href="/grants/federal/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Federal Grants Guide</div>
              <div className="text-slate-500">What the AI is matching against</div>
            </Link>
            <Link href="/blog/canadian-business-grants-2026/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Canadian Grants 2026</div>
              <div className="text-slate-500">Complete pillar guide</div>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/30 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-6 text-xs text-slate-600 flex justify-between">
          <span>GrantMap Canada — AI Grant Intelligence</span>
          <Link href="/" className="hover:text-slate-400">Home</Link>
        </div>
      </footer>
    </div>
  );
}
