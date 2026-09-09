import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NRC IRAP Grant: How to Apply and What Qualifies (2026)",
  description:
    "Complete guide to Canada's NRC IRAP (Industrial Research Assistance Program). Eligibility, funding amounts, application process, and what counts as qualifying R&D.",
  alternates: { canonical: "/blog/irap-grant-guide/" },
  openGraph: {
    title: "NRC IRAP Grant: How to Apply and What Qualifies (2026)",
    description:
      "Everything about Canada's most impactful innovation grant: eligibility, amounts up to $500K, how to apply through an Industrial Technology Advisor.",
  
    images: [{ url: "/images/blog/cat-federal-og.png", width: 1200, height: 630 }],
  },
};

export default function IRAPGuidePage() {
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

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog/" className="hover:text-blue-400">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">IRAP Grant Guide</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-medium">Federal Grant</span>
            <span className="text-xs text-slate-500">May 14, 2026 · 8 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            NRC IRAP Grant: How to Apply and What Qualifies (2026)
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            The NRC Industrial Research Assistance Program (IRAP) is widely considered Canada's most impactful innovation grant for small and medium-sized businesses. Here is everything you need to know about eligibility, how much you can receive, and how the application process actually works.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Is NRC IRAP?</h2>
            <p className="leading-relaxed mb-4">
              IRAP is a program of the National Research Council of Canada (NRC). It provides financial support and advisory services to help Canadian small and medium-sized businesses develop and commercialise technology-based innovations.
            </p>
            <p className="leading-relaxed mb-4">
              Unlike many government programs that work through an online application portal, IRAP works through a network of approximately 260 <strong className="text-white">Industrial Technology Advisors (ITAs)</strong> — technical experts who are assigned to regions across Canada. Your relationship with your ITA is the centre of your IRAP engagement.
            </p>
            <div className="glass rounded-xl p-5 border-l-4 border-violet-500/40">
              <div className="text-sm text-slate-300">
                <strong className="text-white">Quick Facts:</strong> IRAP has supported over 10,000 companies per year with advisory services, and provides direct financial contributions to several thousand per year. The program has been operating since 1962 and is one of the world's longest-running innovation support programs.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">IRAP Eligibility: Who Qualifies?</h2>
            <p className="leading-relaxed mb-4">
              IRAP is designed for Canadian SMEs that are developing technology-based innovations. The core eligibility criteria are:
            </p>
            <div className="space-y-3">
              {[
                { criterion: "Incorporated in Canada", detail: "Must be a Canadian corporation or limited liability partnership; sole proprietors do not qualify." },
                { criterion: "Fewer than 500 employees", detail: "IRAP targets small and medium-sized enterprises. Companies with more than 500 employees do not qualify for most IRAP funding." },
                { criterion: "Profit-motivated", detail: "IRAP supports commercial innovation, not basic research. Your project must have a clear path to commercialisation." },
                { criterion: "Technical innovation focus", detail: "The project must involve developing or adopting technology. Pure business process change without a technology component generally does not qualify." },
                { criterion: "Canadian employees performing the work", detail: "Funding covers costs incurred in Canada — typically salaries of Canadian employees working on the project." },
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
            <h2 className="text-2xl font-bold text-white mb-4">How Much Can IRAP Fund?</h2>
            <p className="leading-relaxed mb-4">
              IRAP funding varies significantly based on the project, company stage, and available budget in your region. Here are the main funding streams:
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800/50 text-slate-300">
                    <th className="text-left px-4 py-3 font-medium">Stream</th>
                    <th className="text-left px-4 py-3 font-medium">Amount</th>
                    <th className="text-left px-4 py-3 font-medium">Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { stream: "Advisory Services (free)", amount: "N/A (in-kind)", coverage: "Access to your ITA's technical expertise and network at no cost" },
                    { stream: "Small Project Contribution", amount: "$10,000–$50,000", coverage: "Up to 80% of eligible labour costs for a defined technical project" },
                    { stream: "Standard Contribution", amount: "$50,000–$500,000", coverage: "Up to 80% of eligible labour + subcontractor costs for larger projects" },
                    { stream: "Youth Employment Program", amount: "Up to $30,000", coverage: "Wages for students/recent graduates working on your IRAP project" },
                  ].map((row, i) => (
                    <tr key={row.stream} className={`border-t border-slate-800 ${i % 2 === 0 ? "bg-slate-900/30" : ""}`}>
                      <td className="px-4 py-3 text-white font-medium">{row.stream}</td>
                      <td className="px-4 py-3 text-emerald-400 font-medium">{row.amount}</td>
                      <td className="px-4 py-3 text-slate-400">{row.coverage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 text-sm mt-3">
              Funding is non-repayable (it is a contribution, not a loan). The 80% coverage means you contribute 20% as the company.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Counts as Qualifying R&amp;D for IRAP?</h2>
            <p className="leading-relaxed mb-4">
              IRAP's definition of qualifying work is broader than SR&amp;ED's. While SR&amp;ED focuses on scientific or technological uncertainty, IRAP focuses on <strong className="text-white">technology development and commercialisation</strong>. Qualifying work includes:
            </p>
            <ul className="space-y-2">
              {[
                "Developing a new product, process, or service with a technology component",
                "Adapting existing technology for a new application or market",
                "Scaling a prototype or pilot to commercial production",
                "Developing software with a meaningful technical challenge (beyond routine coding)",
                "Conducting applied research to solve a specific commercial problem",
                "Testing, validating, or certifying a new technology",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-violet-400 mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed mt-4 text-sm text-slate-400">
              Note: IRAP and SR&amp;ED can be stacked on the same project, but with care. IRAP contributions received for specific expenditures reduce the SR&amp;ED eligible amount for those same expenditures. Your SR&amp;ED specialist should be aware of any IRAP funding when preparing your T661.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The IRAP Application Process</h2>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Find Your Industrial Technology Advisor (ITA)",
                  desc: 'Use the NRC IRAP website to find your regional ITA. You can also search "NRC IRAP contact" + your city. The ITA assignment is geographic — you work with whoever covers your region.',
                  link: { text: "Find Your ITA →", href: "https://nrc.canada.ca/en/support-technology-innovation/nrc-industrial-research-assistance-program/find-an-irap-office" },
                },
                {
                  step: "2",
                  title: "Initial Meeting with Your ITA",
                  desc: "Schedule an introductory meeting (typically 1–2 hours). Describe your business, the technology project you are working on, and your growth plans. The ITA assesses whether your project is a fit for IRAP support. Come prepared with a brief description of your R&D project and its commercial potential.",
                },
                {
                  step: "3",
                  title: "Proposal Development",
                  desc: "If the ITA believes you are a candidate, they guide you through a proposal describing the technical work, expected outcomes, budget, and timeline. This typically takes 2–6 weeks. The ITA helps shape the proposal to meet IRAP's assessment criteria.",
                },
                {
                  step: "4",
                  title: "Approval and Contribution Agreement",
                  desc: "If approved, you receive a formal Contribution Agreement specifying the eligible costs, funding amount, eligible activities, and reporting requirements. Do not start work before this agreement is signed — expenditures before the agreement date are typically not eligible.",
                },
                {
                  step: "5",
                  title: "Project Execution and Claims",
                  desc: "Execute the project while tracking eligible costs (primarily employee time on the project). Submit progress reports to your ITA and submit financial claims as specified in your agreement. Maintain strong timesheets and project records.",
                },
              ].map((s) => (
                <div key={s.step} className="glass rounded-xl p-6 flex gap-5">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-sm">{s.step}</div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-2">{s.desc}</p>
                    {s.link && (
                      <a href={s.link.href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                        {s.link.text}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Tips for a Successful IRAP Application</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Lead with the technical challenge",
                  desc: "IRAP supports technology development, not generic business growth. Frame your project around the specific technical problem you are solving, not the business outcome alone.",
                },
                {
                  title: "Demonstrate commercial viability",
                  desc: "IRAP wants to fund work that will lead to Canadian jobs and exports. Be clear about your market, your customers, and your commercialisation plan.",
                },
                {
                  title: "Build a relationship with your ITA",
                  desc: "The ITA is your advocate inside the program. Invest in the relationship — be transparent, meet regularly, and keep them updated on your project. Long-term IRAP relationships lead to more support over time.",
                },
                {
                  title: "Apply before starting work",
                  desc: "IRAP will not fund work that has already begun. Start the application process 2–3 months before you plan to begin the project.",
                },
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
          <h2 className="text-2xl font-bold text-white mb-4">Check Your IRAP Eligibility with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap checks your business against IRAP criteria along with 14 other programs — and generates draft content you can bring to your ITA meeting.
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
              <div className="text-slate-500">Stack SR&ED on your IRAP project</div>
            </Link>
            <Link href="/grants/federal/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">All Federal Grants</div>
              <div className="text-slate-500">Complete 2026 program list</div>
            </Link>
            <Link href="/blog/cdap-digital-adoption-program/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">CDAP Guide</div>
              <div className="text-slate-500">Digital adoption funding</div>
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
