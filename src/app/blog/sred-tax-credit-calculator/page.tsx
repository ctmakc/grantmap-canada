import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SR&ED Tax Credit Calculator: Estimate Your Refund (2026)",
  description:
    "Estimate your SR&ED tax credit refund with worked examples. Shows CCPC vs other corporation rates, Ontario top-up, and how contractor vs employee costs affect your claim.",
  alternates: { canonical: "/blog/sred-tax-credit-calculator/" },
  openGraph: {
    title: "SR&ED Tax Credit Calculator: Estimate Your Refund (2026)",
    description:
      "Worked examples for estimating your SR&ED refund. CCPC 35% vs 15% non-refundable, Ontario top-up, and overhead proxy calculation.",
  },
};

const EXAMPLES = [
  {
    title: "Small Ontario Tech Startup",
    profile: "Ontario CCPC, 6 employees, $800K revenue, $150K in R&D labour",
    table: [
      { label: "Direct R&D labour (salaries)", value: "$150,000" },
      { label: "Overhead proxy (55% of labour)", value: "$82,500" },
      { label: "Contractors (80% of $30K)", value: "$24,000" },
      { label: "Total eligible expenditures", value: "$256,500", bold: true },
      { label: "Federal SR&ED ITC (35% CCPC)", value: "$89,775", highlight: true },
      { label: "Ontario Innovation Tax Credit (12%)", value: "$30,780", highlight: true },
      { label: "Total refundable credits", value: "$120,555", highlight: true, large: true },
    ],
    note: "Both credits are refundable for this qualifying CCPC. Even with no tax owing, CRA issues a cheque.",
  },
  {
    title: "Mid-Size Alberta Manufacturer",
    profile: "Canadian corporation (not CCPC), 120 employees, $8M revenue, $500K in eligible R&D",
    table: [
      { label: "Eligible R&D expenditures", value: "$500,000" },
      { label: "Federal SR&ED ITC (15% — non-CCPC)", value: "$75,000" },
      { label: "Credit type", value: "Non-refundable — applied against taxes owing" },
      { label: "Alberta Research & Innovation Credit*", value: "N/A — no provincial SR&ED credit in Alberta" },
      { label: "Net ITC applied against tax", value: "$75,000", highlight: true },
    ],
    note: "Non-CCPC corporations receive a non-refundable 15% credit. Alberta does not have a provincial SR&ED top-up (unlike Ontario and Quebec).",
  },
  {
    title: "Software Company Claiming SR&ED on a Specific Project",
    profile: "Ontario CCPC, 15 employees, 3 employees spent 40% of their time on qualifying software R&D, $200K total salary pool",
    table: [
      { label: "Qualifying labour (40% of $200K salaries)", value: "$80,000" },
      { label: "Overhead proxy (55% of $80K)", value: "$44,000" },
      { label: "Cloud infrastructure consumed in R&D", value: "$12,000" },
      { label: "Total eligible expenditures", value: "$136,000", bold: true },
      { label: "Federal SR&ED ITC (35%)", value: "$47,600", highlight: true },
      { label: "Ontario OITC (8% — income above $600K threshold)", value: "$10,880", highlight: true },
      { label: "Total recovery", value: "$58,480", highlight: true, large: true },
    ],
    note: "Time allocation (40% in this example) must be supported by timesheets or other contemporaneous records. Cloud computing costs are eligible as materials consumed in R&D.",
  },
];

