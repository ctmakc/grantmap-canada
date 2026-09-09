import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BDC Loans vs Canadian Business Grants: Which Is Right?",
  description:
    "BDC financing vs Canadian business grants: key differences, when loans make sense, when grants are better, and how to stack both for maximum funding.",
  alternates: { canonical: "/blog/bdc-financing-vs-grants/" },
  openGraph: {
    title: "BDC Loans vs Canadian Business Grants: Which Is Right for Your Business?",
    description:
      "Grants are free money; BDC loans you repay. Here is when each makes sense and how to use both together.",
  
    images: [{ url: "/images/blog/cat-strategy-og.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "BDC Loans vs Canadian Business Grants: Which Is Right for Your Business?",
  description:
    "Key difference between BDC financing (repayable loans) and Canadian business grants (free money), when each makes sense, and how to stack both.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function BDCVsGrantsPage() {
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
          <span className="text-slate-300">BDC Financing vs Grants</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">Guide</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 8 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            BDC Loans vs Canadian Business Grants: Which Is Right for Your Business?
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            The Business Development Bank of Canada (BDC) and government grant programs both support Canadian businesses — but they work in completely different ways. Grants are free money you never repay. BDC provides loans you do repay, with interest. Understanding when to use each — and how to combine them — can be worth hundreds of thousands of dollars.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Fundamental Difference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Canadian Business Grants",
                  items: [
                    "Non-repayable — you keep the money",
                    "Competitive — not everyone qualifies",
                    "Specific purpose — tied to eligible activities",
                    "Application required before work starts",
                    "Reporting requirements during and after",
                    "Examples: IRAP, CanExport, WEF, SR&ED",
                  ],
                  color: "emerald",
                },
                {
                  title: "BDC Financing",
                  items: [
                    "Repayable — loans with interest",
                    "Accessible — most viable businesses qualify",
                    "Flexible purpose — broader use of funds",
                    "Can fund activities already underway",
                    "Regular loan repayment schedule",
                    "Examples: BDC loans, CDAP BDC loan, Futurpreneur",
                  ],
                  color: "blue",
                },
              ].map((col) => (
                <div key={col.title} className={`glass rounded-xl p-5 border border-${col.color}-500/20`}>
                  <h3 className={`text-${col.color}-400 font-semibold mb-3`}>{col.title}</h3>
                  <ul className="space-y-1.5">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className={`text-${col.color}-400 mt-0.5 shrink-0`}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What BDC Actually Offers</h2>
            <p className="leading-relaxed mb-4">
              BDC (Business Development Bank of Canada) is a federal Crown corporation that provides financing, venture capital, and advisory services exclusively to Canadian businesses. Unlike commercial banks, BDC's mandate is to support entrepreneurship — meaning it will lend in situations where a commercial bank might decline.
            </p>
            <div className="space-y-3">
              {[
                { product: "BDC Term Loans", desc: "Standard business loans from $10,000 to several million. Fixed or floating rates. Used for equipment, expansion, leasehold improvements, business acquisition.", rate: "Prime + 2–5%" },
                { product: "BDC Working Capital Loans", desc: "Short-term financing for cash flow needs — seasonal fluctuations, large orders, bridge financing. Can be revolving.", rate: "Varies" },
                { product: "BDC Venture Capital", desc: "Equity investment for high-growth technology companies through BDC Capital. Takes a minority equity stake — not a loan.", rate: "Equity (dilutive)" },
                { product: "BDC Growth & Transition Capital", desc: "Subordinate financing (quasi-equity) for established businesses undergoing significant growth or ownership transitions.", rate: "Higher rate, subordinate" },
                { product: "CDAP BDC Loan (up to $100K)", desc: "Specifically for Canada Digital Adoption Program participants. Up to $100K at favourable rates for digital technology implementation.", rate: "Prime + 0.5–1%" },
              ].map((row, i) => (
                <div key={row.product} className={`glass rounded-xl p-4 ${i === 4 ? "border border-violet-500/20" : ""}`}>
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <span className="text-white font-semibold text-sm">{row.product}</span>
                    <span className="text-orange-400 text-xs font-medium shrink-0">{row.rate}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{row.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">When Grants Are the Right Choice</h2>
            <p className="leading-relaxed mb-4">
              Prioritise grant applications when these conditions exist:
            </p>
            <ul className="space-y-2">
              {[
                "You are conducting R&D or technology innovation (SR&ED, IRAP — these are grants that pay for work you are already doing)",
                "You are developing export markets (CanExport pays 50–75% of eligible market development costs non-repayably)",
                "Your project fits a specific government priority — clean technology, women entrepreneurship, Indigenous-owned business",
                "Cash flow allows you to wait 4–12 weeks for grant approval before beginning the funded activities",
                "You want to minimise debt on your balance sheet",
                "You are already conducting work that would qualify — particularly for SR&ED (retroactive claims are allowed within 18 months)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-emerald-400 mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">When BDC Financing Makes More Sense</h2>
            <ul className="space-y-2">
              {[
                "You need capital immediately and cannot wait for a grant intake window",
                "Your business needs — e.g., equipment purchase, working capital — do not fit grant-eligible categories",
                "You want flexibility to use funds for general business purposes, not a specific defined project",
                "Your credit profile is strong enough for BDC to approve at a reasonable rate",
                "You are a startup without significant R&D — grants are scarce for early-stage companies without a tech angle",
                "You need financing for a business acquisition (most grants do not cover acquisitions)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Stack Grants and BDC Financing</h2>
            <p className="leading-relaxed mb-4">
              The most powerful strategies use grants and BDC together. Here are three common stacking patterns:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Digital Transformation Stack",
                  components: ["CDAP Grant ($15K non-repayable) → Covers digital advisory and planning", "CDAP BDC Loan (up to $100K) → Covers technology implementation", "SR&ED claim (if software R&D involved) → Retroactive on the same project"],
                  total: "Up to $115K+ in combined support",
                },
                {
                  title: "Export Launch Stack",
                  components: ["CanExport SMEs ($3K–$75K) → Market development costs (trade shows, market research)", "BDC Working Capital Loan → Fund inventory and fulfilment for new export orders", "EDC Export Credit Insurance → Protect against buyer non-payment"],
                  total: "Up to $75K non-repayable + BDC working capital + insurance protection",
                },
                {
                  title: "Innovation Scale Stack",
                  components: ["SR&ED Tax Credit → Up to 35% refundable on R&D wages", "NRC IRAP Grant → Up to $500K covering 80% of additional project costs", "BDC Term Loan → Equipment and infrastructure for scaling"],
                  total: "Potentially $600K+ in combined grant and credit support",
                },
              ].map((stack) => (
                <div key={stack.title} className="glass rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-3">{stack.title}</h3>
                  <ul className="space-y-1.5 mb-3">
                    {stack.components.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-violet-400 mt-0.5 shrink-0">+</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-emerald-400 font-semibold text-sm">{stack.total}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400 mt-4">
              Important: Government grants received for specific expenditures typically reduce the SR&amp;ED-eligible amount for those same expenditures. Always coordinate your claims with a qualified advisor. See our <Link href="/blog/stacking-grants-canada-guide/" className="text-blue-400 hover:text-blue-300">grant stacking guide</Link> for detailed rules.
            </p>
          </section>
        </div>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mt-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Find Your Optimal Funding Mix with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap checks your business against all major grant programs and helps you identify the right combination of grants and financing for your situation.
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
            <Link href="/blog/stacking-grants-canada-guide/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Grant Stacking</div>
              <div className="text-slate-500">Combine programs for max funding</div>
            </Link>
            <Link href="/blog/cdap-digital-adoption-program/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">CDAP Guide</div>
              <div className="text-slate-500">$15K grant + $100K BDC loan</div>
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
