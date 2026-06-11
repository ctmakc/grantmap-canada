import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AgriInnovate Program: Grants for Canadian Agri-Food",
  description:
    "AgriInnovate Program guide: 50% cost-share up to $10M, eligible investments in food processing and commercialisation, application process, and tips for approval.",
  alternates: { canonical: "/blog/agri-innovate-program/" },
  openGraph: {
    title: "AgriInnovate Program: Grants for Canadian Food and Agriculture Businesses",
    description:
      "AgriInnovate offers 50% cost-share up to $10M for Canadian agri-food processing and commercialisation. Here is how to qualify and apply.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AgriInnovate Program: Grants for Canadian Food and Agriculture Businesses",
  description:
    "50% cost-share up to $10M, eligible investments (processing, commercialisation), application process, and tips for the AgriInnovate Program.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function AgriInnovatePage() {
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
          <span className="text-slate-300">AgriInnovate Program</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">Federal Grant</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 8 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            AgriInnovate Program: Grants for Canadian Food and Agriculture Businesses
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            The AgriInnovate Program is Agriculture and Agri-Food Canada's primary grant for businesses commercialising or adopting innovative agri-food technologies. With a 50% cost-share structure and potential investments up to $10 million, it is one of the largest grant opportunities available to Canadian food and agriculture companies.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Is AgriInnovate?</h2>
            <p className="leading-relaxed mb-4">
              AgriInnovate is a federal program delivered by Agriculture and Agri-Food Canada (AAFC). It provides repayable or non-repayable contributions — the terms depend on the type of recipient and project. For-profit businesses typically receive repayable contributions; non-profit and academic recipients may receive non-repayable contributions.
            </p>
            <p className="leading-relaxed mb-4">
              The program focuses on accelerating the adoption or commercialisation of innovative products, technologies, processes, and services throughout the Canadian agriculture and agri-food sector. This includes everything from novel food processing equipment to agricultural biotech and precision farming technologies.
            </p>
            <div className="glass rounded-xl p-5 border-l-4 border-emerald-500/40">
              <div className="text-sm text-slate-300">
                <strong className="text-white">Key Details:</strong> AgriInnovate provides up to 50% of eligible project costs, with a maximum federal contribution of $10 million per project. Minimum project cost is typically $250,000 (meaning the minimum federal contribution is $125,000). Projects must be completed within 5 years.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Eligibility Requirements</h2>
            <div className="space-y-3">
              {[
                { criterion: "Canadian business or organisation", detail: "Incorporated in Canada, partnership, cooperative, Indigenous organisation, university, college, or not-for-profit. Sole proprietors generally do not qualify." },
                { criterion: "Agriculture or agri-food sector focus", detail: "Your project must clearly relate to the Canadian agriculture, agri-food, or agri-based product sector. This includes primary production, food processing, agri-tech, and related industries." },
                { criterion: "Innovation component", detail: "Projects must involve adoption or commercialisation of an innovation — a new product, process, technology, or service. Routine equipment replacement without an innovative element does not qualify." },
                { criterion: "Minimum 50% co-investment", detail: "AgriInnovate covers up to 50% of eligible costs. You must fund at least 50% yourself or through other non-federal sources." },
                { criterion: "Viable commercialisation path", detail: "The project must demonstrate a clear path to commercial viability and Canadian economic benefit." },
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
            <h2 className="text-2xl font-bold text-white mb-4">Eligible Project Types</h2>
            <p className="leading-relaxed mb-4">
              AgriInnovate funds two main types of projects:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  type: "Commercialisation Projects",
                  desc: "Activities that move an innovation from a concept or early prototype stage to a commercially viable product or service. Includes pilot plants, scale-up facilities, market testing, and early commercial production runs.",
                  examples: ["Novel food ingredient scale-up", "Alternative protein processing line", "Precision fermentation pilot plant", "Aquaculture technology commercialisation"],
                },
                {
                  type: "Adoption Projects",
                  desc: "Activities that help Canadian agri-food businesses adopt an innovative technology that already exists but has not yet been widely adopted in Canada. Includes technology integration, equipment installation, and implementation support.",
                  examples: ["AI-powered crop monitoring system", "Automated food processing technology", "Cold chain optimisation technology", "Sustainable packaging systems"],
                },
              ].map((t) => (
                <div key={t.type} className="glass rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-2">{t.type}</h3>
                  <p className="text-slate-400 text-sm mb-3">{t.desc}</p>
                  <div className="space-y-1">
                    {t.examples.map((ex) => (
                      <div key={ex} className="flex items-start gap-2 text-xs text-slate-500">
                        <span className="text-emerald-400 shrink-0">•</span>
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Eligible Expenditures</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800/50 text-slate-300">
                    <th className="text-left px-4 py-3 font-medium">Cost Category</th>
                    <th className="text-left px-4 py-3 font-medium">Eligible?</th>
                    <th className="text-left px-4 py-3 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: "Capital equipment and machinery", elig: "Yes", notes: "Equipment directly used in the project. Must be new or, in some cases, refurbished." },
                    { cat: "Leasehold improvements", elig: "Yes", notes: "Facility modifications directly required for the project." },
                    { cat: "Salaries for project staff", elig: "Yes", notes: "Employees working directly on the funded project. Requires timesheets." },
                    { cat: "Professional services (engineering, consulting)", elig: "Yes", notes: "Directly related to the project — design, feasibility, technical advisory." },
                    { cat: "Materials and supplies", elig: "Yes", notes: "Materials consumed in project activities — not inventory for sale." },
                    { cat: "Technology licensing", elig: "Yes", notes: "Costs to license core technology for the project." },
                    { cat: "Ongoing operational costs", elig: "No", notes: "AgriInnovate funds capital and project costs, not routine operations." },
                    { cat: "Land purchase", elig: "No", notes: "Land acquisition is not an eligible expense." },
                  ].map((row, i) => (
                    <tr key={row.cat} className={`border-t border-slate-800 ${i % 2 === 0 ? "bg-slate-900/30" : ""}`}>
                      <td className="px-4 py-3 text-white font-medium">{row.cat}</td>
                      <td className={`px-4 py-3 font-medium ${row.elig === "Yes" ? "text-emerald-400" : "text-red-400"}`}>{row.elig}</td>
                      <td className="px-4 py-3 text-slate-400">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Application Process</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Review the Program Guide", desc: "Download the current AgriInnovate program guide from the AAFC website at canada.ca/agri-innovate. Review eligibility criteria and funding priorities carefully before investing time in an application." },
                { step: "2", title: "Contact AAFC for a Pre-Application Discussion", desc: "AAFC encourages pre-application discussions. Contact the program team to discuss your project concept before preparing a full application. This conversation helps you understand whether your project is a strong fit and what evidence you will need to provide." },
                { step: "3", title: "Prepare Your Application", desc: "AgriInnovate applications require a detailed project description, financial projections, business plan, budget breakdown, and evidence of your innovation. Applications are typically 20–50 pages plus supporting documentation." },
                { step: "4", title: "Submit During an Open Intake", desc: "AgriInnovate operates on intake periods. Check the AAFC website for current intake windows. The program does not accept applications continuously — intakes open periodically with defined deadlines." },
                { step: "5", title: "Assessment and Decision (3–9 Months)", desc: "AAFC conducts a thorough assessment including financial due diligence. Decision timelines vary. You may be invited to present or provide additional information during the assessment process." },
              ].map((s) => (
                <div key={s.step} className="glass rounded-xl p-6 flex gap-5">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">{s.step}</div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-sm mt-4">
              Official program page:{" "}
              <a href="https://agriculture.canada.ca/en/programs/agri-innovate" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                agriculture.canada.ca/en/programs/agri-innovate
              </a>
            </p>
          </section>
        </div>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mt-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Find All Your Agri-Food Grants with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap checks your food and agriculture business against AgriInnovate, SR&amp;ED, and other applicable programs in under 5 minutes.
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
              <div className="text-blue-400 font-medium mb-1">SR&amp;ED Guide</div>
              <div className="text-slate-500">Stack with AgriInnovate</div>
            </Link>
            <Link href="/blog/clean-technology-grants-canada/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Clean Tech Grants</div>
              <div className="text-slate-500">Green agri-food funding options</div>
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
