import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Write a Winning Canadian Grant Application",
  description:
    "Template and tips for writing a winning Canadian grant application: executive summary, problem statement, budget justification, evaluation criteria, and common failures.",
  alternates: { canonical: "/blog/how-to-write-grant-application/" },
  openGraph: {
    title: "How to Write a Winning Canadian Grant Application (Template + Tips)",
    description:
      "A practical guide to writing strong Canadian grant applications — with templates for each section and the most common mistakes to avoid.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write a Winning Canadian Grant Application (Template + Tips)",
  description:
    "Executive summary, problem statement, solution, budget justification, evaluation criteria, and common failures in Canadian grant applications.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function GrantWritingPage() {
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
          <span className="text-slate-300">How to Write a Grant Application</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">Grant Writing</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 10 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            How to Write a Winning Canadian Grant Application (Template + Tips)
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            A well-structured grant application tells a compelling story, proves eligibility, and gives reviewers exactly what they need to say yes. This guide walks you through every section of a Canadian grant application with templates and the most common mistakes that result in rejection.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Before You Write: Do the Groundwork</h2>
            <p className="leading-relaxed mb-4">
              Strong applications begin before a single word is written. Before drafting, complete these three steps:
            </p>
            <div className="space-y-3">
              {[
                { title: "Read the entire program guide", desc: "Every program has a guide, call for proposals, or eligibility guide. Read it entirely — especially the evaluation criteria. Your application should map directly to those criteria." },
                { title: "Confirm your eligibility in writing", desc: "Document exactly how you meet each eligibility requirement before writing. If any are borderline, call the program officer before investing days in an application." },
                { title: "Know your reviewers", desc: "Government reviewers are often generalists, not subject-matter experts. Write for an intelligent reader who does not know your industry. Avoid jargon. Define every acronym." },
              ].map((item) => (
                <div key={item.title} className="glass rounded-xl p-5">
                  <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                  <div className="text-slate-400 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Six Core Sections of a Canadian Grant Application</h2>

            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "Executive Summary",
                  template: "In [X words], describe [your business], the [specific project], the [problem it solves], the [expected outcomes], and the [funding requested]. Make this the best paragraph in your application.",
                  tips: [
                    "Write this last, not first — after you know exactly what you are saying",
                    "Every sentence must earn its place. Eliminate adjectives that do not add information",
                    "Lead with what you will achieve, not who you are",
                    "Reviewers may read only this section before scoring. Make it count",
                  ],
                },
                {
                  num: "02",
                  title: "Problem Statement / Market Need",
                  template: "The Canadian [sector] market faces [specific problem]. This results in [quantified impact]. Current solutions [fail because...]. A better solution would [description], which would create [economic/social benefit].",
                  tips: [
                    "Quantify everything. 'Large market' means nothing. '$2.4B Canadian market with 12% annual growth' is compelling",
                    "Cite credible sources: Statistics Canada, industry reports, peer-reviewed research",
                    "Connect the problem to government priorities — climate change, competitiveness, jobs",
                    "Show you understand the problem deeply enough to solve it",
                  ],
                },
                {
                  num: "03",
                  title: "Proposed Solution / Project Description",
                  template: "Our solution, [name], addresses [problem] by [mechanism]. The project involves [specific activities] over [timeline]. At completion, [specific outcomes]. We have validated this approach through [evidence].",
                  tips: [
                    "Be specific about activities. 'Research and development' is not a project description",
                    "Include a milestone table — activities, dates, deliverables, person-responsible",
                    "Address technical risk. How will you handle challenges? Reviewers distrust applications that show no risk awareness",
                    "For SR&ED or IRAP: articulate the technological uncertainty explicitly",
                  ],
                },
                {
                  num: "04",
                  title: "Expected Outcomes and Impact",
                  template: "By [date], this project will result in: [outcome 1 with metric], [outcome 2 with metric], [outcome 3 with metric]. These outcomes will generate [Canadian economic benefit]. We will measure success through [KPIs].",
                  tips: [
                    "Use SMART outcomes: Specific, Measurable, Achievable, Relevant, Time-bound",
                    "Map outcomes to the program's stated objectives — use the program's language",
                    "Include both direct outcomes (jobs created, revenue, GHG reduction) and longer-term impact",
                    "Be honest. Unrealistic projections damage credibility",
                  ],
                },
                {
                  num: "05",
                  title: "Budget Justification",
                  template: "The total project budget is $[amount], of which $[requested] is requested from [program]. Costs include: [item: $amount — rationale], [item: $amount — rationale]...",
                  tips: [
                    "Every line item needs a rationale. 'Consulting: $30,000' is not enough. '$30,000 for 150 hours of specialised environmental engineering to design the pilot plant' is better",
                    "Show you got competitive quotes for major expenses. Reference market rates",
                    "If any costs seem high, explain why before the reviewer flags it",
                    "Government reviewers scrutinise budgets carefully. Round numbers like '$50,000' invite questions",
                  ],
                },
                {
                  num: "06",
                  title: "Organisational Capacity",
                  template: "[Company name] has the capacity to execute this project. We have [relevant experience], [team qualifications], [infrastructure], and [financial stability]. We have previously [relevant accomplishment].",
                  tips: [
                    "Link team member CVs to specific project activities — show who does what",
                    "Include previous government-funded projects you have successfully completed",
                    "If your team lacks a skill, identify your strategy (hire, partner, contract) and show credibility of that approach",
                    "Financial statements demonstrate you can manage and account for grant funds",
                  ],
                },
              ].map((section) => (
                <div key={section.num} className="glass rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-slate-700 font-bold text-2xl">{section.num}</div>
                    <h3 className="text-white font-semibold text-lg">{section.title}</h3>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4 mb-4 border border-slate-800">
                    <div className="text-xs text-slate-500 mb-1 font-medium">TEMPLATE</div>
                    <div className="text-slate-300 text-sm italic">{section.template}</div>
                  </div>
                  <div className="space-y-1.5">
                    {section.tips.map((tip) => (
                      <div key={tip} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-blue-400 mt-0.5 shrink-0">•</span>
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Understanding the Evaluation Rubric</h2>
            <p className="leading-relaxed mb-4">
              Most Canadian grant programs score applications using a rubric. Common criteria and what reviewers actually look for:
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800/50 text-slate-300">
                    <th className="text-left px-4 py-3 font-medium">Criterion</th>
                    <th className="text-left px-4 py-3 font-medium">What "Excellent" Looks Like</th>
                    <th className="text-left px-4 py-3 font-medium">What "Poor" Looks Like</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { crit: "Project merit", good: "Clear innovation, evidence base, prior validation, technical credibility", poor: "Vague description, no evidence, obvious solution" },
                    { crit: "Economic impact", good: "Quantified jobs, revenue, export potential, sector benefit", poor: "Generic statements like 'significant economic benefit'" },
                    { crit: "Feasibility", good: "Detailed plan, qualified team, realistic timeline, risk mitigation", poor: "Optimistic timeline, missing skills, no contingencies" },
                    { crit: "Budget quality", good: "Line-item detail, market-rate quotes, justified costs", poor: "Round numbers, unexplained items, inflated estimates" },
                    { crit: "Alignment with program goals", good: "Language echoes the program guide, priorities are addressed", poor: "Generic application that ignores program priorities" },
                  ].map((row, i) => (
                    <tr key={row.crit} className={`border-t border-slate-800 ${i % 2 === 0 ? "bg-slate-900/30" : ""}`}>
                      <td className="px-4 py-3 text-white font-medium">{row.crit}</td>
                      <td className="px-4 py-3 text-emerald-400 text-xs">{row.good}</td>
                      <td className="px-4 py-3 text-red-400 text-xs">{row.poor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Final Checklist Before Submission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Every eligibility requirement addressed explicitly",
                "Evaluation criteria covered in the application (not just assumed)",
                "All numbers are consistent across sections",
                "Budget adds up correctly — line items match the total",
                "All required attachments included (financials, CVs, letters of support)",
                "No active CRA debts (check before applying)",
                "Submission deadline confirmed and met",
                "Application reviewed by someone outside your organisation",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 glass rounded-lg p-3 text-sm">
                  <span className="text-emerald-400 shrink-0">☐</span>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mt-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Let AI Draft Your Grant Content</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap's full report includes draft application text for your top-matched programs — ready to refine and submit.
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
            <Link href="/blog/common-grant-application-mistakes/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">10 Grant Mistakes</div>
              <div className="text-slate-500">Avoid the most common rejections</div>
            </Link>
            <Link href="/blog/grant-timeline-application-to-funding/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Grant Timelines</div>
              <div className="text-slate-500">How long does approval take?</div>
            </Link>
            <Link href="/blog/hire-grant-writer-vs-ai/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Grant Writer vs AI</div>
              <div className="text-slate-500">Which is right for your business?</div>
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
