import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Futurpreneur Canada: Funding for Young Entrepreneurs",
  description:
    "Futurpreneur Canada guide: up to $20K loan + $40K BDC loan = $60K total, mentorship requirement, age 18-39 eligibility, repayment terms, and how to apply.",
  alternates: { canonical: "/blog/futurpreneur-canada-guide/" },
  openGraph: {
    title: "Futurpreneur Canada: Funding and Mentorship for Young Entrepreneurs",
    description:
      "Up to $60K in combined Futurpreneur + BDC financing for Canadian entrepreneurs aged 18–39. Mentorship is mandatory. Here is everything you need to know.",
  
    images: [{ url: "/images/blog/cat-federal-og.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Futurpreneur Canada: Funding and Mentorship for Young Entrepreneurs",
  description:
    "Up to $20K loan + $40K BDC loan = $60K, mentorship requirement, age 18-39, repayment terms, and how to apply for Futurpreneur Canada in 2026.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function FuturpreneurPage() {
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
          <span className="text-slate-300">Futurpreneur Canada Guide</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">Federal Program</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 7 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Futurpreneur Canada: Funding and Mentorship for Young Entrepreneurs
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Futurpreneur Canada offers young Canadian entrepreneurs aged 18–39 access to up to $60,000 in startup financing — plus two years of mandatory business mentorship from an experienced entrepreneur. It is one of the best-structured programs for early-stage founders who lack the collateral for conventional bank loans.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How Futurpreneur Works</h2>
            <p className="leading-relaxed mb-4">
              Futurpreneur is a federally funded not-for-profit that provides financing and mentorship to young Canadian entrepreneurs. The financing structure involves two components that work together:
            </p>
            <div className="space-y-3">
              {[
                { component: "Futurpreneur Loan", amount: "Up to $20,000", terms: "5-year repayment. Interest-only for the first year, then principal + interest. Rate linked to BDC prime.", desc: "Futurpreneur's own loan fund — the primary barrier-lowering component for entrepreneurs who would otherwise not qualify for bank financing." },
                { component: "BDC Co-Loan", amount: "Up to $40,000", terms: "5-year term at BDC rates. Conditions aligned with Futurpreneur loan.", desc: "BDC matches Futurpreneur's loan with additional capital. The co-loan is contingent on Futurpreneur approval — you apply through Futurpreneur and BDC reviews simultaneously." },
              ].map((c) => (
                <div key={c.component} className="glass rounded-xl p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-white font-semibold">{c.component}</h3>
                    <span className="text-emerald-400 font-bold">{c.amount}</span>
                  </div>
                  <div className="text-orange-400 text-xs mb-2">{c.terms}</div>
                  <p className="text-slate-400 text-sm">{c.desc}</p>
                </div>
              ))}
            </div>
            <div className="glass rounded-xl p-5 border-l-4 border-blue-500/40 mt-4">
              <div className="text-sm">
                <strong className="text-white">Important:</strong> Futurpreneur provides loans (repayable), not grants. However, the interest rate is very favourable, no collateral is required, and the mandatory mentorship component often delivers more value than the financing itself.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Eligibility Requirements</h2>
            <div className="space-y-3">
              {[
                { criterion: "Age 18–39", detail: "At the time of application, you must be between 18 and 39 years old. There is no exception to this age requirement." },
                { criterion: "Canadian citizen or permanent resident", detail: "You must be legally entitled to work in Canada. International students on study permits are not eligible." },
                { criterion: "Starting a new business or early-stage growth", detail: "Futurpreneur supports businesses in the pre-revenue to $3M annual revenue range. Established businesses above this threshold should look at mainstream BDC products." },
                { criterion: "Business based in Canada", detail: "Your business must be incorporated or registered in Canada and operating in Canada." },
                { criterion: "Commitment to mentorship", detail: "You must accept and actively engage with a Futurpreneur-matched business mentor for the two-year mentorship period. Mentorship is not optional." },
                { criterion: "Viable business plan", detail: "A written business plan is required. Futurpreneur's website provides a Business Plan Writer tool. The plan must include financial projections, market analysis, and an operations plan." },
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
            <h2 className="text-2xl font-bold text-white mb-4">Loan Terms and Repayment</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800/50 text-slate-300">
                    <th className="text-left px-4 py-3 font-medium">Feature</th>
                    <th className="text-left px-4 py-3 font-medium">Futurpreneur Loan</th>
                    <th className="text-left px-4 py-3 font-medium">BDC Co-Loan</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Maximum amount", fp: "$20,000", bdc: "$40,000" },
                    { feature: "Term", fp: "5 years", bdc: "5 years" },
                    { feature: "Year 1", fp: "Interest only", bdc: "Interest only" },
                    { feature: "Years 2–5", fp: "Principal + interest", bdc: "Principal + interest" },
                    { feature: "Collateral required", fp: "No", bdc: "No (personal guarantee)" },
                    { feature: "Mentorship required", fp: "Yes (2 years)", bdc: "Yes (tied to FP approval)" },
                  ].map((row, i) => (
                    <tr key={row.feature} className={`border-t border-slate-800 ${i % 2 === 0 ? "bg-slate-900/30" : ""}`}>
                      <td className="px-4 py-3 text-slate-300">{row.feature}</td>
                      <td className="px-4 py-3 text-white font-medium">{row.fp}</td>
                      <td className="px-4 py-3 text-blue-400 font-medium">{row.bdc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Mentorship Component</h2>
            <p className="leading-relaxed mb-4">
              Futurpreneur's mentorship program is often cited by alumni as the most valuable aspect of the program — more than the financing. Here is how it works:
            </p>
            <ul className="space-y-2">
              {[
                "Futurpreneur matches you with a volunteer mentor from its network of experienced entrepreneurs and business professionals",
                "Mentorship is mandatory for two years from the date of your loan disbursement",
                "You meet with your mentor at least once per month (virtually or in person)",
                "Mentors provide guidance on strategy, operations, sales, hiring, and crisis management",
                "If the mentor match is not working, Futurpreneur facilitates a rematch",
                "Many Futurpreneur mentors become long-term advisors, investors, or board members for their mentees",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Apply</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Complete the Online Application", desc: "Apply at futurpreneur.ca. You will need to complete a business plan (use their Business Plan Writer tool), provide personal financial information, and describe your business concept." },
                { step: "2", title: "Application Review (2–4 Weeks)", desc: "Futurpreneur reviews your application, business plan, and financial projections. They may request additional information or a call to discuss your business." },
                { step: "3", title: "Mentor Matching", desc: "Once approved in principle, Futurpreneur matches you with a mentor. You have the opportunity to accept or request a different match before the loan is finalised." },
                { step: "4", title: "BDC Co-Loan Review", desc: "BDC reviews the application simultaneously with Futurpreneur. If Futurpreneur approves, BDC approval for the co-loan typically follows within 1–2 weeks." },
                { step: "5", title: "Loan Disbursement", desc: "Both loans are disbursed when all conditions are met. Funds go into your business bank account. Your mentorship clock starts at disbursement." },
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
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Stacking Futurpreneur with Grants</h2>
            <p className="leading-relaxed mb-4">
              Futurpreneur financing does not prevent you from applying for grants simultaneously. Useful combinations include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "SR&ED Tax Credit", desc: "If your startup involves technical R&D, you can claim SR&ED on qualifying expenditures regardless of Futurpreneur financing.", link: "/sred/" },
                { name: "CDAP Grant ($15K)", desc: "The Canada Digital Adoption Program grant covers digital strategy costs and does not conflict with Futurpreneur.", link: "/blog/cdap-digital-adoption-program/" },
                { name: "Women Entrepreneurship Fund", desc: "Women-owned businesses can apply for both Futurpreneur and WEF (for growth-stage activity beyond the startup phase).", link: "/blog/women-entrepreneurship-fund-canada/" },
                { name: "CanExport", desc: "Once exporting, a Futurpreneur-funded business can apply for CanExport to cover market development costs.", link: "/blog/canexport-program-exporters/" },
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
          <h2 className="text-2xl font-bold text-white mb-4">Find All Your Startup Grants with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap checks your young business against all available federal and provincial programs — not just Futurpreneur — in under 5 minutes.
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
            <Link href="/blog/bdc-financing-vs-grants/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">BDC vs Grants</div>
              <div className="text-slate-500">Understand loans vs free money</div>
            </Link>
            <Link href="/grants/federal/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Federal Grants</div>
              <div className="text-slate-500">Full 2026 program list</div>
            </Link>
            <Link href="/blog/women-entrepreneurship-fund-canada/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Women Entrepreneurship Fund</div>
              <div className="text-slate-500">Grants for women-led businesses</div>
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
