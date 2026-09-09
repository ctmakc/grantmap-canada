import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Indigenous Business Grants Canada: Full 2026 Guide",
  description:
    "Grants for Indigenous-owned businesses in Canada: ABES program, NACCA loan funds, provincial programs, and how to access all available Indigenous business funding in 2026.",
  alternates: { canonical: "/blog/indigenous-business-grants-canada/" },
  openGraph: {
    title: "Grants for Indigenous-Owned Businesses in Canada: Full 2026 Guide",
    description:
      "Complete guide to Indigenous business funding in Canada: ABES, NACCA, provincial programs, and stacking strategies.",
  
    images: [{ url: "/images/blog/cat-sector-og.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Grants for Indigenous-Owned Businesses in Canada: Full 2026 Guide",
  description:
    "Aboriginal Business and Entrepreneurship Support (ABES), NACCA loan programs, and provincial Indigenous business funding programs in 2026.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function IndigenousGrantsPage() {
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
          <span className="text-slate-300">Indigenous Business Grants Canada</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">Federal + Provincial</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 9 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Grants for Indigenous-Owned Businesses in Canada: Full 2026 Guide
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Indigenous entrepreneurs in Canada have access to a dedicated set of federal programs, Indigenous Financial Institutions (IFIs), and provincial supports — in addition to mainstream programs available to all Canadian businesses. This guide maps every major funding stream available in 2026.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Overview: The Indigenous Business Funding Landscape</h2>
            <p className="leading-relaxed mb-4">
              Federal Indigenous business support is primarily delivered through two channels: ISC (Indigenous Services Canada) through the Aboriginal Business and Entrepreneurship Support (ABES) program, and the National Aboriginal Capital Corporations Association (NACCA) network of Indigenous Financial Institutions (IFIs) spread across the country.
            </p>
            <p className="leading-relaxed mb-4">
              These programs exist alongside — not instead of — mainstream programs like <Link href="/sred/" className="text-blue-400 hover:text-blue-300">SR&amp;ED</Link>, IRAP, and provincial grants. Indigenous businesses are eligible for all programs that any Canadian business can access, plus the Indigenous-specific programs listed here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Aboriginal Business and Entrepreneurship Support (ABES)</h2>
            <p className="leading-relaxed mb-4">
              ABES is the primary federal non-repayable grant program for Indigenous entrepreneurs. Administered by Indigenous Services Canada (ISC), it supports First Nations, Métis, and Inuit individuals who own and operate a business.
            </p>
            <div className="space-y-3">
              {[
                { criterion: "Eligible Applicants", detail: "First Nations, Métis, and Inuit individuals (Status and non-Status) who are Canadian citizens or permanent residents. The business must be majority (51%+) owned and controlled by eligible Indigenous persons." },
                { criterion: "Eligible Activities", detail: "Business start-up costs, expansion projects, feasibility studies, market development, training, technical assistance, and capital purchases directly related to business operations." },
                { criterion: "Funding Amounts", detail: "Non-repayable contributions typically range from $5,000 to $99,999 for individual projects. Larger infrastructure or community economic development projects may receive more." },
                { criterion: "Application Process", detail: "Applications are submitted to your regional ISC office. A business plan is required. Work with your local Indigenous Financial Institution (IFI) to strengthen your application." },
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
            <p className="text-slate-400 text-sm mt-4">
              Official resource:{" "}
              <a href="https://www.canada.ca/en/indigenous-services-canada/services/indigenous-business.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                canada.ca — Indigenous Business Support
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">NACCA and Indigenous Financial Institutions (IFIs)</h2>
            <p className="leading-relaxed mb-4">
              The National Aboriginal Capital Corporations Association (NACCA) is the national association representing over 50 Indigenous Financial Institutions (IFIs) across Canada. IFIs offer loans, loan guarantees, and business advisory services to Indigenous entrepreneurs — often on terms that mainstream banks cannot match for early-stage businesses.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800/50 text-slate-300">
                    <th className="text-left px-4 py-3 font-medium">Program Type</th>
                    <th className="text-left px-4 py-3 font-medium">Typical Amount</th>
                    <th className="text-left px-4 py-3 font-medium">Administered By</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Business Loan", amount: "$5,000–$250,000", by: "Your regional IFI" },
                    { type: "Loan Guarantee", amount: "Varies", by: "IFI + commercial bank" },
                    { type: "Venture Capital (selected IFIs)", amount: "$50,000–$1M+", by: "NACCA Equity Program" },
                    { type: "Business Advisory Services", amount: "Free / subsidised", by: "IFI staff" },
                    { type: "Micro-loans", amount: "Up to $10,000", by: "Futurpreneur + IFI partnerships" },
                  ].map((row, i) => (
                    <tr key={row.type} className={`border-t border-slate-800 ${i % 2 === 0 ? "bg-slate-900/30" : ""}`}>
                      <td className="px-4 py-3 text-white font-medium">{row.type}</td>
                      <td className="px-4 py-3 text-emerald-400 font-medium">{row.amount}</td>
                      <td className="px-4 py-3 text-slate-400">{row.by}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 text-sm mt-3">
              Find your regional IFI at{" "}
              <a href="https://nacca.ca" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">nacca.ca</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Provincial Indigenous Business Programs</h2>
            <div className="space-y-3">
              {[
                { province: "Ontario", program: "Ontario Indigenous Economic Development Fund", desc: "Supports Indigenous community-owned businesses and economic development projects in Ontario. Contact the Ministry of Indigenous Affairs Ontario." },
                { province: "BC", program: "Indigenous Business and Investment Council (BC)", desc: "Connects Indigenous businesses with provincial procurement opportunities and development resources. Multiple grant programs available through the Province." },
                { province: "Alberta", program: "Alberta Indigenous Opportunities Corporation (AIOC)", desc: "Provides loan guarantees for major Indigenous economic development projects in Alberta — particularly in natural resources and infrastructure." },
                { province: "Saskatchewan", program: "Saskatchewan Indian Equity Foundation (SIEF)", desc: "Business loans up to $250K for Saskatchewan First Nations entrepreneurs. Operates as an IFI with federal backing." },
                { province: "Manitoba", program: "First Peoples Economic Growth Fund (FPEGF)", desc: "Business loans and advisory services for First Nations and Métis entrepreneurs in Manitoba." },
                { province: "Atlantic Canada", program: "ACOA Aboriginal Business Initiatives", desc: "Atlantic Canada Opportunities Agency supports Indigenous businesses in the Atlantic provinces through targeted ABES delivery and sector-specific programs." },
              ].map((prog) => (
                <div key={prog.province} className="glass rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-400 font-medium shrink-0">{prog.province}</div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">{prog.program}</div>
                      <div className="text-slate-400 text-sm">{prog.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Mainstream Programs Open to Indigenous Businesses</h2>
            <p className="leading-relaxed mb-4">
              Indigenous entrepreneurs should not limit their search to Indigenous-specific programs. All of the following mainstream programs are fully available to Indigenous-owned businesses:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "SR&ED Tax Credit", desc: "Up to 35% on qualifying R&D. No restrictions on Indigenous ownership.", link: "/sred/" },
                { name: "NRC IRAP", desc: "Up to $500K for tech innovation. Indigenous companies are encouraged applicants.", link: "/blog/irap-grant-guide/" },
                { name: "CanExport", desc: "Up to $75K for export market development. Indigenous cultural products and services are strong candidates.", link: "/blog/canexport-program-exporters/" },
                { name: "Futurpreneur", desc: "Up to $60K for Indigenous entrepreneurs aged 18–39. Indigenous applicants are specifically prioritised.", link: "/blog/futurpreneur-canada-guide/" },
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
          <h2 className="text-2xl font-bold text-white mb-4">Find All Your Business Grants with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap checks your business against Indigenous-specific and mainstream programs — delivered in under 5 minutes.
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
            <Link href="/grants/federal/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Federal Grants</div>
              <div className="text-slate-500">All federal programs in 2026</div>
            </Link>
            <Link href="/blog/women-entrepreneurship-fund-canada/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Women Entrepreneurship Fund</div>
              <div className="text-slate-500">WEF grants for women-led businesses</div>
            </Link>
            <Link href="/blog/futurpreneur-canada-guide/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Futurpreneur</div>
              <div className="text-slate-500">Funding for young entrepreneurs</div>
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