export default function SREDCalculatorPage() {
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
            Check SR&amp;ED Eligibility
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog/" className="hover:text-blue-400">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">SR&amp;ED Calculator</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 font-medium">Tax Credit</span>
            <span className="text-xs text-slate-500">May 12, 2026 · 6 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            SR&amp;ED Tax Credit Calculator: Estimate Your Refund (2026)
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Before engaging an SR&amp;ED specialist, it helps to understand roughly what your claim might be worth. These worked examples walk through the calculation for three different business types — from a small Ontario startup to a mid-size manufacturer.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          {/* Rate reminder */}
          <section className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-4">SR&amp;ED Rates at a Glance (2026)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-slate-400 mb-2 font-medium">Canadian-Controlled Private Corporation (CCPC)</div>
                <div className="space-y-1">
                  <div className="flex justify-between"><span className="text-slate-400">Federal rate</span><span className="text-emerald-400 font-bold">35% refundable</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Expenditure limit</span><span className="text-slate-300">$3,000,000/year</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Ontario top-up</span><span className="text-emerald-400">+8% to +12%</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Quebec top-up</span><span className="text-emerald-400">+14% to +30%</span></div>
                </div>
              </div>
              <div>
                <div className="text-slate-400 mb-2 font-medium">Other Corporations (non-CCPC)</div>
                <div className="space-y-1">
                  <div className="flex justify-between"><span className="text-slate-400">Federal rate</span><span className="text-slate-300 font-bold">15% non-refundable</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Applied against</span><span className="text-slate-300">Federal taxes owing</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Ontario top-up</span><span className="text-slate-300">3.5–4.5% (reduced)</span></div>
                </div>
              </div>
            </div>
          </section>

          {/* How the calculation works */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How the SR&amp;ED Calculation Works</h2>
            <p className="leading-relaxed mb-4">
              The basic formula is: <strong className="text-white">Credit = Eligible Expenditures × Credit Rate</strong>
            </p>
            <p className="leading-relaxed mb-4">
              Eligible expenditures include:
            </p>
            <ul className="space-y-2 text-sm mb-4">
              {[
                { item: "Direct labour", note: "Salaries/wages of employees directly engaged in SR&ED, multiplied by the eligible time fraction" },
                { item: "Overhead proxy", note: "55% of direct labour (using the prescribed proxy amount — eliminates need to track actual overhead)" },
                { item: "Materials", note: "100% of materials consumed or transformed in the SR&ED work" },
                { item: "Contractors", note: "80% of arm's-length contractor fees for SR&ED work" },
              ].map((row) => (
                <li key={row.item} className="flex gap-3">
                  <span className="text-fuchsia-400 shrink-0">+</span>
                  <div><strong className="text-white">{row.item}</strong> — {row.note}</div>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed text-sm text-slate-400">
              The overhead proxy (55% of labour) is by far the most commonly used method. It is simpler, removes the need to track individual overhead costs, and often produces a higher eligible amount than actual overhead tracking would.
            </p>
          </section>

          {/* Worked examples */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Worked Examples</h2>
            <div className="space-y-10">
              {EXAMPLES.map((example) => (
                <div key={example.title} className="glass rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-1">{example.title}</h3>
                  <p className="text-slate-400 text-sm mb-5">{example.profile}</p>

                  <div className="space-y-1 mb-4">
                    {example.table.map((row) => (
                      <div
                        key={row.label}
                        className={`flex justify-between items-center py-2 ${
                          row.large ? "border-t-2 border-emerald-500/30 pt-3 mt-2" : "border-b border-slate-800/50"
                        }`}
                      >
                        <span className={`text-sm ${row.bold ? "text-white font-semibold" : "text-slate-300"}`}>
                          {row.label}
                        </span>
                        <span className={`text-sm font-mono ${
                          row.highlight ? "text-emerald-400 font-bold" :
                          row.bold ? "text-white font-bold" :
                          "text-slate-400"
                        } ${row.large ? "text-lg" : ""}`}>
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-slate-800/40 rounded-lg border-l-2 border-fuchsia-500/40">
                    <p className="text-slate-400 text-xs">{example.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What affects your claim */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Key Factors That Affect Your Claim Size</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "CCPC vs Non-CCPC",
                  desc: "The single biggest factor. A CCPC gets a 35% refundable credit; other corporations get 15% non-refundable. If you are a small business owner, maintaining CCPC status is worth verifying with your accountant.",
                },
                {
                  title: "Province",
                  desc: "Ontario and Quebec offer the most generous provincial top-ups. Alberta and BC have smaller or no provincial SR&ED credits. Ontario CCPC claims can exceed 44% combined.",
                },
                {
                  title: "Employee vs Contractor Mix",
                  desc: "Employees are 100% eligible (on qualifying time). Arm's-length contractors are only 80% eligible. If possible, using employees for R&D work produces a larger eligible base.",
                },
                {
                  title: "Quality of Documentation",
                  desc: "The CRA requires evidence that eligible work was performed. Strong contemporaneous records (timesheets, project notes, test results) support higher eligible time fractions and survive review more robustly.",
                },
              ].map((card) => (
                <div key={card.title} className="glass rounded-xl p-5">
                  <h3 className="text-white font-semibold text-sm mb-2">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <div className="glass rounded-xl p-5 border border-amber-500/20">
            <div className="text-amber-400 font-semibold text-sm mb-2">Important: These are estimates only</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The calculations on this page use simplified assumptions. Your actual SR&amp;ED claim depends on CRA assessment of which activities qualify, the eligible time fraction the CRA accepts for each employee, the proxy amount election, provincial tax rules, and other factors. Always work with a qualified SR&amp;ED specialist or CPA for your actual claim.
            </p>
          </div>

          {/* Inline CTA */}
          <section className="glass rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-3">Calculate Your SR&amp;ED Estimate with AI</h2>
            <p className="text-slate-400 text-sm mb-5 max-w-lg mx-auto">
              GrantMap's AI asks about your R&amp;D activities, team size, and province — then gives you an instant SR&amp;ED eligibility pre-screen and estimated credit range, plus checks for 14 other programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/app" className="px-6 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white font-medium transition-all text-sm">
                Free Eligibility Quiz
              </Link>
              <Link href="/#pricing" className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all text-sm">
                Full AI Report — $150
              </Link>
            </div>
          </section>
        </div>

        {/* Related */}
        <section className="border-t border-slate-800 pt-8 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <Link href="/sred/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">SR&amp;ED Complete Guide</div>
              <div className="text-slate-500">Eligibility, forms, specialists</div>
            </Link>
            <Link href="/grants/ontario/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Ontario Tax Credits</div>
              <div className="text-slate-500">Stack OITC on top of SR&ED</div>
            </Link>
            <Link href="/for-accountants/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">For Accountants</div>
              <div className="text-slate-500">Run SR&ED pre-screens for clients</div>
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
