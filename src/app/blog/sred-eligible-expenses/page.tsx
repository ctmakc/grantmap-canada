import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SR&ED Eligible Expenses: What Qualifies in 2026",
  description:
    "SR&ED eligible expenses guide: salaries 100%, subcontractors 80%, overhead proxy method, capital expenditures excluded, and real examples for 2026.",
  alternates: { canonical: "/blog/sred-eligible-expenses/" },
  openGraph: {
    title: "SR&ED Eligible Expenses: What Qualifies and What Doesn't (2026 Guide)",
    description:
      "Salary/wages 100%, subcontractors 80%, overhead proxy, capital excluded — the complete guide to SR&ED eligible expenses with worked examples.",
  
    images: [{ url: "/images/blog/cat-sredtax-og.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SR&ED Eligible Expenses: What Qualifies and What Doesn't (2026 Guide)",
  description:
    "Salary/wages 100%, subcontractors 80%, overhead proxy method, capital expenditures excluded — SR&ED eligible expenses with 2026 examples.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function SREDExpensesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Nav */}
      <nav className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">G</div>
            <span className="text-lg font-bold">GrantMap<span className="text-blue-400">.ca</span></span>
          </Link>
          <Link href="/app" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors">
            Match My Business
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog/" className="hover:text-blue-400">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">SR&amp;ED Eligible Expenses</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 font-medium">SR&amp;ED Deep Dive</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 9 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            SR&amp;ED Eligible Expenses: What Qualifies and What Doesn't (2026 Guide)
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            The SR&amp;ED Investment Tax Credit is worth up to 35% on eligible expenditures — but not all R&amp;D costs qualify. Understanding what is in and what is out is essential for maximising your claim and avoiding a CRA audit dispute. This guide covers every category with examples.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">SR&ED Eligible Expenditure Categories</h2>
            <p className="leading-relaxed mb-4">
              The Income Tax Act defines SR&amp;ED eligible expenditures in Subsection 37(1). The main categories are:
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800/50 text-slate-300">
                    <th className="text-left px-4 py-3 font-medium">Expenditure Type</th>
                    <th className="text-left px-4 py-3 font-medium">% Claimable</th>
                    <th className="text-left px-4 py-3 font-medium">Key Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Salaries and wages — directly engaged in SR&ED", pct: "100%", cond: "Employee directly performing SR&ED work. Requires contemporaneous timesheets." },
                    { type: "Salaries — directly supporting SR&ED (Proxy A)", pct: "100%", cond: "Supervisors, technical managers overseeing SR&ED activities. Time allocation required." },
                    { type: "Salaries — incidental to SR&ED support (Proxy B, overhead)", pct: "65% proxy", cond: "Administrative, facilities, support staff. Calculated as 65% of eligible labour." },
                    { type: "Materials consumed", pct: "100%", cond: "Materials physically transformed, destroyed, or used up in SR&ED work. Not inventory for sale." },
                    { type: "Materials transformed", pct: "100%", cond: "Materials incorporated into a prototype that has no commercial value outside the SR&ED project." },
                    { type: "Third-party payments (arm's length)", pct: "80%", cond: "Payments to arm's length parties for SR&ED work performed for your benefit. 80% of invoiced amount." },
                    { type: "Arm's length subcontractors", pct: "80%", cond: "Contractors performing SR&ED work on your behalf. Must be arm's length. 80% of cost qualifies." },
                    { type: "Non-arm's length subcontractors", pct: "0%", cond: "Payments to related parties (employees on contract, affiliated companies) are not eligible as subcontractor costs — claim the underlying salary instead." },
                  ].map((row, i) => (
                    <tr key={row.type} className={`border-t border-slate-800 ${i % 2 === 0 ? "bg-slate-900/30" : ""}`}>
                      <td className="px-4 py-3 text-white font-medium">{row.type}</td>
                      <td className="px-4 py-3 text-emerald-400 font-bold">{row.pct}</td>
                      <td className="px-4 py-3 text-slate-400 text-xs">{row.cond}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Proxy Method vs Actual Method for Overhead</h2>
            <p className="leading-relaxed mb-4">
              SR&amp;ED claimants choose between two methods for overhead costs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  method: "Proxy Method (Traditional Method)",
                  desc: "Add 65% of your eligible labour costs as a proxy for overhead. No need to track actual overhead costs. This is simpler and is chosen by the majority of claimants.",
                  formula: "Eligible overhead = Eligible salaries × 65%",
                  when: "Recommended for most companies — simpler, less CRA scrutiny on overhead",
                },
                {
                  method: "Actual Method",
                  desc: "Claim actual overhead costs incurred in support of SR&ED — rent for lab space, utilities, depreciation on equipment, etc. Requires tracking actual costs and allocating them to SR&ED.",
                  formula: "Eligible overhead = Actual overhead costs allocated to SR&ED",
                  when: "Worth considering if your overhead costs are significantly higher than 65% of labour",
                },
              ].map((method) => (
                <div key={method.method} className="glass rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-2 text-sm">{method.method}</h3>
                  <p className="text-slate-400 text-sm mb-2">{method.desc}</p>
                  <div className="bg-slate-900/50 rounded p-2 text-xs text-fuchsia-400 font-mono mb-2">{method.formula}</div>
                  <div className="text-xs text-slate-500">{method.when}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Does NOT Qualify for SR&ED</h2>
            <p className="leading-relaxed mb-4">
              These costs are specifically excluded from SR&amp;ED eligible expenditures:
            </p>
            <div className="space-y-3">
              {[
                { item: "Capital expenditures (equipment, machinery)", reason: "Capital costs are explicitly excluded from SR&ED since 2014. Previously claimable — now excluded entirely. Buy your R&D equipment separately from your SR&ED claim." },
                { item: "Marketing, sales, and market research", reason: "SR&ED covers the development of technology, not the commercialisation or marketing of its results. Market research, trade shows, and sales activities do not qualify." },
                { item: "Routine quality control and quality assurance", reason: "QC/QA that follows established procedures is not SR&ED. Only QC activities that involve resolving a technical uncertainty qualify." },
                { item: "Humanities and social sciences research", reason: "SR&ED covers natural sciences and engineering. Research in economics, social sciences, business management, and humanities does not qualify." },
                { item: "Style changes and aesthetic changes", reason: "Design changes with no functional innovation do not qualify. A new product colour, packaging redesign, or user interface change is not SR&ED unless there is genuine technical novelty." },
                { item: "Routine data collection", reason: "Collecting data through established methods is not SR&ED. Only data collection that is integral to an SR&ED project (e.g., experiment results) qualifies." },
                { item: "Foreign-performed work", reason: "SR&ED is a Canadian program. Work performed outside Canada by non-Canadian employees is not eligible. (Subcontractor work must be performed in Canada by arm's length parties.)" },
              ].map((item) => (
                <div key={item.item} className="glass rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">{item.item}</div>
                      <div className="text-slate-400 text-sm">{item.reason}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Worked Example: Software Company Claim</h2>
            <p className="leading-relaxed mb-4">
              Here is a worked example for a software company with a qualifying AI development project:
            </p>
            <div className="space-y-2">
              {[
                { line: "Lead ML engineer (100% of time on project) — $120,000 salary", amount: "$120,000", eligible: "$120,000", note: "100% — directly engaged in SR&ED" },
                { line: "Junior developer (60% of time on SR&ED) — $75,000 salary", amount: "$45,000", eligible: "$45,000", note: "60% time allocation applied" },
                { line: "Engineering manager (20% of time supervising) — $130,000", amount: "$26,000", eligible: "$26,000", note: "Direct supervision qualifies at 100%" },
                { line: "Overhead (Proxy Method — 65% of labour)", amount: "65% × $191,000", eligible: "$124,150", note: "Proxy applied to total eligible labour" },
                { line: "Cloud computing (AWS for model training experiments)", amount: "$18,000", eligible: "$18,000", note: "Materials consumed in SR&ED experiments" },
                { line: "Arm's length ML consulting subcontractor", amount: "$40,000", eligible: "$32,000", note: "80% of arm's length subcontractor cost" },
                { line: "New GPU server purchased for the lab", amount: "$25,000", eligible: "$0", note: "Capital equipment — NOT eligible since 2014" },
              ].map((row, i) => (
                <div key={row.line} className={`glass rounded-xl p-4 ${row.eligible === "$0" ? "border border-red-500/20" : ""}`}>
                  <div className="flex justify-between items-start gap-4 mb-1">
                    <div className="text-slate-300 text-sm">{row.line}</div>
                    <div className={`font-bold shrink-0 ${row.eligible === "$0" ? "text-red-400" : "text-emerald-400"}`}>{row.eligible}</div>
                  </div>
                  <div className="text-slate-500 text-xs">{row.note}</div>
                </div>
              ))}
              <div className="glass rounded-xl p-4 flex justify-between items-center border border-fuchsia-500/30">
                <div className="text-white font-bold">Total eligible expenditure pool</div>
                <div className="text-fuchsia-400 font-bold text-lg">$365,150</div>
              </div>
              <div className="glass rounded-xl p-4 flex justify-between items-center border border-emerald-500/30">
                <div className="text-white font-bold">Estimated SR&ED ITC (35% CCPC rate)</div>
                <div className="text-emerald-400 font-bold text-lg">$127,803</div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Government Assistance and the SR&ED Expenditure Reduction</h2>
            <p className="leading-relaxed mb-4">
              Any government assistance received for specific SR&amp;ED expenditures reduces your eligible pool dollar-for-dollar. This is a critical rule for businesses <Link href="/blog/stacking-grants-canada-guide/" className="text-blue-400 hover:text-blue-300">stacking grants with SR&amp;ED</Link>:
            </p>
            <div className="glass rounded-xl p-5 border border-orange-500/20">
              <div className="text-sm space-y-2">
                <div className="text-white font-semibold mb-2">Example: IRAP + SR&ED Interaction</div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Engineer salary on IRAP-funded project</span>
                  <span className="text-slate-300">$100,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">IRAP contribution received for this salary</span>
                  <span className="text-orange-400">−$80,000</span>
                </div>
                <div className="flex justify-between text-sm border-t border-slate-800 pt-2 font-medium">
                  <span className="text-white">Net SR&ED eligible amount for this cost</span>
                  <span className="text-emerald-400">$20,000</span>
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-sm mt-3">
              This does not mean you should avoid IRAP — getting $80K from IRAP and $7K from SR&amp;ED on the remaining $20K is still far better than only getting $35K from SR&amp;ED on the full $100K. It means you should plan carefully and disclose all government assistance to your SR&amp;ED specialist.
            </p>
          </section>
        </div>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mt-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Estimate Your SR&amp;ED Credit with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap estimates your SR&amp;ED potential and identifies other programs that stack with it — in under 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/app" className="px-8 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white font-medium transition-all">
              Free Quiz
            </Link>
            <Link href="/#pricing" className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all">
              Full AI Report — $150
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-slate-800 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <Link href="/sred/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">SR&amp;ED Full Guide</div>
              <div className="text-slate-500">Complete SR&ED deep dive</div>
            </Link>
            <Link href="/blog/sred-tax-credit-calculator/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">SR&amp;ED Calculator</div>
              <div className="text-slate-500">Estimate your 2026 refund</div>
            </Link>
            <Link href="/blog/stacking-grants-canada-guide/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Grant Stacking</div>
              <div className="text-slate-500">Combine SR&ED with other programs</div>
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
