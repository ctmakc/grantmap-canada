import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CanExport Program: Free Money for Canadian Exporters",
  description:
    "CanExport SMEs vs CanExport Associations: eligible expenses, 75% cost-share up to $75,000, how to apply online, and tips for a winning application.",
  alternates: { canonical: "/blog/canexport-program-exporters/" },
  openGraph: {
    title: "CanExport Program: Free Money for Canadian Exporters (Up to $75,000)",
    description:
      "CanExport covers 75% of your export market development costs up to $75K, non-repayably. Here is how to qualify and apply.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CanExport Program: Free Money for Canadian Exporters (Up to $75,000)",
  description:
    "CanExport SMEs vs CanExport Associations, eligible expenses, 75% cost-share up to $75,000, online application process, and tips for approval.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function CanExportPage() {
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
          <span className="text-slate-300">CanExport Program</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-medium">Federal Grant</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 7 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            CanExport Program: Free Money for Canadian Exporters (Up to $75,000)
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            CanExport SMEs is one of Canada's most straightforward federal grants — covering up to 75% of your eligible export market development costs, non-repayably, up to $75,000. If you are actively developing international markets, this program should be near the top of your grant list.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Is CanExport?</h2>
            <p className="leading-relaxed mb-4">
              CanExport is a federal program delivered by Global Affairs Canada. It reimburses Canadian small and medium-sized enterprises for eligible costs incurred while developing new export markets. CanExport is non-repayable (a true grant, not a loan), available year-round, and processed relatively quickly compared to other federal programs.
            </p>
            <p className="leading-relaxed mb-4">
              The program has two streams: CanExport SMEs (for individual businesses) and CanExport Associations (for industry associations supporting their members' export activity). This guide focuses primarily on CanExport SMEs — the stream most relevant to individual businesses. See also our <Link href="/blog/export-development-canada-programs/" className="text-blue-400 hover:text-blue-300">EDC guide</Link> for complementary financing tools.
            </p>
            <div className="glass rounded-xl p-5 border-l-4 border-violet-500/40">
              <div className="text-sm text-slate-300">
                <strong className="text-white">Quick Numbers:</strong> CanExport SMEs covers 50–75% of eligible costs, with a minimum funding of $3,000 and a maximum of $75,000 per application. The cost-share requirement means you contribute at least 25% of eligible project costs.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">CanExport SMEs vs CanExport Associations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  stream: "CanExport SMEs",
                  who: "Individual Canadian businesses",
                  amount: "$3,000–$75,000",
                  share: "75% funding (25% company contribution)",
                  purpose: "Market development costs for a specific new export market",
                  apply: "Apply directly through Trade Commissioner Service portal",
                },
                {
                  stream: "CanExport Associations",
                  who: "Not-for-profit industry or trade associations",
                  amount: "$100,000–$500,000",
                  share: "Up to 75% funding",
                  purpose: "Collective market development for member companies in a sector",
                  apply: "Submit proposal to Global Affairs Canada directly",
                },
              ].map((stream) => (
                <div key={stream.stream} className="glass rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-3">{stream.stream}</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      ["Who applies", stream.who],
                      ["Amount", stream.amount],
                      ["Cost-share", stream.share],
                      ["Purpose", stream.purpose],
                      ["How to apply", stream.apply],
                    ].map(([label, val]) => (
                      <div key={label}>
                        <span className="text-slate-500">{label}: </span>
                        <span className="text-slate-300">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">CanExport SMEs Eligibility</h2>
            <div className="space-y-3">
              {[
                { criterion: "Canadian SME", detail: "Incorporated or registered in Canada. Fewer than 500 employees. Annual revenue between $100,000 and $100 million." },
                { criterion: "Targeting a new market", detail: "CanExport funds expansion into markets where you have little or no current revenue. Existing markets where you already generate significant sales generally do not qualify." },
                { criterion: "Strong Canadian content", detail: "Your product or service must have significant Canadian content. Businesses that primarily re-export products made abroad do not qualify." },
                { criterion: "Viable export plan", detail: "You must demonstrate a realistic plan to develop the target market. Speculative or exploratory trips without a clear commercial purpose score poorly." },
                { criterion: "No active CRA debt", detail: "Businesses with outstanding federal tax debt are ineligible until debt is resolved." },
              ].map((item) => (
                <div key={item.criterion} className="glass rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">{item.criterion}</div>
                      <div className="text-slate-400 text-sm">{item.detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Eligible Expenses</h2>
            <p className="leading-relaxed mb-4">
              CanExport reimburses specific types of market development expenditures. Eligible costs include:
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800/50 text-slate-300">
                    <th className="text-left px-4 py-3 font-medium">Expense Type</th>
                    <th className="text-left px-4 py-3 font-medium">Eligible?</th>
                    <th className="text-left px-4 py-3 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "International airfare", eligible: "Yes", notes: "Economy class. Must be clearly linked to the export project." },
                    { type: "Accommodation", eligible: "Yes", notes: "Reasonable rates. Save all receipts." },
                    { type: "Market research (third-party)", eligible: "Yes", notes: "Desk research, market reports, industry analysis." },
                    { type: "Translation and localisation", eligible: "Yes", notes: "Marketing materials, website translation for target market." },
                    { type: "Trade show registration fees", eligible: "Yes", notes: "In the target export market." },
                    { type: "Legal / IP in target country", eligible: "Yes", notes: "Trademark registration, regulatory costs in new market." },
                    { type: "Your own staff wages", eligible: "No", notes: "Internal labour is not reimbursable." },
                    { type: "Product development", eligible: "No", notes: "CanExport is for market development, not product creation." },
                    { type: "Sales commissions", eligible: "No", notes: "Agent commissions are not eligible." },
                  ].map((row, i) => (
                    <tr key={row.type} className={`border-t border-slate-800 ${i % 2 === 0 ? "bg-slate-900/30" : ""}`}>
                      <td className="px-4 py-3 text-white font-medium">{row.type}</td>
                      <td className={`px-4 py-3 font-medium ${row.eligible === "Yes" ? "text-emerald-400" : "text-red-400"}`}>{row.eligible}</td>
                      <td className="px-4 py-3 text-slate-400">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Apply to CanExport SMEs</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Create a Trade Commissioner Service (TCS) Account", desc: "CanExport applications are submitted through the Trade Commissioner Service portal at tradecommissioner.gc.ca. Create an account and complete your company profile." },
                { step: "2", title: "Define Your Export Project", desc: "Identify the specific market, the activities you plan to undertake, and the costs you will incur. CanExport funds discrete projects — not ongoing export operations. A 'project' might be attending a trade show in Germany and conducting buyer meetings, including market research and translation." },
                { step: "3", title: "Submit Your Application", desc: "Complete the online application form. Describe your market development plan, estimated costs, and expected outcomes. Applications are assessed on a rolling basis — there is no formal intake window." },
                { step: "4", title: "Wait for Approval (4–8 Weeks)", desc: "CanExport typically processes applications within 4–8 weeks. Do not incur eligible costs before receiving written approval — pre-approved expenses are generally not eligible." },
                { step: "5", title: "Execute the Project and Claim", desc: "Complete your market development activities, keep all receipts, and submit a claim within the project period. Reimbursement follows within a few weeks of a complete claim submission." },
              ].map((s) => (
                <div key={s.step} className="glass rounded-xl p-6 flex gap-5">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-sm">{s.step}</div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Tips for a Strong CanExport Application</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Be specific about the market", desc: "Vague references to 'expanding internationally' score poorly. Name the country, the sector, the buyer profile, and why this market is the right opportunity now." },
                { title: "Show market research exists", desc: "Demonstrate you have already done some homework on the target market. Reference market size, competitor landscape, or trade data. CanExport funds activity in markets where there is credible commercial opportunity." },
                { title: "Quantify expected outcomes", desc: "How much revenue do you expect from this market in Year 1 and Year 3? How many meetings or contracts do you expect to generate? Concrete projections are more compelling than general ambition." },
                { title: "Apply before booking anything", desc: "CanExport funds activities that have not started yet. Book your trade show tickets only after you have received written approval." },
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
          <h2 className="text-2xl font-bold text-white mb-4">Find All Your Export Grants with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap identifies CanExport and other export programs your business qualifies for — in under 5 minutes.
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
            <Link href="/blog/export-development-canada-programs/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">EDC Programs</div>
              <div className="text-slate-500">Export financing and insurance</div>
            </Link>
            <Link href="/grants/federal/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Federal Grants</div>
              <div className="text-slate-500">Full 2026 program list</div>
            </Link>
            <Link href="/blog/stacking-grants-canada-guide/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Grant Stacking</div>
              <div className="text-slate-500">Combine CanExport with other programs</div>
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
