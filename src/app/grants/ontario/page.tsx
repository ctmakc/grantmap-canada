import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Small Business Grants 2026 — Full List",
  description:
    "Complete guide to Ontario small business grants in 2026. Covers OCASE, Ontario Innovation Tax Credit, Digital Main Street, Ontario Co-investment Fund, and more.",
  alternates: { canonical: "/grants/ontario/" },
  openGraph: {
    title: "Ontario Small Business Grants 2026 — Full List",
    description:
      "Every major Ontario provincial grant program for small businesses: eligibility, amounts, and how to apply.",
  },
};

const PROGRAMS = [
  {
    name: "Ontario Innovation Tax Credit (OITC)",
    amount: "8% on eligible R&D expenditures (12% for small businesses with <$600K in taxable income)",
    type: "Provincial Tax Credit",
    eligibility: "Ontario-based corporations conducting scientific research and experimental development (SR&ED) in Ontario",
    link: "https://www.ontario.ca/page/ontario-innovation-tax-credit",
    note: "Stacks directly with the federal SR&ED credit. A qualifying small business can receive up to 44%+ combined when both credits apply. Claimed on Schedule T2SCH566.",
  },
  {
    name: "Digital Main Street — ShopHERE",
    amount: "Free e-commerce setup (valued at ~$2,500)",
    type: "In-Kind / Grant",
    eligibility: "Ontario main-street small businesses and restaurants; must not already have an online store",
    link: "https://digitalmainstreet.ca/shopherepoweredbygoogle/",
    note: "Partnership with Google. A paid digital marketing student builds your online store at no cost. Ideal for retail, food service, and personal services businesses.",
  },
  {
    name: "Ontario Co-investment Fund (OCF)",
    amount: "$250,000–$5,000,000",
    type: "Loan / Equity Investment",
    eligibility: "Ontario-based small and medium businesses; must be co-investing with another investor; social enterprises may qualify",
    link: "https://www.fcc-fac.ca/en/businesses/ontario-co-investment-fund.html",
    note: "Administered by Farm Credit Canada on behalf of the Government of Ontario. Focuses on innovation, environmental performance, or social impact.",
  },
  {
    name: "Ontario STEM Talent for Business Grant",
    amount: "Up to $5,000 per student (up to $30,000 per employer per year)",
    type: "Wage Subsidy",
    eligibility: "Ontario small and medium businesses hiring co-op or internship students in STEM fields",
    link: "https://www.ontario.ca/page/stem-talent",
    note: "Covers 50% of student wages. Strong fit for tech, manufacturing, and life sciences companies looking to offset R&D labour costs.",
  },
  {
    name: "Starter Company Plus",
    amount: "Up to $5,000 grant",
    type: "Grant + Training",
    eligibility: "Ontario residents 18+, starting or growing a business not yet incorporated more than 5 years",
    link: "https://www.ontario.ca/page/start-grow-your-business",
    note: "Delivered through Small Business Enterprise Centres. Includes training, mentorship, and up to $5,000 non-repayable grant for qualifying participants.",
  },
  {
    name: "Ontario Centres of Excellence (OCE) Market Readiness",
    amount: "$15,000–$50,000",
    type: "Grant (cost-shared)",
    eligibility: "Ontario SMEs with an innovative product or service ready for market; must partner with an Ontario university or college",
    link: "https://www.ontario.ca/page/ontario-centres-excellence",
    note: "Covers commercialisation activities including IP protection, regulatory approvals, pilot projects, and marketing for new technologies.",
  },
];

