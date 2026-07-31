import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SR&ED Tax Credit Canada: What It Is and How to Claim It",
  description:
    "Complete guide to the SR&ED (Scientific Research & Experimental Development) tax credit. Learn what qualifies, how much you can claim (35% federal + provincial), the T661 form, and 18-month deadline.",
  alternates: { canonical: "/sred/" },
  openGraph: {
    title: "SR&ED Tax Credit Canada: What It Is and How to Claim It",
    description:
      "The SR&ED tax credit returns up to 35% of eligible R&D costs to Canadian businesses. Learn how to qualify and claim.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does SR&ED stand for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SR&ED stands for Scientific Research and Experimental Development. It is Canada's largest federal tax incentive program, administered by the Canada Revenue Agency (CRA), and returns up to 35% of eligible research and development expenditures to Canadian-controlled private corporations (CCPCs) in the form of a refundable tax credit.",
      },
    },
    {
      "@type": "Question",
      name: "What types of work qualify for SR&ED?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SR&ED-eligible work falls into three categories: (1) Basic research — work to advance scientific knowledge without a specific practical application; (2) Applied research — work to advance scientific knowledge with a specific practical application in view; (3) Experimental development — work to achieve technological advancement for the purpose of creating new or improved materials, devices, products, or processes. Most SME claims fall under experimental development — for example, developing custom software to solve a technological uncertainty, or improving a manufacturing process in a non-obvious way.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I receive from SR&ED?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Canadian-controlled private corporations (CCPCs) with taxable income under $500,000 qualify for a 35% refundable investment tax credit (ITC) on the first $3 million of eligible expenditures per year — so a maximum of $1,050,000 from the federal credit alone. Other corporations receive 15% non-refundable credit. Ontario adds an 8–12% Ontario Innovation Tax Credit on top, bringing the combined rate over 40% for qualifying Ontario CCPCs.",
      },
    },
    {
      "@type": "Question",
      name: "What is the SR&ED deadline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SR&ED claims must be filed within 18 months of the end of the fiscal year in which the eligible work was performed. This is a hard deadline — missing it means permanently forfeiting the credit for that year. For a company with a December 31 year-end, the deadline for the 2024 fiscal year is June 30, 2026.",
      },
    },
    {
      "@type": "Question",
      name: "What form do I use to claim SR&ED?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SR&ED claims are filed using Form T661 (Scientific Research and Experimental Development (SR&ED) Expenditures Claim) attached to the corporate tax return (T2). Schedule T2SCH31 (Investment Tax Credit — Corporations) is used to calculate and apply the ITC. If you are claiming provincial credits (e.g., Ontario Innovation Tax Credit), you also file the relevant provincial schedule.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to hire an SR&ED specialist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You are not legally required to, but most businesses benefit significantly from working with an SR&ED consultant or CPA firm with SR&ED experience. SR&ED specialists typically work on contingency (10–25% of the credit received), meaning you pay only if they recover money for you. They help identify eligible work you may have overlooked, prepare technical narratives that meet CRA's requirements, and handle audits if they arise.",
      },
    },
    {
      "@type": "Question",
      name: "Can software development qualify for SR&ED?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — software development can qualify, but not all software work does. The key test is technological uncertainty: was there a technological problem for which the solution was not readily available or derivable by a qualified practitioner? Routine software development, bug fixes, UI improvements, and standard coding practices do not qualify. Custom algorithm development, novel data processing approaches, and work advancing the state of the art in a specific technical domain often do qualify.",
      },
    },
    {
      "@type": "Question",
      name: "What eligible costs can I claim under SR&ED?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eligible SR&ED expenditures include: salaries and wages of employees directly engaged in SR&ED (100% eligible); contractor costs (80% eligible); materials consumed or transformed in SR&ED (100% eligible); lease costs for equipment used exclusively in SR&ED; and overhead (calculated using the proxy amount — 55% of direct labour). Capital equipment costs for SR&ED were eliminated from the credit base in 2014, but equipment used in SR&ED can still support the overhead calculation.",
      },
    },
  ],
};

