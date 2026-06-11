import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hire a Grant Writer vs Use AI: Honest Comparison for SMBs",
  description:
    "Grant writer vs AI for Canadian SMBs: real costs ($150-300/hr or 5-10% of award), when AI handles it, when you need human expertise — an honest comparison.",
  alternates: { canonical: "/blog/hire-grant-writer-vs-ai/" },
  openGraph: {
    title: "Should You Hire a Grant Writer or Use AI? Honest Comparison for Canadian SMBs",
    description:
      "Grant writer costs vs AI tools — when each is the right choice for Canadian small businesses applying for government grants.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Should You Hire a Grant Writer or Use AI? Honest Comparison for Canadian SMBs",
  description:
    "Grant writer costs ($150-300/hr or 5-10% of award), when AI handles it, when human expertise is needed — honest comparison for Canadian SMBs.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function GrantWriterVsAIPage() {
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
          <span className="text-slate-300">Grant Writer vs AI</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">Strategy</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 8 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Should You Hire a Grant Writer or Use AI? Honest Comparison for Canadian SMBs
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Hiring a professional grant writer is expensive and not always necessary. AI tools can accelerate your grant search and draft generation — but they have real limitations. Here is an honest breakdown of when each approach makes sense for Canadian small and medium-sized businesses.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Does a Professional Grant Writer Actually Cost?</h2>
            <p className="leading-relaxed mb-4">
              Grant writer fees in Canada vary significantly based on the program, the writer's experience, and the fee structure:
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800/50 text-slate-300">
                    <th className="text-left px-4 py-3 font-medium">Fee Model</th>
                    <th className="text-left px-4 py-3 font-medium">Typical Range</th>
                    <th className="text-left px-4 py-3 font-medium">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { model: "Hourly rate", range: "$150–$300/hour", for: "Well-defined, bounded projects where scope is clear" },
                    { model: "Flat fee per application", range: "$2,000–$15,000", for: "Specific programs with known complexity" },
                    { model: "Contingency (% of award)", range: "5–10% of funded amount", for: "Competitive programs; writer takes risk alongside you" },
                    { model: "Retainer (ongoing relationship)", range: "$2,000–$8,000/month", for: "Companies applying to multiple programs continuously" },
                    { model: "SR&ED specialist (contingency)", range: "15–25% of credit received", for: "SR&ED specifically — nearly universal in the industry" },
                  ].map((row, i) => (
                    <tr key={row.model} className={`border-t border-slate-800 ${i % 2 === 0 ? "bg-slate-900/30" : ""}`}>
                      <td className="px-4 py-3 text-white font-medium">{row.model}</td>
                      <td className="px-4 py-3 text-orange-400 font-medium">{row.range}</td>
                      <td className="px-4 py-3 text-slate-400">{row.for}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 text-sm mt-3">
              For context: a $75,000 CanExport application at 10% contingency costs $7,500 in writer fees if successful. An IRAP $300,000 project at 8% costs $24,000. These are real costs that reduce your net grant benefit — but they may still be worthwhile if the alternative is a failed application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Where AI Genuinely Helps</h2>
            <p className="leading-relaxed mb-4">
              AI tools — including GrantMap — have transformed what you can do without a professional writer. Here is where AI performs well:
            </p>
            <div className="space-y-3">
              {[
                { task: "Grant discovery and eligibility screening", ai: "Excellent", desc: "AI can scan hundreds of programs against your business profile in seconds. This used to take weeks of manual research. GrantMap does this for 15+ programs in under 5 minutes." },
                { task: "First draft of application sections", ai: "Good", desc: "AI can generate first drafts of problem statements, solution descriptions, and budget justifications based on your inputs. These drafts need human review and refinement, but cut writing time by 60–80%." },
                { task: "Identifying the strongest programs to pursue", ai: "Excellent", desc: "AI can rank-order programs by match strength and potential value, helping you focus effort on the highest-probability applications." },
                { task: "Explaining complex program rules in plain language", ai: "Very Good", desc: "Grant program guides are bureaucratic and dense. AI can summarise eligibility rules, flag common exclusions, and explain SR&ED, IRAP, and other complex programs clearly." },
                { task: "Budget template generation", ai: "Good", desc: "AI can generate budget line items based on project description — reducing the blank-page problem. You validate numbers." },
              ].map((row) => (
                <div key={row.task} className="glass rounded-xl p-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-white font-semibold text-sm">{row.task}</h3>
                    <span className="text-emerald-400 text-xs font-medium shrink-0">{row.ai}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{row.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Where Human Expertise Is Still Worth Paying For</h2>
            <p className="leading-relaxed mb-4">
              AI has real limitations in the grant writing context. Be honest about where human expertise adds irreplaceable value:
            </p>
            <div className="space-y-3">
              {[
                { task: "SR&ED technical narratives", human: "Essential", desc: "SR&ED technical project descriptions require deep understanding of what qualifies as technological uncertainty. CRA reviewers are scientists who scrutinise technical claims carefully. A specialist with SR&ED-specific experience significantly improves claim acceptance rates and reduces audit risk." },
                { task: "IRAP ITA relationship management", human: "Essential", desc: "IRAP is a relationship-based program. Your ITA is your advocate, and managing that relationship effectively requires human judgment, nuance, and ongoing communication that AI cannot substitute." },
                { task: "Competitive program strategy (AgriInnovate, WEF, etc.)", human: "High value", desc: "For programs with limited budgets and competitive intake, an experienced writer who knows the reviewers' priorities and the program's track record of funded projects can make a material difference." },
                { task: "Appeal and reconsideration", human: "Necessary", desc: "If your application is rejected, appealing or resubmitting requires understanding the specific rejection rationale. A skilled writer who knows the program can often turn a rejection into an approval on resubmission." },
                { task: "Multi-million dollar applications", human: "High value", desc: "Applications for $1M+ (AgriInnovate, SIF, Invest Ontario) involve extensive due diligence, financial modelling, and strategic narrative. The ROI on professional writing support is very high at these values." },
              ].map((row) => (
                <div key={row.task} className="glass rounded-xl p-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-white font-semibold text-sm">{row.task}</h3>
                    <span className="text-orange-400 text-xs font-medium shrink-0">{row.human}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{row.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Recommended Approach for Most Canadian SMBs</h2>
            <div className="space-y-3">
              {[
                { step: "1", title: "Start with AI for discovery (Free to $150)", desc: "Use GrantMap or similar to identify your full set of eligible programs, ranked by potential value. This replaces weeks of manual research." },
                { step: "2", title: "Use AI for first drafts (included in report)", desc: "Get AI-generated draft content for your top-matched programs. Use these as starting points, not finished applications." },
                { step: "3", title: "Self-write for straightforward programs", desc: "CanExport, CDAP, regional grants, and smaller provincial programs are often manageable without professional help if you follow our grant writing guide." },
                { step: "4", title: "Hire a specialist for SR&ED and large grants", desc: "Engage a qualified SR&ED consultant on contingency (cost: nothing unless you receive the credit). For competitive programs over $100K, the ROI on professional writing support is typically positive." },
              ].map((item) => (
                <div key={item.step} className="glass rounded-xl p-6 flex gap-5">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">{item.step}</div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">For Accountants: AI as a Client Service Tool</h2>
            <p className="leading-relaxed mb-4">
              If you are an accountant or business advisor, AI grant tools have a different value proposition entirely. Rather than replacing a grant writer, you become the grant advisor — using AI to:
            </p>
            <ul className="space-y-2">
              {[
                "Run a grant eligibility check for every new client you onboard (takes 5 minutes with GrantMap)",
                "Identify clients who have been missing SR&ED claims for years",
                "Generate a funding roadmap report to present to clients — adding a new service line",
                "Stay current on program changes without manual research",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-400 text-sm mt-4">
              GrantMap's unlimited plan at $50/month is built for exactly this use case. See our <Link href="/for-accountants/" className="text-blue-400 hover:text-blue-300">accountants page</Link> for details.
            </p>
          </section>
        </div>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mt-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Start with AI — It Takes 5 Minutes</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap gives you discovery and draft content in one report. Know what you qualify for before deciding whether to hire a writer.
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
            <Link href="/blog/how-to-write-grant-application/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Grant Writing Guide</div>
              <div className="text-slate-500">DIY templates for each section</div>
            </Link>
            <Link href="/for-accountants/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">For Accountants</div>
              <div className="text-slate-500">Unlimited reports at $50/mo</div>
            </Link>
            <Link href="/blog/common-grant-application-mistakes/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">10 Grant Mistakes</div>
              <div className="text-slate-500">Avoid the most common failures</div>
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
