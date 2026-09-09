import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Innovation Tax Credit (OITC): 2026 Guide",
  description:
    "Ontario Innovation Tax Credit (OITC) explained: 8% on eligible R&D, stackable with SR&ED, eligible costs, filing timeline, and how CRA vs MoF administration works.",
  alternates: { canonical: "/blog/ontario-innovation-tax-credit/" },
  openGraph: {
    title: "Ontario Innovation Tax Credit (OITC): What IT Companies Need to Know",
    description:
      "OITC gives Ontario companies an 8% credit on eligible R&D stacked on top of federal SR&ED. Here is how to claim it correctly.",
  
    images: [{ url: "/images/blog/cat-sredtax-og.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Innovation Tax Credit (OITC): What IT Companies Need to Know",
  description:
    "8% on eligible R&D expenditures, stackable with SR&ED, eligible costs, filing timeline, and CRA vs Ministry of Finance administration.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function OITCPage() {
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
          <span className="text-slate-300">Ontario Innovation Tax Credit</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 font-medium">Tax Credit</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 7 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Ontario Innovation Tax Credit (OITC): What IT Companies Need to Know
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            The Ontario Innovation Tax Credit (OITC) adds an 8% provincial credit on top of the federal SR&amp;ED Investment Tax Credit for qualifying R&amp;D performed in Ontario. For eligible Ontario corporations, stacking OITC with SR&amp;ED creates one of the most generous R&amp;D incentive packages available in North America.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Is the OITC?</h2>
            <p className="leading-relaxed mb-4">
              The Ontario Innovation Tax Credit is a refundable provincial tax credit available to Canadian-controlled private corporations (CCPCs) with a permanent establishment in Ontario that perform qualifying scientific research and experimental development (SR&amp;ED) activities.
            </p>
            <p className="leading-relaxed mb-4">
              The OITC is administered by the Canada Revenue Agency (CRA) on behalf of the Ontario Ministry of Finance. You claim it on your federal corporate tax return (T2) using Schedule T2SCH508, alongside your federal SR&amp;ED claim. This single-return administration makes the process straightforward for businesses already claiming SR&amp;ED.
            </p>
            <div className="glass rounded-xl p-5 border-l-4 border-fuchsia-500/40">
              <div className="text-sm text-slate-300">
                <strong className="text-white">Key Rates:</strong> The OITC provides an 8% refundable credit on the first $3 million of qualifying expenditures per year. Eligible Ontario CCPCs can also qualify for the Ontario Research and Development Tax Credit (ORDTC) at 3.5% for expenditures above the OITC threshold — see your accountant for details on which applies.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">OITC Eligibility Requirements</h2>
            <div className="space-y-3">
              {[
                { criterion: "Canadian-Controlled Private Corporation (CCPC)", detail: "The OITC at 8% is available only to CCPCs. Public corporations and non-Canadian-controlled corporations may still claim the ORDTC at 3.5%, but not the OITC." },
                { criterion: "Permanent establishment in Ontario", detail: "You must carry on business in Ontario through a fixed place of business — an office, factory, or other establishment. Remote work arrangements may qualify depending on facts." },
                { criterion: "Qualifying SR&ED expenditures in Ontario", detail: "OITC-eligible expenditures are the same as those qualifying for the federal SR&ED ITC, adjusted to reflect only Ontario activity." },
                { criterion: "Taxable income below the threshold", detail: "The enhanced 8% rate applies to expenditures up to $3M. Companies above certain income thresholds may face a phased-out rate. Confirm with your tax advisor." },
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
            <h2 className="text-2xl font-bold text-white mb-4">Eligible Expenditures for OITC</h2>
            <p className="leading-relaxed mb-4">
              OITC-eligible expenditures mirror the federal SR&amp;ED pool — but only for work performed in Ontario. The main categories are:
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800/50 text-slate-300">
                    <th className="text-left px-4 py-3 font-medium">Cost Type</th>
                    <th className="text-left px-4 py-3 font-medium">OITC Rate</th>
                    <th className="text-left px-4 py-3 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Salaries and wages (Ontario employees)", rate: "8%", notes: "Time spent on qualifying SR&ED activities by employees physically working in Ontario." },
                    { type: "Overhead (proxy method, 65%)", rate: "8%", notes: "65% proxy on eligible Ontario labour — same method as federal SR&ED." },
                    { type: "Materials consumed in Ontario R&D", rate: "8%", notes: "Materials used directly in qualifying experiments or prototype development in Ontario." },
                    { type: "Ontario subcontractor costs (80%)", rate: "8%", notes: "80% of payments to Ontario arm's-length subcontractors for qualifying work." },
                    { type: "Third-party payments to Ontario institutions", rate: "8%", notes: "Payments to Ontario universities, hospitals, or research centres for SR&ED." },
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
            <h2 className="text-2xl font-bold text-white mb-4">OITC + SR&ED Stacking: The Combined Rate</h2>
            <p className="leading-relaxed mb-4">
              The most powerful aspect of the OITC is that it stacks with federal SR&amp;ED. Here is what an eligible Ontario CCPC can receive on qualifying R&amp;D:
            </p>
            <div className="space-y-3">
              {[
                { label: "Federal SR&ED ITC (CCPC, on first $3M)", amount: "35%", note: "Refundable for CCPCs below the expenditure limit" },
                { label: "Ontario OITC (on first $3M)", amount: "8%", note: "Refundable — applies to same expenditure pool" },
                { label: "Combined effective rate", amount: "Up to 43%", highlight: true, note: "Before accounting for government assistance reductions" },
              ].map((row) => (
                <div key={row.label} className={`glass rounded-xl p-4 ${row.highlight ? "border border-emerald-500/30" : ""}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-sm ${row.highlight ? "text-white font-semibold" : "text-slate-300"}`}>{row.label}</span>
                    <span className={`font-bold ${row.highlight ? "text-emerald-400 text-lg" : "text-emerald-400"}`}>{row.amount}</span>
                  </div>
                  <div className="text-slate-500 text-xs">{row.note}</div>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-sm mt-4">
              Important: The OITC is considered government assistance and reduces your federal SR&amp;ED expenditure pool dollar-for-dollar. In practice, the combined effective rate is slightly below a simple addition of the two rates. A qualified <Link href="/for-accountants/" className="text-blue-400 hover:text-blue-300">SR&amp;ED specialist</Link> will optimise both claims simultaneously.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Filing Timeline and Process</h2>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Prepare SR&ED Documentation Throughout the Year",
                  desc: "OITC uses the same evidence base as SR&ED: project descriptions, technical narratives, time logs, experiment records. Maintain contemporaneous records from the start of your fiscal year.",
                },
                {
                  step: "2",
                  title: "Prepare T661 and Schedule T2SCH31 (Federal SR&ED)",
                  desc: "Your qualified SR&ED preparer completes the T661 (project descriptions and expenditure claim) and T2SCH31 (investment tax credit calculation) as part of your T2 corporate return.",
                },
                {
                  step: "3",
                  title: "Complete Schedule T2SCH508 (OITC)",
                  desc: "Schedule 508 is the OITC calculation schedule filed as part of your T2 return. It references your Ontario-attributed SR&ED expenditures and calculates the 8% provincial credit.",
                },
                {
                  step: "4",
                  title: "File Within 18 Months",
                  desc: "The OITC claim must be filed within 18 months of the end of the taxation year in which the eligible expenditures were incurred. This deadline is the same as for SR&ED — missing it means permanently forfeiting the credit for that year.",
                },
                {
                  step: "5",
                  title: "Receive Refundable Credit",
                  desc: "The CRA processes both federal and Ontario credits together. Refundable credits flow through your T2 assessment. Ontario credits typically arrive with your federal assessment, though timelines can vary.",
                },
              ].map((s) => (
                <div key={s.step} className="glass rounded-xl p-6 flex gap-5">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-fuchsia-600 flex items-center justify-center text-white font-bold text-sm">{s.step}</div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">CRA vs Ontario Ministry of Finance: Who Administers What?</h2>
            <p className="leading-relaxed mb-4">
              A common source of confusion is understanding who handles what. Ontario harmonised its corporate tax administration with the CRA in 2009. As a result:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  org: "CRA (Canada Revenue Agency)",
                  handles: ["Processing your T2 return including all Ontario schedules", "Assessing and paying your OITC refund", "Conducting OITC audits and reviews", "Issuing Notices of Assessment for both federal and Ontario amounts"],
                },
                {
                  org: "Ontario Ministry of Finance",
                  handles: ["Setting OITC policy and rates", "Administering Ontario-specific corporate tax rules not covered by harmonisation", "Handling objections and appeals for Ontario-specific matters", "Publishing guidance on Ontario-specific credits"],
                },
              ].map((item) => (
                <div key={item.org} className="glass rounded-xl p-5">
                  <h3 className="text-white font-semibold text-sm mb-3">{item.org}</h3>
                  <ul className="space-y-1">
                    {item.handles.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-fuchsia-400 mt-0.5 shrink-0">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mt-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Check Your Ontario R&D Credits with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap checks your Ontario business against OITC, SR&amp;ED, IRAP, and more — in under 5 minutes.
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
              <div className="text-slate-500">Federal credit that stacks with OITC</div>
            </Link>
            <Link href="/grants/ontario/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Ontario Grants</div>
              <div className="text-slate-500">All Ontario programs in 2026</div>
            </Link>
            <Link href="/blog/ontario-centre-of-innovation/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">OCI Programs</div>
              <div className="text-slate-500">Ontario tech vouchers up to $25K</div>
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
