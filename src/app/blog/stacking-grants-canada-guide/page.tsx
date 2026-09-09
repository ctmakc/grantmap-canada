import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grant Stacking Canada: Combine Multiple Programs 2026",
  description:
    "Grant stacking in Canada: how to combine federal, provincial, and municipal programs legally, stacking rules, a real $275K combined example, and what is prohibited.",
  alternates: { canonical: "/blog/stacking-grants-canada-guide/" },
  openGraph: {
    title: "Grant Stacking in Canada: How to Combine Multiple Programs for Maximum Funding",
    description:
      "Federal + provincial + municipal stacking rules, real example with $275K combined, and what you cannot stack — the complete guide.",
  
    images: [{ url: "/images/blog/cat-strategy-og.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Grant Stacking in Canada: How to Combine Multiple Programs for Maximum Funding",
  description:
    "Federal + provincial + municipal stacking rules, real $275K combined example, and what is prohibited in Canadian grant stacking.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function StackingGrantsPage() {
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
          <span className="text-slate-300">Grant Stacking in Canada</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">Strategy Guide</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 9 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Grant Stacking in Canada: How to Combine Multiple Programs for Maximum Funding
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            "Grant stacking" means receiving funding from multiple government programs for the same business or project. Done correctly, it is legal, encouraged, and can multiply your total funding significantly. Done wrong, it creates clawback risk and compliance headaches. Here is the complete guide.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why Grant Stacking Is Possible — and Encouraged</h2>
            <p className="leading-relaxed mb-4">
              Canada's federal and provincial grant programs are designed to complement each other. The federal government explicitly intends for provincial programs to supplement federal support, not replace it. Regional development agencies (FedDev, WD, ACOA) often encourage companies to apply for provincial programs as well as federal ones.
            </p>
            <p className="leading-relaxed mb-4">
              The result is that a well-researched funding strategy can legitimately combine support from federal programs (IRAP, CanExport, SR&amp;ED), provincial programs (Ontario Innovation Tax Credit, CleanBC), and even municipal economic development funds — all for the same business or project.
            </p>
            <div className="glass rounded-xl p-5 border-l-4 border-emerald-500/40">
              <div className="text-sm text-slate-300">
                <strong className="text-white">Key Rule:</strong> You can stack grants on your business, and often on the same project — but you generally cannot use one grant to pay for costs that are also covered by another government program. The key concept is that each dollar of government money covers a different dollar of eligible cost.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Stacking Rules You Must Know</h2>
            <div className="space-y-4">
              {[
                {
                  rule: "Government assistance reduces SR&ED eligible expenditures",
                  detail: "This is the most important rule. Any government assistance (grants, subsidies, forgivable loans) received for specific expenditures reduces the pool of SR&ED-eligible expenditures for those same costs. If IRAP pays 80% of your $100K R&D salary, only $20K of that salary is SR&ED eligible. This does not mean you should not stack — it means you should sequence correctly.",
                  severity: "Critical",
                },
                {
                  rule: "Most programs require disclosure of other funding",
                  detail: "When you apply to most grant programs, you must disclose all other government funding you are receiving or applying for. Failure to disclose can result in clawback, ineligibility, or legal consequences. Always disclose everything.",
                  severity: "Critical",
                },
                {
                  rule: "Combined government funding typically cannot exceed 100% of eligible costs",
                  detail: "Programs set limits on total government assistance — most cap combined funding at 50–75% of eligible project costs. If you receive grants that combined exceed this cap, the excess is clawed back.",
                  severity: "High",
                },
                {
                  rule: "Some programs prohibit stacking with specific other programs",
                  detail: "A few programs have explicit exclusions. CDAP, for example, cannot be used to reimburse costs that are claimed under SR&ED for the same period. Read each program guide carefully.",
                  severity: "Medium",
                },
              ].map((rule) => (
                <div key={rule.rule} className="glass rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${rule.severity === "Critical" ? "bg-red-500/10 border border-red-500/20 text-red-400" : rule.severity === "High" ? "bg-orange-500/10 border border-orange-500/20 text-orange-400" : "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400"}`}>
                      {rule.severity}
                    </span>
                    <h3 className="text-white font-semibold text-sm">{rule.rule}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{rule.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Real Example: $275,000 Combined Stack</h2>
            <p className="leading-relaxed mb-4">
              Here is a realistic stacking example for an Ontario CCPC with $500,000 in R&amp;D activity and export market development goals:
            </p>
            <div className="space-y-2 mb-4">
              {[
                { program: "SR&ED Federal ITC (35% on $400K eligible*)", amount: "$140,000", note: "Reduced by IRAP received for the same costs" },
                { program: "Ontario OITC (8% on $400K eligible)", amount: "$32,000", note: "Stacks on federal SR&ED on same expenditures" },
                { program: "NRC IRAP (on specific project activities)", amount: "$60,000", note: "80% of $75K in additional R&D costs not in SR&ED pool" },
                { program: "CanExport SMEs (export market development)", amount: "$37,500", note: "75% of $50K in eligible export costs (separate from R&D)" },
                { program: "Ontario Centre of Innovation Voucher", amount: "$15,000", note: "Technology adoption costs (if eligible)" },
                { program: "CDAP Grant (digital planning)", amount: "$15,000", note: "Separate advisor costs — not claimed in SR&ED" },
              ].map((row) => (
                <div key={row.program} className="glass rounded-xl p-4 flex justify-between items-start gap-4">
                  <div>
                    <div className="text-slate-300 text-sm font-medium">{row.program}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{row.note}</div>
                  </div>
                  <div className="text-emerald-400 font-bold shrink-0">{row.amount}</div>
                </div>
              ))}
              <div className="glass rounded-xl p-4 flex justify-between items-center border border-emerald-500/30">
                <div className="text-white font-bold">Total combined support</div>
                <div className="text-emerald-400 font-bold text-xl">$299,500</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              * SR&ED eligible pool reduced from $500K to $400K because IRAP covered the other $100K of costs. Combined stacking does not simply add up rates — the order and allocation of costs across programs must be carefully managed. Work with a qualified SR&amp;ED advisor to optimise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Federal + Provincial + Municipal: Three Layers</h2>
            <div className="space-y-3">
              {[
                {
                  layer: "Federal Layer",
                  programs: ["SR&ED Tax Credit", "NRC IRAP", "CanExport SMEs", "CDAP", "Futurpreneur", "Women Entrepreneurship Fund", "Indigenous business programs"],
                  note: "Available to qualifying businesses across all provinces and territories",
                },
                {
                  layer: "Provincial Layer",
                  programs: ["Ontario Innovation Tax Credit (OITC)", "Alberta Innovation Employment Grant (IEG)", "CleanBC Industry Fund", "BC Hydro incentives", "Quebec Écoperformance"],
                  note: "Available only in the province where the work is performed",
                },
                {
                  layer: "Municipal / Regional Layer",
                  programs: ["City of Vancouver economic development grants", "NDIT (Northern BC)", "Columbia Basin Trust programs", "Local BIA programs", "Regional development authority grants"],
                  note: "Least well-known layer — often least competitive because the applicant pool is smaller",
                },
              ].map((layer) => (
                <div key={layer.layer} className="glass rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-2">{layer.layer}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {layer.programs.map((p) => (
                      <span key={p} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">{p}</span>
                    ))}
                  </div>
                  <div className="text-xs text-slate-500">{layer.note}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What You Cannot Stack</h2>
            <p className="leading-relaxed mb-4">
              These combinations are either prohibited or technically problematic:
            </p>
            <ul className="space-y-2">
              {[
                "Using a grant to cover the same specific costs as SR&ED (reduces SR&ED pool, does not directly prohibit — but must be disclosed and managed carefully)",
                "Receiving combined government funding that exceeds the program's maximum government assistance ratio (typically 50–75% of total project costs)",
                "Claiming the same eligible costs under two grant programs that both prohibit dual-claiming for the same expenditure",
                "Receiving federal and provincial government assistance together that exceeds 100% of eligible project costs",
                "Claiming SR&ED on costs that have been fully reimbursed by a non-repayable grant (zero net cost to the company = zero eligible SR&ED expenditure)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Build Your Stacking Strategy</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Map all programs you qualify for", desc: "Use a tool like GrantMap or a systematic review of federal and provincial programs to identify your full eligibility set. Do not stop at two or three programs." },
                { step: "2", title: "Separate your cost pools", desc: "Divide your project costs into categories: SR&ED-eligible R&D, export development costs, digital adoption costs, training costs, etc. This makes stacking cleaner and avoids accidental double-claiming." },
                { step: "3", title: "Apply for grants before SR&ED", desc: "Claim your grants first so you know which costs are covered. Then prepare your SR&ED claim on the residual (uncovered) costs. This maximises both your grant and your SR&ED eligible pool." },
                { step: "4", title: "Disclose everything, every time", desc: "Every grant application must disclose all other funding received or applied for on the same project or expenditures. Never omit this — the risk of clawback or legal consequence far outweighs any short-term gain." },
              ].map((s) => (
                <div key={s.step} className="glass rounded-xl p-6 flex gap-5">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">{s.step}</div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mt-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Find Your Full Funding Stack with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap identifies your complete set of eligible programs and helps you build a coordinated stacking strategy — in under 5 minutes.
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
              <div className="text-slate-500">The anchor of every stack</div>
            </Link>
            <Link href="/blog/ontario-innovation-tax-credit/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Ontario OITC</div>
              <div className="text-slate-500">Provincial layer for Ontario companies</div>
            </Link>
            <Link href="/blog/alberta-innovation-employment-grant/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Alberta IEG</div>
              <div className="text-slate-500">Provincial layer for Alberta companies</div>
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
