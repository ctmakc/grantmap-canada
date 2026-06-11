import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mitacs Funding: Research Partnerships at Canadian Universities",
  description:
    "Mitacs Accelerate and Elevate programs explained: how to get paid research partnerships at Canadian universities, industry partner contributions, and funding amounts.",
  alternates: { canonical: "/blog/mitacs-funding-research/" },
  openGraph: {
    title: "Mitacs Funding: How to Get Paid Research Partnerships at Canadian Universities",
    description:
      "Mitacs Accelerate internships, Elevate fellowships, industry partner contribution amounts, and how to access university research for your business.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mitacs Funding: How to Get Paid Research Partnerships at Canadian Universities",
  description:
    "Mitacs Accelerate (internships), Mitacs Elevate, industry partner contributions, and amounts — complete guide for Canadian businesses.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function MitacsPage() {
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
          <span className="text-slate-300">Mitacs Funding</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-medium">Research Program</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 8 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Mitacs Funding: How to Get Paid Research Partnerships at Canadian Universities
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Mitacs is a federal not-for-profit that funds research partnerships between Canadian companies and universities. Through its Accelerate and Elevate programs, Canadian businesses can access graduate-level research talent — with Mitacs subsidising a significant portion of the cost. Here is everything you need to know.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Is Mitacs?</h2>
            <p className="leading-relaxed mb-4">
              Mitacs is a national research organisation funded by the federal government, provincial governments, and university partners. Its mission is to connect industry with academic researchers, enabling companies to access cutting-edge expertise they could not otherwise afford, while giving graduate students and postdoctoral fellows valuable industry experience.
            </p>
            <p className="leading-relaxed mb-4">
              The key value proposition for businesses: you get a highly qualified researcher working on your problem, with Mitacs subsidising 50%+ of the cost. The researcher brings university resources (labs, equipment, supervisors) along with them. This is particularly powerful for technology companies conducting R&amp;D that aligns with academic expertise.
            </p>
            <div className="glass rounded-xl p-5 border-l-4 border-violet-500/40">
              <div className="text-sm text-slate-300">
                <strong className="text-white">Quick Fact:</strong> Mitacs has facilitated over 75,000 internships across Canada since its founding. It operates in all provinces and has relationships with every major Canadian university and many colleges.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Mitacs Accelerate: Industry Internships</h2>
            <p className="leading-relaxed mb-4">
              Mitacs Accelerate is the primary program for industry partnerships. Here is how the funding works:
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-800 mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800/50 text-slate-300">
                    <th className="text-left px-4 py-3 font-medium">Component</th>
                    <th className="text-left px-4 py-3 font-medium">Amount</th>
                    <th className="text-left px-4 py-3 font-medium">From</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { comp: "Intern stipend (minimum)", amount: "$7,500 per 4-month unit", from: "Company + Mitacs combined" },
                    { comp: "Company contribution (standard)", amount: "$7,500 per unit", from: "Your business" },
                    { comp: "Mitacs contribution", amount: "$7,500 per unit", from: "Mitacs (federal/provincial)", highlight: true },
                    { comp: "Total stipend to intern", amount: "$15,000 per 4-month unit", from: "Combined" },
                    { comp: "Minimum engagement", amount: "1 unit (4 months)", from: "" },
                    { comp: "Maximum per intern", amount: "No hard cap (typically 2–3 years)", from: "" },
                  ].map((row, i) => (
                    <tr key={row.comp} className={`border-t border-slate-800 ${row.highlight ? "bg-emerald-900/10" : i % 2 === 0 ? "bg-slate-900/30" : ""}`}>
                      <td className="px-4 py-3 text-white font-medium">{row.comp}</td>
                      <td className={`px-4 py-3 font-medium ${row.highlight ? "text-emerald-400" : "text-slate-300"}`}>{row.amount}</td>
                      <td className="px-4 py-3 text-slate-400">{row.from}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 text-sm">
              Cluster discounts are available: companies that engage multiple interns simultaneously or sequentially can reduce their cost contribution. Check mitacs.ca for current cluster pricing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Mitacs Elevate: Postdoctoral Fellowships</h2>
            <p className="leading-relaxed mb-4">
              Mitacs Elevate supports postdoctoral fellows working in an industry context. It is designed for businesses that need senior research expertise — someone with a PhD who can lead a complex technical project independently.
            </p>
            <div className="space-y-3">
              {[
                { label: "Duration", value: "12–24 months" },
                { label: "Stipend", value: "$60,000–$70,000 per year (including benefits)" },
                { label: "Company contribution", value: "$30,000/year (shared with Mitacs)" },
                { label: "Mitacs contribution", value: "$30,000–$40,000/year" },
                { label: "Fellow qualifications", value: "Recently completed PhD (within 5 years)" },
                { label: "Professional development", value: "Mandatory management and leadership training" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between glass rounded-xl p-4">
                  <span className="text-slate-400 text-sm">{item.label}</span>
                  <span className="text-white font-medium text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Projects Qualify?</h2>
            <p className="leading-relaxed mb-4">
              Mitacs projects must involve genuine research — not routine development or production work. The research must have a qualified academic supervisor at a Canadian university or college. Qualifying project types:
            </p>
            <ul className="space-y-2">
              {[
                "Applied R&D where a graduate student's expertise addresses a specific technical challenge your business faces",
                "Data science and machine learning projects using novel methodologies",
                "Biomedical and life sciences research with a commercial application",
                "Environmental and clean technology research",
                "Social sciences and policy research with an industry application (some programs)",
                "Engineering design and simulation problems with a technical uncertainty component",
                "AI model development or optimisation with research-level novelty",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-violet-400 mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Apply: Step by Step</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Identify Your Research Need", desc: "Define the specific technical challenge you want to address. The more concrete and research-oriented, the stronger the proposal. 'Improve our website' is not a Mitacs project. 'Develop a novel machine learning model for predictive maintenance of industrial equipment' is." },
                { step: "2", title: "Find an Academic Partner", desc: "Contact professors at nearby universities whose research aligns with your problem. Faculty members list their research interests on university websites. Ask to discuss your challenge. Many professors are actively looking for industry partnerships — it benefits their students and their own research." },
                { step: "3", title: "Develop the Project Proposal Together", desc: "You and the professor jointly develop the Mitacs project proposal. Mitacs provides templates. The proposal outlines the research questions, methodology, intern qualifications, timeline, and expected outcomes." },
                { step: "4", title: "Submit the Application", desc: "Submit through the Mitacs online portal (mitacs.ca). Applications are reviewed on a rolling basis for Accelerate — there is no formal intake window for most streams. Review typically takes 4–8 weeks." },
                { step: "5", title: "Intern Selection and Start", desc: "Once approved, the professor recruits and selects a graduate student for the internship. The intern typically splits time between the university lab and your office. The academic supervisor remains involved throughout." },
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

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Mitacs + SR&ED: The Powerful Combination</h2>
            <p className="leading-relaxed mb-4">
              Mitacs internships and SR&amp;ED can be stacked — but the interaction requires careful management:
            </p>
            <div className="glass rounded-xl p-5 border border-violet-500/20">
              <ul className="space-y-2 text-sm">
                {[
                  "The Mitacs subsidy (the $7,500 Mitacs contributes per unit) reduces your SR&ED eligible expenditures for the same costs",
                  "Your company contribution ($7,500 per unit) remains SR&ED eligible if the intern's work qualifies as SR&ED activity",
                  "The intern's university-based work (supervised by the professor) may not be directly SR&ED eligible — it depends on where the work is performed and who employs the intern",
                  "Work with your SR&ED specialist at the start of the Mitacs engagement to document the project correctly from day one",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-400">
                    <span className="text-violet-400 mt-0.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              For more on combining programs, see our <Link href="/blog/stacking-grants-canada-guide/" className="text-blue-400 hover:text-blue-300">grant stacking guide</Link>.
            </p>
          </section>
        </div>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mt-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Find All Your R&D Funding with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap identifies Mitacs, SR&amp;ED, IRAP, and other research funding programs your business qualifies for — in under 5 minutes.
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
              <div className="text-slate-500">Stack SR&ED on Mitacs projects</div>
            </Link>
            <Link href="/blog/irap-grant-guide/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">IRAP Guide</div>
              <div className="text-slate-500">Complement Mitacs with IRAP</div>
            </Link>
            <Link href="/blog/innovation-superclusters-program/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Superclusters</div>
              <div className="text-slate-500">Industry consortium research funding</div>
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