export default function SREDPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Nav */}
      <nav className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">G</div>
            <span className="text-lg font-bold">GrantMap<span className="text-blue-400">.ca</span></span>
          </Link>
          <Link href="/app" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors">
            Check SR&amp;ED Eligibility
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">SR&amp;ED Tax Credit</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium mb-4">
            High Value — ~$3B awarded annually across Canada
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            SR&amp;ED Tax Credit Canada: What It Is and How to Claim It
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            The Scientific Research and Experimental Development (SR&amp;ED) program is Canada's single largest business support program, returning over $3 billion per year to businesses that conduct qualifying research and development. This guide explains what qualifies, how much you can recover, and how to file.
          </p>
        </header>

        {/* What is SR&ED */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">What Is the SR&amp;ED Tax Credit?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            SR&amp;ED is a federal tax incentive program administered by the Canada Revenue Agency (CRA). It provides investment tax credits (ITCs) to Canadian businesses that incur eligible expenditures on scientific research and experimental development work performed in Canada.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            For Canadian-controlled private corporations (CCPCs) — which includes most small and medium businesses — the credit is <strong className="text-white">refundable</strong>. That means even if your company has no tax owing, the CRA will write you a cheque for the credit amount. This makes SR&amp;ED particularly valuable for early-stage companies and startups that may not yet be profitable.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            Most provinces also offer a complementary provincial SR&amp;ED tax credit. Ontario's Ontario Innovation Tax Credit (OITC) adds 8–12% on top of the federal credit. See our <Link href="/grants/ontario/" className="text-blue-400 hover:text-blue-300">Ontario Grants Guide</Link> for details.
          </p>

          {/* Rate summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "CCPC Rate", value: "35%", sub: "refundable, on first $3M", color: "blue" },
              { label: "Other Corporations", value: "15%", sub: "non-refundable ITC", color: "slate" },
              { label: "Ontario Top-Up", value: "+8–12%", sub: "Ontario Innovation Tax Credit", color: "emerald" },
            ].map((card) => (
              <div key={card.label} className={`glass rounded-xl p-5 text-center border-t-2 border-${card.color}-500/40`}>
                <div className="text-3xl font-bold text-white mb-1">{card.value}</div>
                <div className="text-sm font-medium text-slate-300 mb-1">{card.label}</div>
                <div className="text-xs text-slate-500">{card.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* What qualifies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">What Work Qualifies for SR&amp;ED?</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            The CRA uses a two-part test: the work must (1) attempt to achieve a <strong className="text-white">technological advancement</strong> and (2) do so through a systematic investigation in which qualified personnel make an attempt to overcome a <strong className="text-white">technological uncertainty</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              {
                title: "Basic Research",
                desc: "Purely scientific work to advance knowledge without a specific practical application in mind. Rare in SME claims.",
                eligible: true,
              },
              {
                title: "Applied Research",
                desc: "Work to advance scientific knowledge with a specific practical application in view. Software and biotech R&D often qualifies here.",
                eligible: true,
              },
              {
                title: "Experimental Development",
                desc: "Improving materials, devices, products, or processes. The most common SME category — includes manufacturing improvements and software development that overcomes technical uncertainty.",
                eligible: true,
              },
            ].map((cat) => (
              <div key={cat.title} className="glass rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-emerald-400 text-sm">✓</span>
                  <h3 className="text-white font-semibold">{cat.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>

          <div className="glass rounded-xl p-5 border-l-4 border-rose-500/40">
            <h3 className="text-white font-semibold mb-2">What Does NOT Qualify</h3>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>• Routine software development, bug fixes, or UI changes</li>
              <li>• Market research, quality control, or routine testing</li>
              <li>• Style changes or cosmetic product modifications</li>
              <li>• Commercial production or delivery of goods/services</li>
              <li>• Social science research (SR&amp;ED is technology-only)</li>
            </ul>
          </div>
        </section>

        {/* Eligible costs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">What Costs Can You Claim?</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800/50 text-slate-300">
                  <th className="text-left px-4 py-3 font-medium">Expenditure Type</th>
                  <th className="text-left px-4 py-3 font-medium">Eligible %</th>
                  <th className="text-left px-4 py-3 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "Employee salaries & wages", pct: "100%", note: "Only the portion of time directly engaged in SR&ED work" },
                  { type: "Contractor costs", pct: "80%", note: "Arm's-length contractors; must be for SR&ED work" },
                  { type: "Materials consumed/transformed", pct: "100%", note: "Materials that become part of the experimental prototype or are destroyed in testing" },
                  { type: "Overhead (proxy method)", pct: "55% of direct labour", note: "Eliminates the need to track individual overhead expenses" },
                  { type: "Third-party payments", pct: "80%", note: "Payments to arm's-length parties for SR&ED performed for you (e.g., university research)" },
                  { type: "Capital equipment", pct: "Not eligible*", note: "*Eliminated from the SR&ED ITC base in 2014; equipment use still supports overhead calculation" },
                ].map((row, i) => (
                  <tr key={row.type} className={`border-t border-slate-800 ${i % 2 === 0 ? "bg-slate-900/30" : ""}`}>
                    <td className="px-4 py-3 text-white">{row.type}</td>
                    <td className="px-4 py-3 text-emerald-400 font-medium">{row.pct}</td>
                    <td className="px-4 py-3 text-slate-400">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How to claim */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">How to File an SR&amp;ED Claim</h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Identify Qualifying Projects",
                desc: "Review your R&D activities against the CRA's eligibility criteria. Document the technological uncertainty, the systematic investigation, and the technological advancement achieved or attempted. Keep contemporaneous records — time logs, project notes, test results.",
              },
              {
                step: "2",
                title: "Calculate Eligible Expenditures",
                desc: "Categorise your R&D costs: salaries, contractor fees, and materials. Determine what portion of each employee's time was spent on qualifying work. Use the 55% proxy amount for overhead rather than tracking actual overhead.",
              },
              {
                step: "3",
                title: "Complete Form T661",
                desc: "Form T661 (SR&ED Expenditures Claim) requires a technical narrative for each project — describing the uncertainty, work performed, and advancement achieved — and a financial breakdown of expenditures. This is the most time-intensive part of the claim.",
              },
              {
                step: "4",
                title: "File with T2 Return",
                desc: "Attach T661 and Schedule T2SCH31 to your corporate tax return (T2). If claiming Ontario credits, also complete Schedule T2SCH566. The claim must be filed within 18 months of your fiscal year-end — there are no extensions.",
              },
              {
                step: "5",
                title: "CRA Review",
                desc: "Most claims are processed within 60–120 days. The CRA may request additional documentation or initiate a technical or financial review. Having clear contemporaneous records is the best protection against an adverse review.",
              },
            ].map((s) => (
              <div key={s.step} className="glass rounded-xl p-6 flex gap-5">
                <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">{s.step}</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 glass rounded-xl p-5 border-l-4 border-amber-500/40">
            <p className="text-sm text-slate-300">
              <strong className="text-amber-400">18-Month Deadline:</strong> SR&amp;ED claims are permanently forfeited if not filed within 18 months of the fiscal year-end. For a December 31, 2024 year-end, the absolute deadline is June 30, 2026.
            </p>
          </div>
        </section>

        {/* Working with specialists */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Working with SR&amp;ED Specialists</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Most successful SR&amp;ED claimants work with a specialist — either a CPA firm with SR&amp;ED expertise or a dedicated SR&amp;ED consulting firm. Here is what you need to know:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Contingency Fee Model",
                desc: "Most SR&ED consultants charge 10–25% of the credit recovered, payable only upon receipt of the refund. There is no upfront cost, which makes it low-risk for businesses new to claiming.",
              },
              {
                title: "What They Do",
                desc: "SR&ED specialists conduct technical interviews with your engineers or developers, write the CRA-compliant technical narrative, calculate eligible expenditures, and prepare T661. Many also handle CRA reviews.",
              },
              {
                title: "When to Start",
                desc: "Ideally, engage a specialist at the beginning of your fiscal year so they can advise on record-keeping throughout the year. Claims prepared with contemporaneous records are stronger and more likely to be accepted at face value.",
              },
              {
                title: "DIY Filing",
                desc: "It is possible to file SR&ED yourself, especially if your claim is straightforward. The CRA offers free pre-claim consultations through its SR&ED Outreach program. However, for claims above $50,000, specialist involvement typically pays for itself.",
              },
            ].map((card) => (
              <div key={card.title} className="glass rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">SR&amp;ED Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="glass rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">{faq.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Let AI Check If Your Business Qualifies for SR&amp;ED</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap's AI asks the right questions about your R&amp;D activities and gives you an instant SR&amp;ED pre-screening — plus checks for IRAP, CDAP, and 12 other programs you may qualify for.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/app" className="px-8 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white font-medium transition-all">
              Free Eligibility Quiz
            </Link>
            <Link href="/#pricing" className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all">
              Full AI Report — $150
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-slate-300 mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <Link href="/blog/sred-tax-credit-calculator/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">SR&amp;ED Calculator</div>
              <div className="text-slate-500">Estimate your refund with examples</div>
            </Link>
            <Link href="/grants/federal/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Federal Grants</div>
              <div className="text-slate-500">Stack SR&ED with IRAP and CDAP</div>
            </Link>
            <Link href="/grants/ontario/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Ontario Tax Credits</div>
              <div className="text-slate-500">Ontario Innovation Tax Credit details</div>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/30 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-6 text-xs text-slate-600 flex justify-between">
          <span>GrantMap Canada — AI Grant Intelligence</span>
          <Link href="/" className="hover:text-slate-400">Home</Link>
        </div>
        {/* Agency credit — house standard (uafest.ca): wording + MMIX logo on a
            light chip, grayscale until hover, so it sits on light and dark footers. */}
        <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "22px 24px 0" }}>
          <a
            href="https://mmix.ua/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 12.5, color: "inherit", opacity: 0.7, textDecoration: "none" }}
          >
            Development & promotion —
            <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,255,255,0.9)", borderRadius: 6, padding: "4px 8px" }}>
              <img src="/mmix-logo.png" alt="MMIX — Marketing Mix" width={62} height={60} style={{ height: 36, width: "auto" }} />
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}
