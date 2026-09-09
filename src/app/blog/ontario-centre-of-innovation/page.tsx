import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Centre of Innovation (OCI): Programs for Tech Companies",
  description:
    "Ontario Centre of Innovation (OCI) programs: vouchers up to $25K, market readiness support, Invest Ontario programs, and how to access funding for Ontario tech companies.",
  alternates: { canonical: "/blog/ontario-centre-of-innovation/" },
  openGraph: {
    title: "Ontario Centre of Innovation (OCI): Programs for Ontario Tech Companies",
    description:
      "OCI vouchers up to $25K, market readiness programs, and how Ontario tech companies can access innovation funding.",
  
    images: [{ url: "/images/blog/cat-provincial-og.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Centre of Innovation (OCI): Programs for Ontario Tech Companies",
  description:
    "Vouchers up to $25K, market readiness, Invest Ontario programs, application windows — OCI's full suite for Ontario tech companies.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function OCIPage() {
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
          <span className="text-slate-300">Ontario Centre of Innovation</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">Ontario Program</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 7 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Ontario Centre of Innovation (OCI): Programs for Ontario Tech Companies
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            The Ontario Centre of Innovation (OCI) is a not-for-profit agency that connects Ontario businesses, researchers, and government to accelerate technology innovation. Through vouchers, matching programs, and connections to Invest Ontario, OCI provides a suite of supports that complement federal programs like IRAP and SR&amp;ED.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Is OCI?</h2>
            <p className="leading-relaxed mb-4">
              Formerly known as MaRS Innovation and related to the broader Ontario innovation ecosystem, OCI manages programs funded by the Ontario government. Its mandate is to bridge the gap between industry and academic research, help companies access technology expertise, and support market readiness for Ontario innovations.
            </p>
            <p className="leading-relaxed mb-4">
              OCI's programs are most relevant to technology companies — software, hardware, life sciences, advanced manufacturing, and AI — though some programs are open to a broader set of Ontario businesses. OCI programs can be stacked with the <Link href="/blog/ontario-innovation-tax-credit/" className="text-blue-400 hover:text-blue-300">Ontario Innovation Tax Credit (OITC)</Link> and federal programs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">OCI's Core Programs</h2>
            <div className="space-y-4">
              {[
                {
                  name: "Voucher for Innovation and Productivity (VIP)",
                  amount: "Up to $25,000",
                  costShare: "50% co-investment required",
                  desc: "OCI's most accessible program. Provides vouchers for Ontario SMEs to hire a college or university researcher to work on a specific innovation challenge. The researcher brings expertise the company lacks; the company applies it to a commercial problem.",
                  eligibility: "Ontario SMEs in any sector with a technology challenge that can benefit from academic expertise",
                  process: "Match with a college/university partner first, then apply jointly. Applications reviewed on a rolling basis.",
                },
                {
                  name: "Market Readiness (MR) Program",
                  amount: "Up to $30,000",
                  costShare: "50% co-investment",
                  desc: "Supports Ontario technology companies preparing to enter new markets — including export markets. Eligible costs include market research, regulatory approvals in target markets, product adaptation, and commercialisation advisory services.",
                  eligibility: "Ontario-based companies with a technology product or service ready for new market entry",
                  process: "Online application with business plan and market readiness plan. Windows open periodically.",
                },
                {
                  name: "Invest Ontario Fund (administered through OCI)",
                  amount: "$500K–$25M",
                  costShare: "Industry contribution required",
                  desc: "Large strategic investments in Ontario companies that are creating significant jobs and economic impact. This is a high-bar program for established businesses and scale-ups. OCI acts as a delivery partner for Invest Ontario.",
                  eligibility: "Companies with large-scale investment plans creating significant Ontario employment",
                  process: "Contact OCI or Invest Ontario directly. Extensive due diligence process.",
                },
                {
                  name: "Ontario-Israel Industrial R&D Foundation (BIRD Ontario)",
                  amount: "Up to CAD $2M",
                  costShare: "50% industry co-investment",
                  desc: "A bilateral program between Ontario and Israel supporting joint R&D projects between Ontario and Israeli companies. Both companies work together on a shared technological challenge, splitting costs and IP ownership by agreement.",
                  eligibility: "Ontario SMEs partnering with an Israeli company on a specific joint R&D project",
                  process: "Joint application from Ontario and Israeli partners. Apply through OCI's website.",
                },
              ].map((prog) => (
                <div key={prog.name} className="glass rounded-xl p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-white font-semibold">{prog.name}</h3>
                    <span className="text-emerald-400 font-bold text-sm shrink-0">{prog.amount}</span>
                  </div>
                  <div className="text-xs text-orange-400 mb-3">{prog.costShare}</div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{prog.desc}</p>
                  <div className="grid grid-cols-1 gap-1 text-xs">
                    <div><span className="text-slate-400 font-medium">Eligibility: </span><span className="text-slate-500">{prog.eligibility}</span></div>
                    <div><span className="text-slate-400 font-medium">Process: </span><span className="text-slate-500">{prog.process}</span></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-sm mt-4">
              Official OCI website:{" "}
              <a href="https://www.oc-innovation.ca" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">oc-innovation.ca</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Application Windows and Timing</h2>
            <p className="leading-relaxed mb-4">
              OCI programs open and close on a schedule that varies by program. Key timing notes:
            </p>
            <div className="space-y-3">
              {[
                { prog: "VIP (Voucher)", timing: "Rolling intake — apply anytime. Typically 4–8 weeks to decision." },
                { prog: "Market Readiness", timing: "Periodic intake windows — typically 2–3 per year. Subscribe to OCI newsletter." },
                { prog: "Invest Ontario Fund", timing: "No formal intake — contact OCI directly for large investment discussions." },
                { prog: "BIRD Ontario", timing: "Annual call for proposals — aligned with Israeli-side deadlines. Check OCI website in Q1 each year." },
              ].map((item) => (
                <div key={item.prog} className="flex items-start gap-3 glass rounded-xl p-4">
                  <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                  <div>
                    <span className="text-white font-semibold text-sm">{item.prog}: </span>
                    <span className="text-slate-400 text-sm">{item.timing}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Stacking OCI with Other Programs</h2>
            <p className="leading-relaxed mb-4">
              OCI programs are designed to complement other federal and provincial support. Common stacking combinations for Ontario tech companies:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "OCI VIP + SR&ED", desc: "The college researcher's work can qualify for SR&ED if it involves genuine technological uncertainty. The SR&ED claim is on the company's co-investment portion — OCI funding reduces the eligible pool.", link: "/sred/" },
                { name: "OCI + OITC", desc: "The Ontario Innovation Tax Credit (8% on eligible R&D) stacks on top of OCI-funded projects where the company has qualifying R&D expenditures.", link: "/blog/ontario-innovation-tax-credit/" },
                { name: "OCI + IRAP", desc: "IRAP and OCI VIP can apply to the same company simultaneously — if the projects are distinct. Confirm with your ITA that there is no expenditure overlap.", link: "/blog/irap-grant-guide/" },
                { name: "OCI Market Readiness + CanExport", desc: "For companies entering export markets, OCI Market Readiness and CanExport can cover different eligible costs in the same market development effort.", link: "/blog/canexport-program-exporters/" },
              ].map((prog) => (
                <Link key={prog.name} href={prog.link} className="glass rounded-xl p-5 hover:border-blue-500/30 transition-colors">
                  <div className="text-blue-400 font-medium mb-1 text-sm">{prog.name}</div>
                  <div className="text-slate-400 text-xs leading-relaxed">{prog.desc}</div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mt-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Find All Your Ontario Grants with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap checks your Ontario tech company against OCI, OITC, SR&amp;ED, IRAP, and other programs — in under 5 minutes.
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
            <Link href="/blog/ontario-innovation-tax-credit/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">OITC Guide</div>
              <div className="text-slate-500">8% Ontario R&D credit</div>
            </Link>
            <Link href="/grants/ontario/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Ontario Grants</div>
              <div className="text-slate-500">All Ontario programs in 2026</div>
            </Link>
            <Link href="/blog/mitacs-funding-research/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Mitacs Funding</div>
              <div className="text-slate-500">Research partnerships for industry</div>
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
