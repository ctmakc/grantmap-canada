import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grant Matching Software for Canadian Accountants & Advisors",
  description:
    "GrantMap gives accountants and business advisors unlimited AI grant matching for $50/mo. Run reports for all your clients, export PDFs, and add a new revenue stream today.",
  alternates: { canonical: "/for-accountants/" },
  openGraph: {
    title: "Grant Matching Software for Canadian Accountants and Advisors",
    description:
      "Run unlimited AI grant matching reports for your clients at $50/mo. Charge $150–$500 per report. ROI on month one.",
  },
};

const FEATURES = [
  {
    icon: "◎",
    title: "Unlimited Client Reports",
    desc: "Run as many grant matching reports as you need — no per-report fees after your $50/mo subscription. Serve 10 clients or 100 clients for the same flat rate.",
  },
  {
    icon: "◈",
    title: "15+ Programs Checked Automatically",
    desc: "Every report checks your client against SR&ED, CDAP, IRAP, CanExport, Ontario Innovation Tax Credit, and 10+ more programs. Nothing falls through the cracks.",
  },
  {
    icon: "✦",
    title: "Ready-to-Submit Draft Text",
    desc: "Each report includes draft application narratives for the top 3 matched programs — written in formal Canadian English. Dramatically reduces the time to prepare a submission.",
  },
  {
    icon: "⬡",
    title: "PDF Export for Client Delivery",
    desc: "Export every report as a branded PDF. Hand it to your client or use it as the basis for a billable engagement letter. Professional deliverable, instant production.",
  },
  {
    icon: "⊕",
    title: "Client Management Dashboard",
    desc: "Manage multiple client profiles in one place. Track which programs each client has been matched to, and re-run reports when new intake periods open.",
  },
  {
    icon: "⊚",
    title: "AI That Knows All the Rules",
    desc: "Eligibility rules change constantly — funding amounts, intake periods, employee count thresholds. GrantMap's AI database is updated to reflect the current state of all 15+ programs.",
  },
];

const ROI_CALC = [
  { clients: 5, fee: 150, revenue: 750, cost: 50, margin: 700 },
  { clients: 10, fee: 200, revenue: 2000, cost: 50, margin: 1950 },
  { clients: 20, fee: 300, revenue: 6000, cost: 50, margin: 5950 },
  { clients: 50, fee: 150, revenue: 7500, cost: 50, margin: 7450 },
];

