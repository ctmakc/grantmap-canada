import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BC Small Business Grants and Funding Programs 2026",
  description:
    "Complete guide to BC small business grants in 2026: InBC, BCTECH, CleanBC, BC Hydro programs, regional grants from NDIT and RDNO, and application tips.",
  alternates: { canonical: "/blog/bc-small-business-grants-2026/" },
  openGraph: {
    title: "BC Small Business Grants and Funding Programs in 2026",
    description:
      "All major BC business grants in one place: InBC, BCTECH, CleanBC, regional programs, and how to stack them with federal funding.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "BC Small Business Grants and Funding Programs in 2026",
  description:
    "Complete guide to BC small business grants in 2026: InBC, BCTECH, CleanBC, BC Hydro programs, and regional grants from NDIT and RDNO.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function BcGrantsPage() {
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
          <span className="text-slate-300">BC Small Business Grants 2026</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">Provincial Guide</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 10 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            BC Small Business Grants and Funding Programs in 2026
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            British Columbia offers one of Canada's richest provincial funding landscapes for small businesses — from tech-focused venture funds to regional development grants covering rural communities. This guide maps every major BC program and how to stack them with federal support.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Overview: BC's Funding Ecosystem</h2>
            <p className="leading-relaxed mb-4">
              BC small businesses can access funding from four distinct levels: the provincial government (through multiple ministries and Crown corporations), regional economic development organisations, sector-specific bodies like BCTECH, and federal programs. The most valuable strategies combine provincial and federal sources — often yielding combined support that would be impossible from either stream alone.
            </p>
            <p className="leading-relaxed mb-4">
              British Columbia's tech-forward economy means many programs are designed with software, cleantech, and life sciences companies in mind, but manufacturing, food processing, and export-oriented businesses have strong options too. See also our <Link href="/grants/federal/" className="text-blue-400 hover:text-blue-300">federal grants guide</Link> for programs available to all Canadian businesses regardless of province.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Major BC Provincial Programs</h2>
            <div className="space-y-4">
              {[
                {
                  name: "InBC Investment Corp",
                  type: "Equity / Patient Capital",
                  amount: "$500K–$20M",
                  desc: "A $500M BC government-backed investment fund targeting BC-based companies in technology, life sciences, and clean economy. InBC takes equity positions rather than providing grants, but government-backed capital is frequently more patient and founder-friendly than private VC. Applications are reviewed on a rolling basis.",
                  url: "https://inbcinvestment.ca",
                  tag: "Equity",
                  tagColor: "blue",
                },
                {
                  name: "BCTECH Scale-Up Program",
                  type: "Grant / Advisory",
                  amount: "Up to $100,000",
                  desc: "Delivered through the BC Tech Association, this program supports BC technology companies with funding for market development, talent attraction, and business growth. Intake windows vary — subscribe to BCTECH's newsletter for announcements.",
                  url: "https://wearebctech.com",
                  tag: "Tech",
                  tagColor: "violet",
                },
                {
                  name: "CleanBC Industry Fund",
                  type: "Grant",
                  amount: "Varies — up to millions for large projects",
                  desc: "Part of BC's CleanBC plan, this fund supports industrial businesses in reducing greenhouse gas emissions through capital equipment upgrades, process improvements, and fuel switching. The fund uses a cost-per-tonne metric — the better your emissions reduction per dollar, the stronger your application.",
                  url: "https://gov.bc.ca/cleanbc",
                  tag: "Clean Tech",
                  tagColor: "emerald",
                },
                {
                  name: "BC Hydro's Energy Manager Program",
                  type: "Grant / Incentive",
                  amount: "Up to $50,000",
                  desc: "BC Hydro offers incentives for small and medium businesses that undertake energy efficiency projects — lighting upgrades, HVAC improvements, industrial process optimisation. Incentives are calculated based on kWh saved. Application is through the BC Hydro online portal.",
                  url: "https://bchydro.com/business/programs",
                  tag: "Energy",
                  tagColor: "yellow",
                },
                {
                  name: "Forestry Innovation Investment (FII)",
                  type: "Grant",
                  amount: "Project-based",
                  desc: "For BC companies developing, manufacturing, or marketing innovative forest products and technologies. FII supports market development, technical research, and commercialisation activities in the forestry sector.",
                  url: "https://bcfii.ca",
                  tag: "Forestry",
                  tagColor: "green",
                },
              ].map((prog) => (
                <div key={prog.name} className="glass rounded-xl p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{prog.name}</h3>
                      <span className="text-xs text-slate-500">{prog.type}</span>
                    </div>
                    <span className="text-emerald-400 font-semibold text-sm shrink-0">{prog.amount}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{prog.desc}</p>
                  <a href={prog.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-xs">
                    Official site →
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Regional Development Grants in BC</h2>
            <p className="leading-relaxed mb-4">
              BC has several regional economic development bodies that administer grants for businesses in their catchment areas. These programs are often less competitive than provincial programs because they serve a smaller pool of applicants:
            </p>
            <div className="space-y-3">
              {[
                {
                  org: "Northern Development Initiative Trust (NDIT)",
                  region: "Northern BC",
                  programs: "Business Facade Improvement, Economic Diversification Grant (up to $500K for large projects), Small Business Accelerator",
                  url: "https://northerndevelopment.bc.ca",
                },
                {
                  org: "Regional District of North Okanagan (RDNO) & Okanagan Regional Library",
                  region: "Okanagan",
                  programs: "Economic development grants for agri-business, tourism, and technology companies in the region",
                  url: "https://rdno.ca",
                },
                {
                  org: "Columbia Basin Trust",
                  region: "Columbia Basin",
                  programs: "Business development grants, social enterprise support, clean energy programs for the Columbia Basin region",
                  url: "https://ourtrust.org",
                },
                {
                  org: "Island Coastal Economic Trust (ICET)",
                  region: "Vancouver Island & Coastal BC",
                  programs: "Economic diversification projects, tourism, marine industry, and technology grants",
                  url: "https://icet.ca",
                },
                {
                  org: "Southern Interior Development Initiative Trust (SIDIT)",
                  region: "Southern Interior",
                  programs: "Economic development grants for businesses in the Southern Interior region",
                  url: "https://sidit.ca",
                },
              ].map((org) => (
                <div key={org.org} className="glass rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                    <div>
                      <div className="text-white font-semibold text-sm mb-0.5">{org.org}</div>
                      <div className="text-orange-400 text-xs mb-1">Region: {org.region}</div>
                      <div className="text-slate-400 text-sm mb-1">{org.programs}</div>
                      <a href={org.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-xs">{org.url}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Federal Programs for BC Businesses</h2>
            <p className="leading-relaxed mb-4">
              BC businesses can access the full suite of federal programs — often stacked on top of provincial support. The most valuable for BC companies include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "SR&ED Tax Credit", desc: "Up to 35% on qualifying R&D — stackable with BC programs. No provincial R&D credit in BC, but federal SR&ED applies in full.", link: "/sred/" },
                { name: "NRC IRAP", desc: "Up to $500K for tech innovation projects. BC has several ITA offices in Vancouver, Victoria, and Kelowna.", link: "/blog/irap-grant-guide/" },
                { name: "CanExport SMEs", desc: "Up to $75K for market development costs in new export markets. Strong fit for BC's export-heavy tech and agri-food sectors.", link: "/blog/canexport-program-exporters/" },
                { name: "Futurpreneur Canada", desc: "Up to $60K for young entrepreneurs aged 18–39. Includes mandatory mentorship — relevant for BC's startup ecosystem.", link: "/blog/futurpreneur-canada-guide/" },
              ].map((prog) => (
                <Link key={prog.name} href={prog.link} className="glass rounded-xl p-5 hover:border-blue-500/30 transition-colors">
                  <div className="text-blue-400 font-medium mb-1 text-sm">{prog.name}</div>
                  <div className="text-slate-400 text-xs leading-relaxed">{prog.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Application Tips for BC Grants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Connect with Small Business BC first",
                  desc: "Small Business BC (smallbusinessbc.ca) offers free consultations and maintains an up-to-date funding database. Their advisors can point you to active programs and intake windows.",
                },
                {
                  title: "Check Futurpreneur if you're under 40",
                  desc: "BC has one of Canada's most active Futurpreneur cohorts. The mentorship component is particularly strong in Vancouver, Victoria, and Kelowna.",
                },
                {
                  title: "Watch for City of Vancouver programs",
                  desc: "The City of Vancouver runs occasional grant programs for small businesses in priority neighbourhoods and sectors. Check the City's Economic Development Office.",
                },
                {
                  title: "Stack regional + provincial + federal",
                  desc: "Many BC businesses leave money on the table by applying to only one level. A well-structured application strategy combines all three. See our stacking guide for details.",
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
          <h2 className="text-2xl font-bold text-white mb-4">Find Your BC Grants with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap checks your BC business against provincial and federal programs simultaneously — delivering a ranked funding roadmap in under 5 minutes.
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
              <div className="text-slate-500">Largest federal R&D credit</div>
            </Link>
            <Link href="/blog/stacking-grants-canada-guide/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Grant Stacking</div>
              <div className="text-slate-500">Combine BC + federal funding</div>
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
