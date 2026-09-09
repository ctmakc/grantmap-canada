import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Complete Guide to Canadian Business Grants in 2026",
  description:
    "The definitive guide to Canadian business grants in 2026. Covers all major federal and provincial categories, application strategy, common mistakes, and how to maximise your funding.",
  alternates: { canonical: "/blog/canadian-business-grants-2026/" },
  openGraph: {
    title: "Complete Guide to Canadian Business Grants in 2026",
    description:
      "Federal vs provincial grants, application tips, stacking strategies, and the most common mistakes that cost Canadian businesses funding.",
  
    images: [{ url: "/images/blog/cat-guide-og.png", width: 1200, height: 630 }],
  },
};

export default function CanadianGrantsGuidePage() {
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
          <span className="text-slate-300">Canadian Business Grants 2026</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">Guide</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 12 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Complete Guide to Canadian Business Grants in 2026
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Canada's government offers billions of dollars in business support each year — but most small businesses claim only a fraction of what they qualify for. This guide explains every major category of Canadian business grant, how federal and provincial programs interact, and the most common mistakes that leave money on the table.
          </p>
        </header>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-8">

          {/* ToC */}
          <div className="glass rounded-xl p-5 not-prose">
            <div className="text-sm font-semibold text-slate-300 mb-3">Table of Contents</div>
            <ol className="space-y-1 text-sm text-blue-400">
              {[
                ["Why Grant Research Is Hard", "#why-hard"],
                ["The Four Categories of Canadian Business Funding", "#categories"],
                ["Federal vs Provincial: How They Interact", "#federal-provincial"],
                ["The Highest-Value Programs in 2026", "#top-programs"],
                ["Grant Application Strategy", "#strategy"],
                ["The Five Most Common Mistakes", "#mistakes"],
                ["Using AI to Find Your Grants", "#ai-matching"],
              ].map(([title, href]) => (
                <li key={href}><a href={href} className="hover:text-blue-300">{title}</a></li>
              ))}
            </ol>
          </div>

          <section id="why-hard">
            <h2 className="text-2xl font-bold text-white">Why Grant Research Is Hard</h2>
            <p>
              Canada has over 1,500 federal and provincial business support programs. Most small business owners encounter this landscape and immediately feel overwhelmed — with good reason. Programs are administered by different agencies (CRA, ISED, NRC, BDC, EDC), have different eligibility rules, change from year to year, and are documented in inconsistent ways.
            </p>
            <p>
              The result is a paradox: Canada is one of the most generous countries in the world for small business support, yet most small businesses claim almost none of it. A 2023 study found that fewer than 15% of eligible businesses filed for the SR&amp;ED tax credit — Canada's largest single program, worth over $3 billion annually.
            </p>
            <p>
              This guide aims to give you a practical framework — what categories exist, how they interact, and how to identify the programs most likely to apply to your specific business.
            </p>
          </section>

          <section id="categories">
            <h2 className="text-2xl font-bold text-white">The Four Categories of Canadian Business Funding</h2>
            <p>
              It helps to think of Canadian business funding in four categories:
            </p>

            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {[
                {
                  title: "1. Tax Credits and Incentives",
                  desc: "Money returned through your tax return. The SR&ED Investment Tax Credit is the most important example — up to 35% refundable credit on eligible R&D spending. These do not require an application before the work is done; you claim after the fiscal year.",
                  examples: ["SR&ED (Federal)", "Ontario Innovation Tax Credit", "Manitoba Interactive Digital Media Tax Credit"],
                },
                {
                  title: "2. Non-Repayable Grants",
                  desc: "Direct government payments that do not need to be repaid. These typically have competitive intake periods, eligibility criteria, and require a formal application. The bar is higher, but they are pure grants.",
                  examples: ["NRC IRAP", "CanExport", "WES Ecosystem Fund"],
                },
                {
                  title: "3. Subsidies and Cost-Sharing",
                  desc: "Government pays a portion of eligible costs — often 50% up to a cap. Wage subsidies (Canada Job Grant), digital adoption grants (CDAP), and training programs fall here.",
                  examples: ["Canada Job Grant", "CDAP", "Starter Company Plus"],
                },
                {
                  title: "4. Loans and Equity",
                  desc: "Repayable support at favourable rates, or government equity participation. BDC (Business Development Bank), the Ontario Co-investment Fund, and regional development agencies offer these.",
                  examples: ["Ontario Co-investment Fund", "BDC Growth & Transition Capital", "FCC"],
                },
              ].map((cat) => (
                <div key={cat.title} className="glass rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-2 text-sm">{cat.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-3">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">{ex}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p>
              Most businesses focus only on Category 2 (grants) and miss the substantially larger opportunity in Category 1 (tax credits). SR&amp;ED alone is worth more than all other Canadian SME grants combined.
            </p>
          </section>

          <section id="federal-provincial">
            <h2 className="text-2xl font-bold text-white">Federal vs Provincial: How They Interact</h2>
            <p>
              Federal and provincial programs are almost always stackable — you can receive both simultaneously on the same project or business. This is by design: federal programs are intended to be supplemented by provincial support, not to replace it.
            </p>
            <p>
              The most powerful stacking opportunity in Canada is <strong className="text-white">SR&amp;ED + Ontario Innovation Tax Credit</strong>. A qualifying Ontario CCPC can receive up to 35% federally + 12% provincially on the same R&amp;D expenditures — a combined effective rate over 44%.
            </p>
            <p>
              Similarly, a business can receive IRAP advisory support and a grant, while also claiming SR&amp;ED on the same project (with some expenditure limitations). And CDAP is specifically designed to complement provincial digital adoption programs.
            </p>
            <p>
              The key restriction: you generally cannot use government funding to pay for eligible expenditures in other government programs. If you receive a grant that covers specific costs, those costs cannot be re-claimed under SR&amp;ED. Always clarify this with your accountant.
            </p>
          </section>

          <section id="top-programs">
            <h2 className="text-2xl font-bold text-white">The Highest-Value Programs in 2026</h2>
            <p>
              Ranked by typical dollar value for an eligible SME:
            </p>
            <div className="not-prose space-y-3 my-6">
              {[
                {
                  rank: 1,
                  name: "SR&ED Tax Credit",
                  value: "$35,000–$1,050,000",
                  why: "35% refundable on up to $3M eligible R&D. Enormous range — even companies with modest R&D activity can claim $35–100K.",
                  link: "/sred/",
                },
                {
                  rank: 2,
                  name: "NRC IRAP",
                  value: "Up to $500,000",
                  why: "Covers up to 80% of eligible project costs for technology innovation. Advisory services add further value.",
                  link: "/blog/irap-grant-guide/",
                },
                {
                  rank: 3,
                  name: "CDAP",
                  value: "Up to $15,000 grant + $100,000 loan",
                  why: "Accessible to most small businesses. Grant covers digital advisory; loan (via BDC) covers implementation.",
                  link: "/blog/cdap-digital-adoption-program/",
                },
                {
                  rank: 4,
                  name: "CanExport SMEs",
                  value: "$3,000–$75,000",
                  why: "Non-repayable. Covers 50% of market development costs for export activities.",
                  link: "/grants/federal/",
                },
                {
                  rank: 5,
                  name: "Ontario Innovation Tax Credit",
                  value: "8–12% on R&D expenditures",
                  why: "Stacks on top of SR&ED. For an Ontario company with $500K in eligible R&D, this adds $40–60K.",
                  link: "/grants/ontario/",
                },
              ].map((p) => (
                <div key={p.rank} className="glass rounded-xl p-5 flex gap-4">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs">
                    {p.rank}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <Link href={p.link} className="text-white font-semibold hover:text-blue-300 transition-colors">{p.name}</Link>
                      <span className="text-emerald-400 text-sm font-medium shrink-0">{p.value}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{p.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="strategy">
            <h2 className="text-2xl font-bold text-white">Grant Application Strategy</h2>

            <h3 className="text-lg font-semibold text-white mt-4">Start with Tax Credits</h3>
            <p>
              Tax credits (SR&amp;ED, provincial R&amp;D credits) are the highest-value and lowest-competition category. There is no annual intake period; you claim on your tax return. If your business has any qualifying R&amp;D activity, this should be your first focus. Engage a specialist early in the fiscal year — <em>before</em> the work is done — so your documentation is strong from the start.
            </p>

            <h3 className="text-lg font-semibold text-white mt-4">Apply to Rolling Programs Year-Round</h3>
            <p>
              Programs like CanExport accept applications year-round. Do not wait for an annual intake window. Apply when you have a qualifying activity (e.g., attending an international trade show, entering a new export market).
            </p>

            <h3 className="text-lg font-semibold text-white mt-4">Track Intake Periods for Competitive Programs</h3>
            <p>
              Programs like IRAP and provincial co-investment funds have limited budgets. Subscribe to their newsletters and set calendar reminders for known intake windows. First-come, first-served programs reward preparedness.
            </p>

            <h3 className="text-lg font-semibold text-white mt-4">Stack Programs Deliberately</h3>
            <p>
              Build a "funding stack" for each project: identify all the programs that could apply, check their stacking rules, and submit applications in the right order (usually grants before tax credits, so the grant does not reduce your SR&amp;ED eligible expenditures unnecessarily).
            </p>
          </section>

          <section id="mistakes">
            <h2 className="text-2xl font-bold text-white">The Five Most Common Mistakes</h2>
            <div className="not-prose space-y-4 my-6">
              {[
                {
                  num: "01",
                  title: "Missing the SR&ED Deadline",
                  desc: "The 18-month deadline after your fiscal year-end is absolute. Missing it means permanently forfeiting that year's credit. Many businesses discover SR&ED years after conducting qualifying work — and it is too late to claim.",
                },
                {
                  num: "02",
                  title: "Assuming You Don't Qualify",
                  desc: "The most common reason businesses do not claim is the assumption that their work is too routine or too small. SR&ED eligibility is broader than most people think — especially for software and manufacturing companies. Always get a professional assessment.",
                },
                {
                  num: "03",
                  title: "Poor Documentation",
                  desc: "The CRA requires contemporaneous records — time logs, test results, meeting notes — proving that eligible work was performed. After-the-fact reconstruction is harder to defend in a review. Start good records now.",
                },
                {
                  num: "04",
                  title: "Applying to Only One Program",
                  desc: "Most businesses research one or two programs and stop. A systematic check reveals that many businesses qualify for four or five programs simultaneously — often worth dramatically more in aggregate.",
                },
                {
                  num: "05",
                  title: "Not Working with Specialists",
                  desc: "SR&ED and IRAP in particular benefit enormously from specialist experience. The contingency model (pay only on success) makes specialist engagement very low-risk. The cost of not using a specialist is typically much higher.",
                },
              ].map((m) => (
                <div key={m.num} className="glass rounded-xl p-5 flex gap-4">
                  <div className="text-slate-700 font-bold text-2xl shrink-0">{m.num}</div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{m.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="ai-matching">
            <h2 className="text-2xl font-bold text-white">Using AI to Find Your Grants</h2>
            <p>
              Historically, the only way to get a thorough grant assessment was to hire an expensive consultant or spend days reading government websites. AI has changed this.
            </p>
            <p>
              GrantMap's AI pipeline runs your business profile against all 15+ programs in its database — checking eligibility criteria, scoring match strength, and generating draft application text for your top three matches. The process takes under 5 minutes and costs $150 as a one-time report.
            </p>
            <p>
              For accountants and advisors serving multiple clients, the unlimited plan ($50/mo) means you can run a thorough grant check for every client you onboard — adding a new revenue stream and a genuinely valuable service.
            </p>
          </section>
        </div>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mt-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Find Your Canadian Grants with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Stop researching manually. GrantMap checks your business against 15+ programs and delivers a ranked report in under 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/app" className="px-8 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white font-medium transition-all">
              Free Eligibility Quiz
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
            <Link href="/sred/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">SR&amp;ED Guide</div>
              <div className="text-slate-500">Canada's largest tax credit in detail</div>
            </Link>
            <Link href="/grants/federal/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Federal Grants</div>
              <div className="text-slate-500">Full 2026 program list</div>
            </Link>
            <Link href="/blog/irap-grant-guide/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">IRAP Guide</div>
              <div className="text-slate-500">NRC's innovation grant in depth</div>
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