export default function ForAccountantsPage() {
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
            Start Free Trial
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">For Accountants</span>
        </nav>

        {/* Hero */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-medium mb-4">
            Built for Canadian CPAs and Business Advisors
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Grant Matching Software for Canadian<br />Accountants and Advisors
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            At $50/mo, GrantMap gives you unlimited AI grant reports for every client. Charge $150–$500 per report. Your subscription pays for itself with the very first client.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/app" className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all">
              Start Free Trial
            </Link>
            <Link href="/#pricing" className="px-8 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white font-medium transition-all">
              View Pricing
            </Link>
          </div>
        </header>

        {/* ROI */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">The ROI Is Immediate</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Canadian accountants and business advisors increasingly offer grant research as a billable service. Clients are willing to pay $150–$500 for a professional grant eligibility assessment — especially when it could unlock hundreds of thousands in funding. With GrantMap, your marginal cost per report after the first client is zero.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-800 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800/50 text-slate-300">
                  <th className="text-left px-4 py-3 font-medium">Clients/Month</th>
                  <th className="text-left px-4 py-3 font-medium">Fee per Report</th>
                  <th className="text-left px-4 py-3 font-medium">Revenue</th>
                  <th className="text-left px-4 py-3 font-medium">GrantMap Cost</th>
                  <th className="text-left px-4 py-3 font-medium text-emerald-400">Net Margin</th>
                </tr>
              </thead>
              <tbody>
                {ROI_CALC.map((row, i) => (
                  <tr key={i} className={`border-t border-slate-800 ${i % 2 === 0 ? "bg-slate-900/30" : ""}`}>
                    <td className="px-4 py-3 text-white font-medium">{row.clients}</td>
                    <td className="px-4 py-3 text-slate-300">${row.fee}</td>
                    <td className="px-4 py-3 text-slate-300">${row.revenue.toLocaleString()}</td>
                    <td className="px-4 py-3 text-slate-400">$50</td>
                    <td className="px-4 py-3 text-emerald-400 font-bold">${row.margin.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs">
            * Revenue and margin figures are illustrative. Actual fees charged to clients are at your discretion.
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Everything Your Practice Needs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="glass rounded-xl p-6">
                <div className="text-2xl mb-3 text-blue-400">{f.icon}</div>
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works for advisors */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">How Accountants Use GrantMap</h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Collect Client Information",
                desc: "Ask your client for basic business information: industry, province, number of employees, annual revenue, R&D activities, and export activities. This takes 5–10 minutes in a discovery call.",
              },
              {
                step: "2",
                title: "Run the AI Match",
                desc: "Enter the profile into GrantMap. The AI runs a 4-stage pipeline — profile parsing, semantic retrieval against all 15+ programs, eligibility scoring, and draft generation — in under 5 minutes.",
              },
              {
                step: "3",
                title: "Review and Deliver the Report",
                desc: "Review the ranked program matches and draft application text. Export as PDF. Deliver to your client as a standalone product or as part of a broader financial planning engagement.",
              },
              {
                step: "4",
                title: "Bill for the Work",
                desc: "Charge $150–$500 for the grant assessment report. Many advisors include it as an add-on to annual tax planning. Clients with SR&ED potential often see $50,000–$500,000 in recoverable credits — making a $300 assessment fee an obvious investment.",
              },
            ].map((s) => (
              <div key={s.step} className="glass rounded-xl p-6 flex gap-5">
                <div className="shrink-0 w-8 h-8 rounded-full bg-fuchsia-600 flex items-center justify-center text-white font-bold text-sm">{s.step}</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-12">
          <div className="glass rounded-2xl p-10">
            <div className="text-4xl mb-4 text-slate-600">"</div>
            <p className="text-lg text-slate-300 italic mb-4">
              GrantMap found three programs my client had never heard of. The SR&amp;ED pre-screening alone saved us hours of manual research, and the draft text gave us a solid starting point for the T661 narrative.
            </p>
            <div className="text-sm text-slate-500">— A Canadian accounting firm (beta user)</div>
          </div>
        </section>

        {/* Programs covered */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Programs Your Clients Get Matched Against</h2>
          <p className="text-slate-400 text-sm mb-6">
            Every report checks all 15+ programs in GrantMap's database. Here is a sample of what is covered:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            {[
              { name: "SR&ED Tax Credit", region: "Federal" },
              { name: "NRC IRAP", region: "Federal" },
              { name: "CDAP", region: "Federal" },
              { name: "CanExport", region: "Federal" },
              { name: "Canada Job Grant", region: "Federal" },
              { name: "Ontario Innovation Tax Credit", region: "Ontario" },
              { name: "Ontario Co-investment Fund", region: "Ontario" },
              { name: "Digital Main Street", region: "Ontario" },
              { name: "Alberta Innovates", region: "Alberta" },
              { name: "BC Tech Pilot", region: "BC" },
              { name: "WES Ecosystem Fund", region: "Federal" },
              { name: "CanExport Community", region: "Federal" },
            ].map((p) => (
              <div key={p.name} className="glass rounded-lg p-3">
                <div className="text-xs text-blue-400 mb-0.5">{p.region}</div>
                <div className="text-white text-sm font-medium">{p.name}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-3">+ 3 more programs in the full database</p>
        </section>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Start Your Free Trial Today</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            No credit card required to explore the platform. Subscribe at $50/mo when you're ready to run client reports.
          </p>
          <Link href="/app" className="inline-block px-10 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all">
            Start Free Trial
          </Link>
        </section>

        {/* Related */}
        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-slate-300 mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <Link href="/sred/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">SR&amp;ED Guide</div>
              <div className="text-slate-500">The program most CPAs are asked about</div>
            </Link>
            <Link href="/compare/grantmap-vs-manual-research/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">AI vs Manual Research</div>
              <div className="text-slate-500">Time and cost comparison</div>
            </Link>
            <Link href="/grants/federal/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Federal Grants Guide</div>
              <div className="text-slate-500">Full program list for client briefings</div>
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
