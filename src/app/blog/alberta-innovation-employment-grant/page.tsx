import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alberta Innovation Employment Grant 2026 Guide",
  description:
    "Complete guide to Alberta's Innovation Employment Grant (IEG): 20% payroll tax credit for tech workers, eligible R&D activities, how to claim, and 2026 amounts.",
  alternates: { canonical: "/blog/alberta-innovation-employment-grant/" },
  openGraph: {
    title: "Alberta Innovation Employment Grant (IEG): Complete 2026 Guide",
    description:
      "Everything Alberta tech companies need to know about the IEG: 20% payroll credit on qualifying employees, eligible activities, and how to claim.",
  
    images: [{ url: "/images/blog/cat-provincial-og.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Alberta Innovation Employment Grant (IEG): Complete 2026 Guide",
  description:
    "Complete guide to Alberta's Innovation Employment Grant: 20% payroll tax credit for tech workers, eligible research activities, how to claim, and 2026 amounts.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function AlbertaIEGPage() {
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
          <span className="text-slate-300">Alberta IEG Grant</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-medium">Provincial Grant</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 8 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Alberta Innovation Employment Grant (IEG): Complete 2026 Guide
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            The Alberta Innovation Employment Grant (IEG) is a 20% refundable tax credit on qualifying expenditures for small and medium-sized businesses conducting research and development in Alberta. Here is everything you need to know to maximise your claim.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Is the Alberta IEG?</h2>
            <p className="leading-relaxed mb-4">
              The Innovation Employment Grant is a provincial tax credit introduced by the Government of Alberta to encourage research and development activity within the province. It operates alongside the federal <Link href="/sred/" className="text-blue-400 hover:text-blue-300">SR&amp;ED tax credit</Link>, creating a powerful combined incentive for Alberta-based companies conducting qualifying R&amp;D.
            </p>
            <p className="leading-relaxed mb-4">
              The IEG is administered by Alberta Treasury Board and Finance and is claimed on your Alberta corporate tax return (AT1). Unlike a grant application, there is no intake period or competitive process — you simply perform qualifying work during your fiscal year and claim on your return.
            </p>
            <div className="glass rounded-xl p-5 border-l-4 border-orange-500/40">
              <div className="text-sm text-slate-300">
                <strong className="text-white">Key Fact:</strong> The IEG rate is 20% for companies with qualifying expenditures up to $4 million per year, and 10% on amounts above that threshold. Most SMEs fall under the full 20% rate.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Who Qualifies for the IEG?</h2>
            <p className="leading-relaxed mb-4">
              The IEG is available to corporations — sole proprietors and partnerships do not qualify. The core eligibility requirements are:
            </p>
            <div className="space-y-3">
              {[
                { criterion: "Corporation with a permanent establishment in Alberta", detail: "You must carry on business in Alberta through a fixed place of business. Federally incorporated companies with Alberta offices qualify." },
                { criterion: "Qualifying SR&ED expenditures in Alberta", detail: "IEG is built on the SR&ED definition of eligible work. If you already claim SR&ED federally, most of the same expenditures will qualify for IEG." },
                { criterion: "Expenditures performed in Alberta", detail: "Only costs incurred for R&D work performed within Alberta qualify. Subcontractor costs must relate to work performed in the province." },
                { criterion: "Current-year expenditures", detail: "The IEG is claimed on current-year qualifying expenditures. There is no carry-back provision, but unused credits can be carried forward." },
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
            <h2 className="text-2xl font-bold text-white mb-4">Eligible Expenditures</h2>
            <p className="leading-relaxed mb-4">
              Qualifying expenditures for the IEG mirror the SR&amp;ED definition closely. The main categories are:
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800/50 text-slate-300">
                    <th className="text-left px-4 py-3 font-medium">Expenditure Type</th>
                    <th className="text-left px-4 py-3 font-medium">IEG Rate</th>
                    <th className="text-left px-4 py-3 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Salaries and wages of R&D employees", rate: "20%", notes: "Full salary for time spent on qualifying activities. Requires timesheets." },
                    { type: "Overhead (proxy method)", rate: "20%", notes: "65% of eligible labour costs can be claimed as overhead using the proxy method." },
                    { type: "Materials consumed or transformed", rate: "20%", notes: "Materials used directly in qualifying experiments or prototypes." },
                    { type: "Subcontractor costs (Alberta-performed)", rate: "20%", notes: "80% of eligible subcontractor invoices qualify — same as SR&ED federal rule." },
                    { type: "Third-party payments (arm's length)", rate: "20%", notes: "Payments to universities, research organisations, or other third parties." },
                  ].map((row, i) => (
                    <tr key={row.type} className={`border-t border-slate-800 ${i % 2 === 0 ? "bg-slate-900/30" : ""}`}>
                      <td className="px-4 py-3 text-white font-medium">{row.type}</td>
                      <td className="px-4 py-3 text-emerald-400 font-medium">{row.rate}</td>
                      <td className="px-4 py-3 text-slate-400">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Eligible Research Activities</h2>
            <p className="leading-relaxed mb-4">
              The IEG uses the same three-part SR&amp;ED definition of qualifying work: basic research, applied research, and experimental development. For most Alberta technology companies, experimental development is the most relevant category:
            </p>
            <ul className="space-y-2">
              {[
                "Developing new software that involves resolving a genuine technological uncertainty (not routine coding or debugging)",
                "Creating new industrial processes, products, or materials",
                "Adapting existing technology to solve a problem where the solution was not obvious to skilled practitioners",
                "Conducting trials and experiments to evaluate whether a technical approach will work",
                "Developing machine learning models where the architecture or training methodology involves genuine uncertainty",
                "Designing and testing novel hardware or electronic systems",
                "Energy technology R&D — particularly relevant to Alberta's oil and gas technology sector",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-orange-400 mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Claim the IEG</h2>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Prepare Your SR&ED Documentation",
                  desc: "Because IEG eligibility closely mirrors SR&ED, the same contemporaneous records — project descriptions, time logs, technical narratives, experiment results — support both claims. Prepare your SR&ED documentation package as part of your normal year-end process.",
                },
                {
                  step: "2",
                  title: "File Your Federal T661 Form",
                  desc: "File your SR&ED claim with the CRA using Form T661 and Schedule T2SCH31. While not strictly required before claiming IEG, having your federal claim prepared makes the provincial claim straightforward and ensures consistency.",
                },
                {
                  step: "3",
                  title: "Complete Alberta Schedule AT1 Schedule 29",
                  desc: "Claim the IEG on your Alberta AT1 corporate income tax return using Schedule 29. Enter your qualifying expenditures, apply the 20% rate (or 10% above the $4M threshold), and calculate your refundable credit.",
                },
                {
                  step: "4",
                  title: "Receive the Refundable Credit",
                  desc: "The IEG is fully refundable — meaning if the credit exceeds your Alberta tax payable, you receive a cash refund. This is particularly valuable for early-stage companies with low or no Alberta tax liability.",
                },
              ].map((s) => (
                <div key={s.step} className="glass rounded-xl p-6 flex gap-5">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-sm">{s.step}</div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">IEG + SR&ED Stacking Example</h2>
            <p className="leading-relaxed mb-4">
              The real power of the IEG is in stacking it with the federal SR&amp;ED credit. Here is a worked example for an Alberta CCPC with $500,000 in qualifying R&amp;D wages:
            </p>
            <div className="space-y-3">
              {[
                { label: "Qualifying R&D wages (Alberta employees)", amount: "$500,000" },
                { label: "Federal SR&ED refundable ITC (35% for eligible CCPC)", amount: "$175,000" },
                { label: "Alberta IEG (20% — not reduced by federal claim)", amount: "$100,000" },
                { label: "Total combined credit", amount: "$275,000", highlight: true },
                { label: "Effective return on R&D spend", amount: "55%", highlight: true },
              ].map((row) => (
                <div key={row.label} className={`glass rounded-xl p-4 flex justify-between items-center ${row.highlight ? "border border-emerald-500/30" : ""}`}>
                  <span className={`text-sm ${row.highlight ? "text-white font-semibold" : "text-slate-300"}`}>{row.label}</span>
                  <span className={`font-bold ${row.highlight ? "text-emerald-400 text-lg" : "text-emerald-400"}`}>{row.amount}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-sm mt-4">
              Note: The IEG is calculated on the same eligible expenditures as SR&amp;ED, but government assistance received (including IEG) reduces the SR&amp;ED expenditure pool. Work with a specialist to optimise the order of claims.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Key Deadlines and Filing Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "File within 18 months of fiscal year-end",
                  desc: "Like SR&ED, the IEG has a filing deadline. Ensure your AT1 return with Schedule 29 is filed within 18 months of your fiscal year-end to preserve your entitlement.",
                },
                {
                  title: "Maintain contemporaneous records",
                  desc: "Alberta Treasury Board and Finance may review IEG claims. Time records, project descriptions, and technical documentation should be maintained throughout the year, not reconstructed at year-end.",
                },
                {
                  title: "Use a qualified SR&ED specialist",
                  desc: "Most qualified SR&ED consultants in Alberta handle IEG claims simultaneously. Their fee structure is typically contingency-based, so there is no upfront cost.",
                },
                {
                  title: "Consider the carry-forward",
                  desc: "IEG credits that exceed your Alberta tax payable are refundable — you receive a cheque. Any non-refundable portion can be carried forward. Confirm your refundable status with your tax advisor.",
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
          <h2 className="text-2xl font-bold text-white mb-4">Find All Your Alberta Grants with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap checks your business against IEG, SR&amp;ED, federal programs, and more — delivering a complete funding roadmap in under 5 minutes.
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
              <div className="text-slate-500">Stack SR&ED on your IEG claim</div>
            </Link>
            <Link href="/blog/stacking-grants-canada-guide/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Grant Stacking Guide</div>
              <div className="text-slate-500">Combine programs for maximum value</div>
            </Link>
            <Link href="/grants/federal/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Federal Grants</div>
              <div className="text-slate-500">Complete 2026 program list</div>
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
