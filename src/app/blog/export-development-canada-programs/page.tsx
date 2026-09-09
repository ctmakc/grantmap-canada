import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Export Development Canada (EDC): Financing Guide 2026",
  description:
    "Export Development Canada programs explained: EDC loans, export credit insurance, guarantees, and the Export Guarantee Program. Who qualifies and how to apply.",
  alternates: { canonical: "/blog/export-development-canada-programs/" },
  openGraph: {
    title: "Export Development Canada (EDC): Financing for Canadian Exporters",
    description:
      "EDC is not a grant program — it offers loans, insurance, and guarantees. Here is what Canadian exporters need to know to use EDC financing.",
  
    images: [{ url: "/images/blog/cat-strategy-og.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Export Development Canada (EDC): Financing for Canadian Exporters",
  description:
    "EDC loans, export credit insurance, bank guarantees, and the Export Guarantee Program explained for Canadian exporters in 2026.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function EDCPage() {
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
          <span className="text-slate-300">Export Development Canada Programs</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">Federal Financing</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 8 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Export Development Canada (EDC): Financing for Canadian Exporters
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Export Development Canada (EDC) is Canada's export credit agency. Unlike IRAP or CanExport, EDC does not provide grants — it offers financing tools that help Canadian companies sell internationally: loans, credit insurance, and guarantees. Understanding what EDC does and does not do is essential for exporters building a complete funding strategy.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What EDC Is — and Is Not</h2>
            <p className="leading-relaxed mb-4">
              EDC (Export Development Canada) is a federal Crown corporation that operates commercially — it generates revenue from interest and insurance premiums. It is not a grant-making body. If you are looking for free money, look at <Link href="/blog/canexport-program-exporters/" className="text-blue-400 hover:text-blue-300">CanExport</Link> ($75K non-repayable) or <Link href="/blog/irap-grant-guide/" className="text-blue-400 hover:text-blue-300">NRC IRAP</Link> for innovation grants.
            </p>
            <p className="leading-relaxed mb-4">
              What EDC provides is risk reduction and financing access that enables Canadian businesses to pursue export opportunities they could not otherwise afford or manage. EDC's mandate is to support Canadian exporters — and it does this by taking on risks that private markets will not.
            </p>
            <div className="glass rounded-xl p-5 border-l-4 border-blue-500/40">
              <div className="text-sm text-slate-300">
                <strong className="text-white">Bottom Line:</strong> EDC is a repayable financing tool, not a grant. Use it alongside grant programs to complete your export financing stack. A well-structured export plan might include: CanExport (market development costs, non-repayable) + EDC credit insurance (protect against non-payment) + EDC bank guarantee (unlock larger credit from your bank).
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">EDC's Core Financing Products</h2>
            <div className="space-y-4">
              {[
                {
                  name: "Export Credit Insurance",
                  type: "Insurance (paid premium)",
                  desc: "EDC's most widely used product. Insures your accounts receivable from foreign buyers against non-payment due to buyer insolvency, political risk, or contract cancellation. Allows you to offer open-account payment terms to foreign buyers without the risk of non-payment destroying your cash flow.",
                  who: "Any Canadian business selling goods or services internationally",
                  amount: "Coverage up to 90% of invoice value",
                },
                {
                  name: "Export Guarantee Program (EGP)",
                  type: "Bank Guarantee",
                  desc: "EDC guarantees a loan or credit facility issued by your bank, allowing your bank to extend more credit than it otherwise would based on your domestic assets alone. Your bank bears the risk — EDC's guarantee makes the bank comfortable lending against your foreign receivables or contracts.",
                  who: "Companies with confirmed export contracts or foreign receivables",
                  amount: "Up to $5M for most SMEs; larger amounts for established exporters",
                },
                {
                  name: "Direct Lending",
                  type: "Loan",
                  desc: "EDC lends directly to Canadian exporters in situations where bank financing is unavailable or insufficient. Common for companies pursuing large international contracts, entering high-risk markets, or dealing with long payment cycles in sectors like construction or aerospace.",
                  who: "Mid-to-large exporters with significant international contracts",
                  amount: "Typically $1M+; focused on larger transactions",
                },
                {
                  name: "Buyer Financing",
                  type: "Loan (to foreign buyer)",
                  desc: "EDC lends to your foreign customer to help them purchase Canadian goods or services. This is particularly relevant for high-value capital goods — machinery, technology infrastructure, etc. Your customer can afford the purchase; you get paid promptly.",
                  who: "Canadian exporters selling high-value goods/services internationally",
                  amount: "Structured by transaction size",
                },
                {
                  name: "Foreign Exchange Facility Guarantee",
                  type: "Guarantee",
                  desc: "EDC guarantees a portion of foreign exchange forward contracts, allowing your bank to offer you higher hedging limits. Useful for exporters with significant foreign currency exposure who want to lock in exchange rates on future invoices.",
                  who: "Exporters with material foreign currency exposure",
                  amount: "Based on your hedging needs",
                },
              ].map((prod) => (
                <div key={prod.name} className="glass rounded-xl p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-white font-semibold">{prod.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium shrink-0">{prod.type}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{prod.desc}</p>
                  <div className="text-xs text-slate-500">
                    <span className="text-slate-400 font-medium">Who qualifies:</span> {prod.who}
                  </div>
                  <div className="text-xs text-emerald-400 mt-1">
                    <span className="text-slate-400 font-medium">Amount:</span> {prod.amount}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Who Qualifies for EDC?</h2>
            <p className="leading-relaxed mb-4">
              EDC's eligibility requirements are relatively broad — the primary requirement is that you are a Canadian business involved in international trade:
            </p>
            <div className="space-y-3">
              {[
                { criterion: "Canadian company", detail: "Incorporated in Canada or a Canadian sole proprietor. EDC serves all sizes, from startups to large corporations." },
                { criterion: "Export activity (actual or planned)", detail: "You are currently exporting, or you have a credible plan to begin exporting within 12–24 months. EDC also supports companies in the global supply chain — supplying to Canadian exporters counts." },
                { criterion: "Creditworthiness", detail: "EDC products are commercially priced. Insurance and guarantees require a credit review. Direct lending has more stringent financial assessment requirements." },
                { criterion: "Canadian economic benefit", detail: "The transaction must have meaningful Canadian content — goods produced in Canada, services delivered by Canadians, or intellectual property owned by a Canadian entity." },
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
            <h2 className="text-2xl font-bold text-white mb-4">EDC vs Grant Programs: How to Stack</h2>
            <p className="leading-relaxed mb-4">
              The most effective export financing strategies combine EDC's risk management tools with non-repayable grant programs. Here is how they interact:
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800/50 text-slate-300">
                    <th className="text-left px-4 py-3 font-medium">Program</th>
                    <th className="text-left px-4 py-3 font-medium">Type</th>
                    <th className="text-left px-4 py-3 font-medium">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { prog: "CanExport SMEs", type: "Grant (non-repayable)", for: "Covering upfront market development costs — trade shows, travel, translation" },
                    { prog: "EDC Export Credit Insurance", type: "Insurance (paid)", for: "Protecting against foreign buyer non-payment after you've made the sale" },
                    { prog: "EDC Export Guarantee", type: "Guarantee", for: "Unlocking more bank credit to fund your export operations" },
                    { prog: "BDC Export Financing", type: "Loan", for: "Working capital to fulfil large international orders" },
                  ].map((row, i) => (
                    <tr key={row.prog} className={`border-t border-slate-800 ${i % 2 === 0 ? "bg-slate-900/30" : ""}`}>
                      <td className="px-4 py-3 text-white font-medium">{row.prog}</td>
                      <td className="px-4 py-3 text-slate-300">{row.type}</td>
                      <td className="px-4 py-3 text-slate-400">{row.for}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Access EDC</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Visit EDC Online or Call Your Bank", desc: "Many EDC products are accessed directly through your commercial bank. Your bank may already have an EDC partnership. Alternatively, apply directly at edc.ca." },
                { step: "2", title: "Speak with an EDC Account Manager", desc: "For larger or more complex needs, request an account manager. EDC has regional offices across Canada and is free to consult. There is no cost to discuss your situation." },
                { step: "3", title: "Apply for the Right Product", desc: "Select the product that matches your need — insurance, guarantee, or direct lending. Application requirements vary. Insurance is the simplest and fastest to access." },
              ].map((s) => (
                <div key={s.step} className="glass rounded-xl p-6 flex gap-5">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">{s.step}</div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-sm mt-4">
              Official site:{" "}
              <a href="https://www.edc.ca" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">edc.ca</a>
            </p>
          </section>
        </div>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mt-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Find Your Export Grants and Financing with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap identifies which export programs — grants and financing — your business qualifies for in under 5 minutes.
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
            <Link href="/blog/canexport-program-exporters/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">CanExport Guide</div>
              <div className="text-slate-500">Free grant for export market costs</div>
            </Link>
            <Link href="/blog/bdc-financing-vs-grants/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">BDC vs Grants</div>
              <div className="text-slate-500">Loans vs grants — which is right?</div>
            </Link>
            <Link href="/grants/federal/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Federal Grants</div>
              <div className="text-slate-500">Full 2026 program list</div>
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
