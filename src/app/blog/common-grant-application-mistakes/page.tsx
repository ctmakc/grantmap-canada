import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10 Grant Application Mistakes That Get Canadian Businesses Rejected",
  description:
    "The 10 most common Canadian grant application mistakes: missing eligibility proof, weak budget justification, no measurable outcomes, late submission, and more.",
  alternates: { canonical: "/blog/common-grant-application-mistakes/" },
  openGraph: {
    title: "10 Grant Application Mistakes That Get Canadian Businesses Rejected",
    description:
      "Avoid these 10 mistakes that cause Canadian grant applications to fail — from missing eligibility proof to late submissions.",
  
    images: [{ url: "/images/blog/cat-guide-og.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "10 Grant Application Mistakes That Get Canadian Businesses Rejected",
  description:
    "Missing eligibility proof, weak budget justification, no measurable outcomes, late submission — the 10 most common reasons Canadian grant applications fail.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function GrantMistakesPage() {
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
          <span className="text-slate-300">Common Grant Application Mistakes</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-medium">Grant Writing</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 9 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            10 Grant Application Mistakes That Get Canadian Businesses Rejected
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Canadian grant programs reject far more applications than they approve. Most rejections are preventable — not because the business was ineligible, but because the application failed to make the case effectively. Here are the 10 most common mistakes and how to avoid them.
          </p>
        </header>

        <div className="space-y-6 text-slate-300">
          {[
            {
              num: "01",
              title: "Applying to a Program You Do Not Qualify For",
              severity: "Fatal",
              desc: "The most common mistake is submitting to a program without meeting all eligibility criteria. Common oversights: applying as a sole proprietor to a corporation-only program, having too many employees for an SME-targeted program, or lacking the minimum revenue threshold.",
              fix: "Before writing a single sentence, document exactly how you meet every eligibility criterion. If any are borderline, call the program officer. A 10-minute phone call saves 20 hours of wasted application writing.",
            },
            {
              num: "02",
              title: "Starting Work Before Approval",
              severity: "Fatal",
              desc: "Many programs explicitly state that costs incurred before the application is approved — or before a signed contribution agreement — are not eligible. Businesses that begin project work before approval are ineligible for reimbursement of those costs.",
              fix: "Apply before starting the funded activities. For programs like IRAP, begin the application 2–3 months before planned project start. Read the program guide for the specific rule on eligible start dates.",
            },
            {
              num: "03",
              title: "Weak Budget Justification",
              severity: "High",
              desc: "Grant reviewers scrutinise budgets carefully. Round numbers, unexplained items, and inflated estimates are red flags. A $50,000 'consulting' line item with no explanation raises more questions than it answers — and often results in a reduced award or rejection.",
              fix: "Justify every line item with specifics: hours × rate, quotes from suppliers, or market-rate benchmarks. Get at least two competitive quotes for major expenses and reference them.",
            },
            {
              num: "04",
              title: "Vague or Unmeasurable Outcomes",
              severity: "High",
              desc: "Phrases like 'significant economic impact' and 'improved competitiveness' are meaningless to a reviewer. Programs want to report on specific, measurable results — jobs created, revenue generated, GHG reduced, products commercialised.",
              fix: "Use SMART outcomes: 'By December 2026, this project will create 8 net new full-time positions in Manitoba and generate $1.2M in new export revenue to US markets.'",
            },
            {
              num: "05",
              title: "Generic Application That Ignores Program Priorities",
              severity: "High",
              desc: "Submitting the same application to five different programs is a losing strategy. Each program has specific priorities — clean tech, Indigenous economic development, youth employment, export growth — and reviewers can tell when an application does not speak to those priorities.",
              fix: "For each application, read the program's stated objectives and mirror their language. If the program prioritises job creation, lead with job creation. If it prioritises export market development, lead with export strategy.",
            },
            {
              num: "06",
              title: "Ignoring the SR&ED Deadline",
              severity: "Fatal",
              desc: "SR&ED has an 18-month filing deadline after your fiscal year-end. It is absolute — there are no extensions and no exceptions. Businesses that discover SR&ED years after performing qualifying work permanently lose the credit for those periods.",
              fix: "Set a calendar reminder for 12 months after your fiscal year-end. Engage a <Link href='/for-accountants/'>qualified SR&ED specialist</Link> before that date. Even if you are unsure about eligibility, a preliminary assessment costs nothing with most contingency-based specialists.",
            },
            {
              num: "07",
              title: "Poor or Missing Documentation",
              severity: "High",
              desc: "Grant programs — especially SR&ED and IRAP — require contemporaneous records: time logs showing who worked on what, lab notebooks, test records, meeting notes. After-the-fact reconstruction is harder to defend in a review and weaker in the original application.",
              fix: "Start documentation at the beginning of your project, not the end. Implement a simple time-tracking system for project employees. Take photos of prototype stages, save test results, and document experiments as you go.",
            },
            {
              num: "08",
              title: "Underestimating the Competitiveness",
              severity: "Medium",
              desc: "Many businesses apply to competitive grant programs (IRAP, CanExport, AgriInnovate) as if they are filling out a form, not competing for a limited pool of funds. A mediocre application to a competitive program will not succeed regardless of business quality.",
              fix: "Treat competitive grants like a pitch competition. Invest in the quality of your narrative. Have someone outside your industry read the application. Consider engaging a professional grant writer for high-value programs.",
            },
            {
              num: "09",
              title: "Missing Attachments and Incomplete Applications",
              severity: "Fatal",
              desc: "An incomplete application — missing financial statements, missing CVs, missing letters of support, or a misformatted budget — may be disqualified without review. Online portals are unforgiving; an error on submission can prevent the file from being accepted.",
              fix: "Create a checklist from the program guide's required documents list. Prepare all attachments before opening the online portal. Submit at least 24 hours before the deadline to allow time to resolve technical issues.",
            },
            {
              num: "10",
              title: "Applying to One Program and Stopping",
              severity: "Medium",
              desc: "Most businesses research one or two programs and stop, assuming they have found everything available. In reality, most Canadian businesses qualify for four to seven programs simultaneously. The opportunity cost of stopping early is significant.",
              fix: "Do a systematic scan of all applicable programs before applying to any of them. Build a funding stack — see our <Link href='/blog/stacking-grants-canada-guide/'>grant stacking guide</Link> — and apply to the full set of programs you qualify for.",
            },
          ].map((mistake) => (
            <div key={mistake.num} className="glass rounded-xl p-6 flex gap-4">
              <div className="shrink-0">
                <div className="text-slate-700 font-bold text-3xl leading-none">{mistake.num}</div>
                <span className={`text-xs font-medium mt-1 block ${mistake.severity === "Fatal" ? "text-red-400" : mistake.severity === "High" ? "text-orange-400" : "text-yellow-400"}`}>
                  {mistake.severity}
                </span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">{mistake.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{mistake.desc}</p>
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-3">
                  <div className="text-xs text-emerald-400 font-medium mb-1">THE FIX</div>
                  <p className="text-slate-300 text-sm">{mistake.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mt-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Let AI Match You Before You Apply</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap checks your eligibility before you spend hours on an application — so you only write for programs you actually qualify for.
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
              <div className="text-slate-500">Templates and tips for each section</div>
            </Link>
            <Link href="/blog/grant-timeline-application-to-funding/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Grant Timelines</div>
              <div className="text-slate-500">How long does approval take?</div>
            </Link>
            <Link href="/blog/stacking-grants-canada-guide/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Grant Stacking</div>
              <div className="text-slate-500">Combine programs for max funding</div>
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
