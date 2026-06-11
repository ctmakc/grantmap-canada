import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clean Technology Grants and Funding Canada: 2026 Directory",
  description:
    "Clean technology grants in Canada 2026: Net Zero Accelerator, SIF clean tech stream, NRCan programs, and provincial green business funding programs.",
  alternates: { canonical: "/blog/clean-technology-grants-canada/" },
  openGraph: {
    title: "Clean Technology Grants and Funding in Canada: 2026 Directory",
    description:
      "Every major federal and provincial clean tech grant in Canada — Net Zero Accelerator, SIF, NRCan, CleanBC, and more.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Clean Technology Grants and Funding in Canada: 2026 Directory",
  description:
    "Net Zero Accelerator, SIF clean tech stream, NRCan programs, provincial green business grants — complete 2026 directory.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function CleanTechGrantsPage() {
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
          <span className="text-slate-300">Clean Technology Grants Canada</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">Clean Tech Guide</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 10 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Clean Technology Grants and Funding in Canada: 2026 Directory
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Canada has committed billions to clean technology — from large-scale industrial decarbonisation programs to small business energy efficiency grants. This directory maps every major federal and provincial clean tech funding program available in 2026.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Federal Clean Tech Programs</h2>
            <div className="space-y-4">
              {[
                {
                  name: "Net Zero Accelerator (NZA)",
                  agency: "ISED / NRCan",
                  amount: "$5M–$400M+",
                  desc: "Canada's largest clean tech industrial program. The NZA funds large-scale decarbonisation projects for Canada's most emissions-intensive sectors — steelmaking, aluminum, chemicals, cement, and aviation. Projects must demonstrate significant GHG reductions and maintain or create Canadian jobs. Not suited for SMEs — minimum projects are typically $100M+ in total investment.",
                  fit: "Large industrial emitters, major manufacturers",
                },
                {
                  name: "Strategic Innovation Fund (SIF) — Net Zero",
                  agency: "ISED",
                  amount: "$10M–$500M",
                  desc: "SIF's Net Zero stream funds innovative projects that advance Canada's transition to net-zero emissions. Investments are strategic and require significant industry co-investment (typically 50%+). Both clean tech developers and industrial adopters can apply. Projects must have strong Canadian content and demonstrate transformative potential.",
                  fit: "Scale-ups, large SMEs, industrial companies with clean tech projects",
                },
                {
                  name: "NRCan Clean Energy Innovation Program",
                  agency: "Natural Resources Canada",
                  amount: "$500K–$20M",
                  desc: "NRCan runs multiple clean energy programs supporting R&D, demonstration, and deployment of clean energy technologies. Programs include the Clean Growth Program (industrial energy efficiency), the Low Carbon Economy Fund (provincial partnerships), and specific sector programs in bioenergy, hydrogen, and geothermal.",
                  fit: "Energy technology companies, mining, oil and gas technology, buildings",
                  url: "https://natural-resources.canada.ca/energy/funding",
                },
                {
                  name: "Sustainable Development Technology Canada (SDTC)",
                  agency: "SDTC (arm's length)",
                  amount: "$250K–$5M",
                  desc: "SDTC funds Canadian companies developing and demonstrating clean technology solutions. Project grants cover pre-commercial and early-commercial stage clean tech. SDTC is particularly important for climate tech startups that are past the R&D stage but need funding to prove their technology at scale.",
                  fit: "Clean tech startups and scale-ups, technology developers",
                  url: "https://www.sdtc.ca",
                },
                {
                  name: "Canada Greener Homes Grant",
                  agency: "NRCan",
                  amount: "Up to $5,000",
                  desc: "For individual homeowners and small landlords — not typically a business grant. However, contractors and energy efficiency businesses benefit indirectly from the consumer demand it creates. Separate programs exist for multi-unit buildings.",
                  fit: "Consumers, landlords; indirect benefit for energy efficiency businesses",
                },
              ].map((prog) => (
                <div key={prog.name} className="glass rounded-xl p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-white font-semibold">{prog.name}</h3>
                      <span className="text-xs text-slate-500">{prog.agency}</span>
                    </div>
                    <span className="text-emerald-400 font-semibold text-sm shrink-0">{prog.amount}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-2">{prog.desc}</p>
                  <div className="text-xs text-slate-500">
                    <span className="text-slate-400 font-medium">Best fit:</span> {prog.fit}
                  </div>
                  {prog.url && (
                    <a href={prog.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-xs mt-1 block">{prog.url}</a>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Provincial Clean Tech Programs</h2>
            <div className="space-y-3">
              {[
                { province: "BC", program: "CleanBC Industry Fund", desc: "Grants for industrial GHG reduction projects. Evaluated on $/tonne CO2e reduced. Strong for manufacturing and industrial facilities.", url: "https://gov.bc.ca/cleanbc" },
                { province: "Alberta", program: "ERA (Emissions Reduction Alberta)", desc: "Competitive grants for GHG reduction technologies. Projects from $1M+ targeting Alberta's oil and gas, agriculture, and industrial sectors.", url: "https://eralberta.ca" },
                { province: "Ontario", program: "Ontario Electricity Support Program + IESO Conservation", desc: "Energy efficiency incentives for small businesses through the IESO. Includes saveONenergy programs for lighting, HVAC, and industrial processes.", url: "https://ieso.ca" },
                { province: "Quebec", program: "Écoperformance (Transition énergétique Québec)", desc: "Grants for energy efficiency projects in Québec businesses — up to 25% of project costs for fuel switching and efficiency upgrades.", url: "https://transitionenergetique.gouv.qc.ca" },
                { province: "Saskatchewan", program: "SaskPower Clean Energy Programs", desc: "Incentives for commercial and industrial customers to reduce energy consumption and adopt renewable sources.", url: "https://saskpower.com" },
                { province: "Nova Scotia", program: "Efficiency Nova Scotia Business Programs", desc: "Energy efficiency rebates and incentives for Nova Scotia businesses — lighting, HVAC, refrigeration, and process improvements.", url: "https://efficiencyns.ca" },
              ].map((prog) => (
                <div key={prog.province + prog.program} className="glass rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium shrink-0">{prog.province}</div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">{prog.program}</div>
                      <div className="text-slate-400 text-sm mb-1">{prog.desc}</div>
                      <a href={prog.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-xs">{prog.url}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">SR&ED for Clean Tech Companies</h2>
            <p className="leading-relaxed mb-4">
              Clean technology companies conducting R&amp;D are among the best candidates for the <Link href="/sred/" className="text-blue-400 hover:text-blue-300">SR&amp;ED tax credit</Link>. Key categories of qualifying clean tech R&amp;D:
            </p>
            <ul className="space-y-2">
              {[
                "Developing new energy storage chemistries or battery management systems",
                "Creating novel carbon capture or sequestration processes",
                "Designing new electrolysis or hydrogen production methods",
                "Optimising renewable energy generation (novel wind blade designs, solar efficiency improvements)",
                "Developing biofuels or sustainable aviation fuel production processes",
                "Creating software for energy optimisation, grid management, or emissions monitoring",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-emerald-400 mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Stack Clean Tech Funding</h2>
            <p className="leading-relaxed mb-4">
              Clean tech companies can often stack multiple programs on the same technology development project:
            </p>
            <div className="glass rounded-xl p-5 border border-emerald-500/20">
              <div className="text-sm font-semibold text-white mb-3">Example: Clean Tech Startup Developing Novel Battery Technology</div>
              <div className="space-y-2">
                {[
                  { layer: "SR&ED Tax Credit", amount: "Up to 35% on R&D wages", note: "Base layer — applies to all qualifying R&D" },
                  { layer: "NRC IRAP", amount: "Up to $500K", note: "Fund the R&D project itself (reduce after SR&ED adjustment)" },
                  { layer: "SDTC Grant", amount: "$250K–$5M", note: "Fund demonstration and scale-up once technology is proven" },
                  { layer: "Supercluster Project", amount: "Varies", note: "If battery tech applies to manufacturing or supply chain" },
                  { layer: "Provincial Clean Tech Program", amount: "Varies by province", note: "Stack on top of all federal programs" },
                ].map((row) => (
                  <div key={row.layer} className="flex items-start gap-3">
                    <span className="text-emerald-400 text-xs mt-1 shrink-0">+</span>
                    <div>
                      <span className="text-white text-xs font-medium">{row.layer}</span>
                      <span className="text-emerald-400 text-xs ml-2">{row.amount}</span>
                      <div className="text-slate-500 text-xs">{row.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mt-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Find Your Clean Tech Grants with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap matches your clean technology business against federal and provincial programs — in under 5 minutes.
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
              <div className="text-slate-500">R&D tax credit for clean tech</div>
            </Link>
            <Link href="/blog/agri-innovate-program/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">AgriInnovate</div>
              <div className="text-slate-500">Agri-food and biotech grants</div>
            </Link>
            <Link href="/grants/federal/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Federal Grants</div>
              <div className="text-slate-500">Full 2026 program list</div>
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