export default function OntarioGrantsPage() {
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
            Match My Business
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/grants/federal/" className="hover:text-blue-400">Federal Grants</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">Ontario</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
            Ontario — Updated May 2026
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Ontario Small Business Grants 2026 — Full List
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Ontario businesses have access to a rich set of provincial programs that stack on top of federal grants. This guide covers the most impactful Ontario programs for 2026, including tax credits, digital adoption support, wage subsidies, and commercialisation funding.
          </p>
        </header>

        {/* Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Ontario Grants: The Big Picture</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Ontario is Canada's largest provincial economy and has some of the most generous business support programs in the country. The province invests heavily in innovation, digital adoption, and skilled talent — reflecting its concentration of tech, manufacturing, and financial services companies.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            The most powerful strategy for Ontario businesses is <strong className="text-white">stacking</strong>: combining federal and provincial programs on the same project. For example, an Ontario tech company conducting R&D can claim both the federal SR&amp;ED credit (up to 35%) and the Ontario Innovation Tax Credit (8–12%), resulting in a combined effective credit of over 40% on eligible expenditures.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            For a complete federal picture, see our <Link href="/grants/federal/" className="text-blue-400 hover:text-blue-300">Federal Grants Guide</Link>. For SR&amp;ED specifically, see the <Link href="/sred/" className="text-blue-400 hover:text-blue-300">SR&amp;ED Deep Dive</Link>.
          </p>

          <div className="glass rounded-xl p-5 border-l-4 border-emerald-500/40">
            <p className="text-sm text-slate-300">
              <strong className="text-white">Tip:</strong> Ontario program eligibility often depends on CRA registration status, employee headcount, and whether you have completed any previous provincial support. GrantMap's AI checks all these criteria automatically.
            </p>
          </div>
        </section>

        {/* Summary table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Ontario Programs at a Glance</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800/50 text-slate-300">
                  <th className="text-left px-4 py-3 font-medium">Program</th>
                  <th className="text-left px-4 py-3 font-medium">Max Funding</th>
                  <th className="text-left px-4 py-3 font-medium">Type</th>
                </tr>
              </thead>
              <tbody>
                {PROGRAMS.map((p, i) => (
                  <tr key={p.name} className={`border-t border-slate-800 ${i % 2 === 0 ? "bg-slate-900/30" : ""}`}>
                    <td className="px-4 py-3 font-medium text-white">
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">{p.name}</a>
                    </td>
                    <td className="px-4 py-3 text-emerald-400 font-medium">{p.amount.split("(")[0].trim()}</td>
                    <td className="px-4 py-3 text-slate-400">{p.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Program cards */}
        <section className="mb-12 space-y-8">
          <h2 className="text-2xl font-bold text-white">Program Details</h2>

          {PROGRAMS.map((p) => (
            <div key={p.name} className="glass rounded-2xl p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-white">{p.name}</h3>
                <span className="shrink-0 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">{p.type}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Funding Amount</div>
                  <div className="text-emerald-400 font-semibold text-sm">{p.amount}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Eligibility</div>
                  <div className="text-slate-300 text-sm">{p.eligibility}</div>
                </div>
              </div>

              <div className="mb-5 p-3 bg-slate-800/40 rounded-lg border-l-2 border-emerald-500/40">
                <p className="text-slate-400 text-sm">{p.note}</p>
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Official Ontario Government Source →
              </a>
            </div>
          ))}
        </section>

        {/* Stacking example */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Stacking Example: Ontario Tech Startup</h2>
          <div className="glass rounded-2xl p-8">
            <p className="text-slate-400 text-sm mb-6">
              A fictional Ontario software company with $2M revenue, 12 employees, and $300K in qualifying R&D spending could access the following in a single fiscal year:
            </p>
            <div className="space-y-3">
              {[
                { program: "Federal SR&ED (35% CCPC rate on $300K)", value: "$105,000", type: "federal" },
                { program: "Ontario Innovation Tax Credit (8% on $300K)", value: "$24,000", type: "ontario" },
                { program: "Canada Digital Adoption Program (CDAP)", value: "$15,000", type: "federal" },
                { program: "Canada Job Grant (2 employees, $10K each)", value: "$20,000", type: "federal" },
                { program: "STEM Talent Internship (1 co-op student)", value: "$5,000", type: "ontario" },
              ].map((row) => (
                <div key={row.program} className="flex items-center justify-between py-2 border-b border-slate-800/50">
                  <div>
                    <span className="text-slate-300 text-sm">{row.program}</span>
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${row.type === "federal" ? "bg-blue-500/10 text-blue-400" : "bg-emerald-500/10 text-emerald-400"}`}>
                      {row.type}
                    </span>
                  </div>
                  <span className="text-emerald-400 font-bold text-sm">{row.value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-3">
                <span className="text-white font-bold">Total potential recovery</span>
                <span className="text-emerald-400 font-bold text-lg">$169,000</span>
              </div>
            </div>
            <p className="text-slate-500 text-xs mt-4">
              * Estimates only. Actual amounts depend on CRA assessment of eligible expenditures and program-specific rules.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Find Your Ontario Grant Mix with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap's AI checks your Ontario business against every program on this page and the federal programs it stacks with. Get a ranked report with draft applications in under 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/app" className="px-8 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white font-medium transition-all">
              Free Quiz
            </Link>
            <Link href="/#pricing" className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all">
              Get Full Report — $150
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-slate-300 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <Link href="/grants/federal/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Federal Grants</div>
              <div className="text-slate-500">IRAP, CDAP, SR&ED and more</div>
            </Link>
            <Link href="/sred/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">SR&amp;ED Guide</div>
              <div className="text-slate-500">Canada's largest R&D tax credit</div>
            </Link>
            <Link href="/for-accountants/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">For Accountants</div>
              <div className="text-slate-500">Run reports for all your clients</div>
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
