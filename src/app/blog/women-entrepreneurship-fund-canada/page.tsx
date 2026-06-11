import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Women Entrepreneurship Fund Canada: How to Apply",
  description:
    "Women Entrepreneurship Fund Canada guide: WEF stream overview, eligible expenses ($20K–$100K), WE Fund stream, application scoring rubric, and how to qualify.",
  alternates: { canonical: "/blog/women-entrepreneurship-fund-canada/" },
  openGraph: {
    title: "Women Entrepreneurship Fund Canada: How to Apply and Qualify",
    description:
      "Full guide to WEF Canada: who qualifies, what expenses are covered ($20K–$100K), the WE Fund stream, and tips for scoring a strong application.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Women Entrepreneurship Fund Canada: How to Apply and Qualify",
  description:
    "WEF stream overview, eligible expenses ($20K–$100K), WE Fund stream, application scoring rubric, and how to qualify in 2026.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function WEFPage() {
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
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog/" className="hover:text-blue-400">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">Women Entrepreneurship Fund Canada</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-medium">Federal Grant</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 8 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Women Entrepreneurship Fund Canada: How to Apply and Qualify
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            The Women Entrepreneurship Fund (WEF) is a federal non-repayable grant for women-owned and women-led businesses in Canada. Grants range from $20,000 to $100,000 — here is everything you need to know to build a competitive application.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Is the Women Entrepreneurship Fund?</h2>
            <p className="leading-relaxed mb-4">
              The Women Entrepreneurship Fund is part of Canada's Women Entrepreneurship Strategy (WES), a broader federal initiative to increase women's participation in the economy. The WEF provides direct, non-repayable contributions to help women entrepreneurs grow and scale their businesses — particularly to pursue international and domestic export opportunities.
            </p>
            <p className="leading-relaxed mb-4">
              The program is administered by Innovation, Science and Economic Development Canada (ISED) and delivered in collaboration with regional development agencies (RDAs) such as FedDev Ontario, Western Economic Diversification (WD), and ACOA.
            </p>
            <div className="glass rounded-xl p-5 border-l-4 border-violet-500/40">
              <div className="text-sm text-slate-300">
                <strong className="text-white">Program Overview:</strong> WEF provides grants of $20,000–$100,000 to women-owned or women-led for-profit businesses that demonstrate capacity to grow and enter new markets. The program prioritises scaling activity — not early-stage startup funding.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">WEF Eligibility Requirements</h2>
            <div className="space-y-3">
              {[
                { criterion: "Majority women-owned or women-led", detail: "The business must be at least 51% owned and operated by women. 'Led' means women hold the majority of senior decision-making positions — CEO, President, or equivalent." },
                { criterion: "For-profit business incorporated in Canada", detail: "Sole proprietors may qualify in some RDA regions; incorporated entities are preferred. Not-for-profit organisations do not qualify." },
                { criterion: "Operating for at least one year", detail: "WEF targets growth-stage businesses, not startups. Most successful applicants have 1–3+ years of operating history and some existing revenue." },
                { criterion: "Viable growth plan", detail: "Your application must demonstrate a credible plan to grow revenues, enter new markets, hire employees, or scale operations. Vague ambition does not score well." },
                { criterion: "Canada-based activities", detail: "Funded activities must take place in Canada or support Canadian business growth. Export market development expenses must relate to expanding your Canadian business internationally." },
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
            <h2 className="text-2xl font-bold text-white mb-4">Eligible Expenses: What WEF Covers</h2>
            <p className="leading-relaxed mb-4">
              WEF covers a broad range of growth-related expenses. Eligible costs include:
            </p>
            <ul className="space-y-2">
              {[
                "Market research and business development activities",
                "Export and international market development (trade shows, business travel, translation)",
                "Technology adoption and digital transformation costs",
                "Professional services (legal, accounting, consulting) directly related to the funded project",
                "Employee wages for newly hired staff supporting growth activities",
                "Training and capacity-building for the business owner or key employees",
                "Website development, e-commerce infrastructure, and digital marketing",
                "Equipment and capital costs directly tied to the funded project (some regions)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-violet-400 mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-400 mt-4">
              Not eligible: general operating expenses, debt repayment, refinancing, land purchase, and activities that commenced before the application was approved.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The WE Fund Stream vs WEF Direct</h2>
            <p className="leading-relaxed mb-4">
              The Women Entrepreneurship Strategy includes two main funding streams that are often confused:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "WEF (Women Entrepreneurship Fund)",
                  desc: "Direct grant to individual businesses. $20K–$100K non-repayable. Applied for through your regional development agency. Competitive intake — not always open. Targets growth-stage companies seeking to scale.",
                  tag: "Direct Grant",
                },
                {
                  name: "WES Ecosystem Fund",
                  desc: "Funding to organisations that support women entrepreneurs — not to businesses directly. If you are an incubator, accelerator, or organisation serving women entrepreneurs, this stream is for you. Individual businesses do not apply directly.",
                  tag: "Organisation Funding",
                },
              ].map((stream) => (
                <div key={stream.name} className="glass rounded-xl p-5">
                  <div className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-medium mb-3 inline-block">{stream.tag}</div>
                  <h3 className="text-white font-semibold mb-2">{stream.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{stream.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How Your Application Is Scored</h2>
            <p className="leading-relaxed mb-4">
              WEF applications are assessed against a merit-based rubric. While exact scoring weights vary by regional agency, these factors consistently determine success:
            </p>
            <div className="space-y-3">
              {[
                { factor: "Viability and growth potential", weight: "High", desc: "Does the business have a realistic path to significant revenue growth? Show historical financials, current revenue, and a credible multi-year projection." },
                { factor: "Quality of the project plan", weight: "High", desc: "Is the funded project well-defined with clear milestones, a reasonable budget, and measurable outcomes? Vague project descriptions score poorly." },
                { factor: "Economic impact and job creation", weight: "High", desc: "How many Canadian jobs will the grant support or create? How much incremental revenue will be generated? Quantify outcomes." },
                { factor: "Market readiness", weight: "Medium", desc: "Demonstrated understanding of target markets, competitive landscape, and your competitive advantage." },
                { factor: "Underrepresented identity", weight: "Medium", desc: "Bonus consideration may apply for Indigenous women, women of colour, women with disabilities, or rural women entrepreneurs." },
                { factor: "Project budget reasonableness", weight: "Medium", desc: "Is the budget realistic and well-justified? Inflated or vague budgets raise red flags." },
              ].map((row) => (
                <div key={row.factor} className="glass rounded-xl p-4 flex gap-4">
                  <div className="shrink-0">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${row.weight === "High" ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400" : "bg-slate-700 text-slate-400"}`}>
                      {row.weight}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{row.factor}</div>
                    <div className="text-slate-400 text-xs leading-relaxed">{row.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Apply</h2>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Identify Your Regional Development Agency",
                  desc: "WEF is administered regionally. Contact FedDev Ontario (Ontario), Western Economic Diversification (BC, AB, SK, MB), ACOA (Atlantic Canada), DEC (Quebec), or CanNor (territories) depending on where your business is located.",
                },
                {
                  step: "2",
                  title: "Watch for Intake Announcements",
                  desc: "WEF is not always open for applications. Subscribe to your RDA's newsletter and follow Innovation Canada on social media to catch intake window announcements — they can be short.",
                },
                {
                  step: "3",
                  title: "Prepare Your Application Package",
                  desc: "Typical requirements: business plan or executive summary, 2–3 years of financial statements, project description with budget, evidence of majority women ownership, letters of support from customers or partners.",
                },
                {
                  step: "4",
                  title: "Submit and Follow Up",
                  desc: "Submit through the online portal for your RDA. Most agencies conduct a phone or video interview with shortlisted applicants. Be prepared to clarify your budget and project plan.",
                },
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
        </div>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mt-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Find All Your Business Grants with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap checks your business against WEF, federal programs, and provincial grants — delivering a complete funding roadmap in under 5 minutes.
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
            <Link href="/blog/how-to-write-grant-application/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Grant Writing Tips</div>
              <div className="text-slate-500">Write a winning application</div>
            </Link>
            <Link href="/blog/indigenous-business-grants-canada/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Indigenous Business Grants</div>
              <div className="text-slate-500">ABES and NACCA programs</div>
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
