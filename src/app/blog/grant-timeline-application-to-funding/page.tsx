import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Canadian Grant Timeline: Application to Cash in Your Account",
  description:
    "How long do Canadian grants take? IRAP: 4-8 weeks, CDAP: 6-12 weeks, SR&ED: 6-18 months. Timelines for major programs and how to manage cash flow during the wait.",
  alternates: { canonical: "/blog/grant-timeline-application-to-funding/" },
  openGraph: {
    title: "Canadian Grant Timeline: From Application to Cash in Your Account",
    description:
      "Real timelines for IRAP, CDAP, SR&ED, CanExport, and other Canadian grant programs — plus cash flow strategies while you wait.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Canadian Grant Timeline: From Application to Cash in Your Account",
  description:
    "IRAP: 4-8 weeks, CDAP: 6-12 weeks, SR&ED: 6-18 months — complete timelines for Canadian grant programs and cash flow management strategies.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function GrantTimelinePage() {
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
          <span className="text-slate-300">Canadian Grant Timelines</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">Grant Planning</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 8 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Canadian Grant Timeline: From Application to Cash in Your Account
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            The gap between applying for a Canadian grant and receiving funds is often longer than business owners expect — ranging from 4 weeks for some CanExport claims to 18 months for SR&amp;ED refunds. Understanding real timelines helps you plan cash flow, set expectations, and decide when to start each application.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Timeline Overview by Program</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800/50 text-slate-300">
                    <th className="text-left px-4 py-3 font-medium">Program</th>
                    <th className="text-left px-4 py-3 font-medium">Application → Approval</th>
                    <th className="text-left px-4 py-3 font-medium">Approval → Payment</th>
                    <th className="text-left px-4 py-3 font-medium">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { prog: "SR&ED Tax Credit", approval: "N/A (file on tax return)", payment: "6–18 months post filing", total: "6–18 months", color: "fuchsia" },
                    { prog: "NRC IRAP", approval: "4–16 weeks", payment: "Periodic during project", total: "4–16 weeks to start", color: "violet" },
                    { prog: "CDAP Grant", approval: "6–12 weeks", payment: "Upon advisor report approval", total: "3–5 months", color: "violet" },
                    { prog: "CanExport SMEs", approval: "4–8 weeks", payment: "2–4 weeks after claim", total: "6–12 weeks end-to-end", color: "violet" },
                    { prog: "Women Entrepreneurship Fund", approval: "8–20 weeks", payment: "Milestone-based", total: "5–8 months+", color: "violet" },
                    { prog: "AgriInnovate", approval: "3–9 months", payment: "Milestone-based", total: "6–12 months+", color: "blue" },
                    { prog: "Futurpreneur", approval: "4–8 weeks", payment: "Within 2 weeks of approval", total: "6–10 weeks", color: "blue" },
                    { prog: "Regional Grants (NDIT, etc.)", approval: "4–12 weeks", payment: "Post-project or milestone", total: "2–6 months", color: "blue" },
                  ].map((row, i) => (
                    <tr key={row.prog} className={`border-t border-slate-800 ${i % 2 === 0 ? "bg-slate-900/30" : ""}`}>
                      <td className="px-4 py-3 text-white font-medium">{row.prog}</td>
                      <td className="px-4 py-3 text-slate-300">{row.approval}</td>
                      <td className="px-4 py-3 text-slate-300">{row.payment}</td>
                      <td className={`px-4 py-3 font-medium text-${row.color}-400`}>{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Program-by-Program Breakdown</h2>

            <div className="space-y-6">
              {[
                {
                  name: "SR&ED Tax Credit",
                  color: "fuchsia",
                  timeline: "6–18 months from fiscal year-end",
                  stages: [
                    { stage: "Work performed", timing: "During fiscal year" },
                    { stage: "Documentation prepared", timing: "End of fiscal year / year-end process" },
                    { stage: "T661 and T2 filed", timing: "Within 6 months of fiscal year-end (corporate)" },
                    { stage: "CRA processes return", timing: "4–8 weeks for a standard return" },
                    { stage: "CRA SR&ED review (if selected)", timing: "6–18 months additional" },
                    { stage: "Refund issued", timing: "2–4 weeks after assessment" },
                  ],
                  note: "The 18-month filing deadline is absolute. For a December 31 fiscal year, the SR&ED claim must be filed by June 30 of the following year. CRA targets to complete SR&ED reviews within 12 months of filing.",
                },
                {
                  name: "NRC IRAP",
                  color: "violet",
                  timeline: "4–16 weeks from first contact to approval",
                  stages: [
                    { stage: "Initial ITA meeting", timing: "Within 2–3 weeks of contact" },
                    { stage: "Project proposal preparation", timing: "2–6 weeks (with ITA guidance)" },
                    { stage: "Internal IRAP review", timing: "2–6 weeks" },
                    { stage: "Contribution agreement signed", timing: "1–2 weeks after approval" },
                    { stage: "Project begins", timing: "After agreement is signed" },
                    { stage: "Claims paid", timing: "Periodic — typically monthly or quarterly during project" },
                  ],
                  note: "IRAP's timeline varies significantly by region and current budget availability. Start the ITA relationship 3–6 months before your project needs to begin.",
                },
                {
                  name: "CDAP Grant ($15,000)",
                  color: "violet",
                  timeline: "3–5 months total",
                  stages: [
                    { stage: "Apply online at ised.canada.ca", timing: "Rolling — no intake window" },
                    { stage: "Application reviewed", timing: "2–6 weeks" },
                    { stage: "Engage a CDAP-certified digital advisor", timing: "After approval" },
                    { stage: "Digital plan developed", timing: "4–12 weeks with advisor" },
                    { stage: "Plan submitted and approved", timing: "2–4 weeks review" },
                    { stage: "Grant paid to advisor", timing: "Within 2–3 weeks of approval" },
                  ],
                  note: "The CDAP grant pays your digital advisor directly — you do not receive cash. The BDC loan component ($100K) has its own application timeline of 4–8 additional weeks.",
                },
                {
                  name: "CanExport SMEs",
                  color: "violet",
                  timeline: "6–12 weeks end-to-end",
                  stages: [
                    { stage: "Application submitted online", timing: "Rolling — apply anytime" },
                    { stage: "Application reviewed", timing: "4–8 weeks" },
                    { stage: "Written approval received", timing: "After review" },
                    { stage: "Eligible activities conducted", timing: "Within project period (typically 12 months)" },
                    { stage: "Claim submitted with receipts", timing: "Within 30 days of project end" },
                    { stage: "Reimbursement issued", timing: "2–4 weeks after complete claim" },
                  ],
                  note: "Do not incur any eligible costs before receiving written approval. CanExport expenses from before the approval date are not reimbursable.",
                },
              ].map((prog) => (
                <div key={prog.name} className="glass rounded-xl p-6">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className="text-white font-semibold">{prog.name}</h3>
                    <span className={`text-xs font-medium text-${prog.color}-400`}>{prog.timeline}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {prog.stages.map((s) => (
                      <div key={s.stage} className="flex items-start gap-3 text-sm">
                        <span className={`text-${prog.color}-400 mt-0.5 shrink-0`}>→</span>
                        <span className="text-slate-300">{s.stage}</span>
                        <span className="text-slate-500 shrink-0 ml-auto pl-4">{s.timing}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3 text-xs text-slate-400">
                    <strong className="text-slate-300">Note:</strong> {prog.note}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Managing Cash Flow During the Wait</h2>
            <p className="leading-relaxed mb-4">
              The delay between incurring costs and receiving grant funds is a real cash flow challenge. Here are strategies to manage it:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Bridge with BDC Working Capital", desc: "If you have a grant approval letter but haven't received funds, BDC may advance working capital against the expected grant. Discuss this with your BDC account manager." },
                { title: "Apply earlier than you think you need to", desc: "For SR&ED, engage specialists in the first month of your fiscal year, not at year-end. For IRAP, contact your ITA 6 months before you need funds." },
                { title: "Sequence your project phases", desc: "Design your project so early phases are funded from operations, and grant funds arrive to cover later, larger phases. Avoids the full gap problem." },
                { title: "Use a line of credit as a bridge", desc: "Many businesses use a business line of credit to bridge between grant-eligible expenses and actual reimbursement. Factor the interest cost into your total project cost." },
              ].map((tip) => (
                <div key={tip.title} className="glass rounded-xl p-5">
                  <h3 className="text-white font-semibold text-sm mb-2">{tip.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mt-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Start Your Grant Search with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap identifies which programs you qualify for so you can start applying to the right programs immediately.
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
            <Link href="/blog/how-to-write-grant-application/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Grant Writing Guide</div>
              <div className="text-slate-500">Write a strong application</div>
            </Link>
            <Link href="/sred/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">SR&amp;ED Guide</div>
              <div className="text-slate-500">Plan your SR&ED claim timing</div>
            </Link>
            <Link href="/blog/stacking-grants-canada-guide/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Grant Stacking</div>
              <div className="text-slate-500">Combine programs strategically</div>
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
