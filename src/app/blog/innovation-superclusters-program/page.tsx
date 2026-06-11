import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Canada's Innovation Superclusters: Funding Guide 2026",
  description:
    "Canada's 5 Innovation Superclusters explained: DMCP, BCSA, NGen, Protein Industries, Scale AI — membership benefits, project grants, and how to access funding.",
  alternates: { canonical: "/blog/innovation-superclusters-program/" },
  openGraph: {
    title: "Canada's Innovation Superclusters: Funding for Tech and Industrial Companies",
    description:
      "How Canada's 5 superclusters work, who can join, project grant sizes, and how to access funding through each cluster.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Canada's Innovation Superclusters: Funding for Tech and Industrial Companies",
  description:
    "5 superclusters (DMCP, BCSA, NGen, Protein Industries, Scale AI), membership benefits, project grants, and how to access funding in 2026.",
  datePublished: "2026-05-15",
  author: { "@type": "Organization", name: "GrantMap Canada" },
  publisher: { "@type": "Organization", name: "GrantMap Canada", url: "https://grantmap.ca" },
};

export default function SuperclustersPage() {
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
          <span className="text-slate-300">Innovation Superclusters</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-medium">Federal Program</span>
            <span className="text-xs text-slate-500">May 15, 2026 · 9 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Canada's Innovation Superclusters: Funding for Tech and Industrial Companies
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Canada's Innovation Superclusters Initiative invested $950 million in five industry-led clusters designed to accelerate technology commercialisation in sectors where Canada has global competitive advantage. Here is what each cluster does, who can participate, and how to access project funding.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Are the Innovation Superclusters?</h2>
            <p className="leading-relaxed mb-4">
              The Innovation Superclusters Initiative (ISI) was a federal program that established five not-for-profit industry-led clusters in Canada's key economic sectors. The federal government matched private sector investment dollar-for-dollar, creating a model where industry sets priorities and government amplifies the investment.
            </p>
            <p className="leading-relaxed mb-4">
              Each supercluster is now an independent organisation. While the original federal co-funding has been substantially deployed, the clusters continue to operate, deliver programming, fund projects, and connect member companies with R&amp;D opportunities, talent, and markets. Membership is the gateway to project funding.
            </p>
            <div className="glass rounded-xl p-5 border-l-4 border-violet-500/40">
              <div className="text-sm text-slate-300">
                <strong className="text-white">Important Note:</strong> The superclusters are independent entities, not government agencies. Project grant availability varies by cluster and depends on active funding rounds. Check each cluster's website for current programs. Many cluster benefits (networking, market intelligence, collaboration) are available even when direct project grants are not open.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The 5 Superclusters Explained</h2>
            <div className="space-y-6">
              {[
                {
                  name: "Digital Technology Supercluster (DMCP / Innovate BC)",
                  abbr: "DMCP",
                  sector: "Digital Technology, AI, Data",
                  region: "BC (national reach)",
                  desc: "Originally focused on BC, DMCP has evolved into a national digital innovation platform operating as Innovate BC. Projects focus on AI, data-driven solutions, and digital health. Companies participate in projects that involve at least two industry partners and typically a research institution.",
                  grants: "Project grants ranging from $100K to several million, co-funded with industry",
                  url: "https://innovatebc.ca",
                  fit: "Software companies, AI startups, data analytics firms, digital health",
                },
                {
                  name: "BC Agri-Food & Seafood Supercluster (BCSA)",
                  abbr: "BCSA",
                  sector: "Agri-Food, Seafood, Aquaculture",
                  region: "BC (Pacific Canada focus)",
                  desc: "Merged with BCSA's activities now primarily channelled through the Protein Industries Supercluster and regional agri-food programs. BC agri-food businesses should check both Protein Industries Canada and BC government agriculture programs.",
                  grants: "Project-based through Protein Industries Canada and BC Agriculture",
                  url: "https://proteinindustriescanada.ca",
                  fit: "Aquaculture, fisheries technology, agri-food processing companies",
                },
                {
                  name: "Next Generation Manufacturing Canada (NGen)",
                  abbr: "NGen",
                  sector: "Advanced Manufacturing",
                  region: "National (Hamilton, ON hub)",
                  desc: "NGen is Canada's advanced manufacturing supercluster. It funds collaborative projects that apply digital technologies — AI, robotics, IoT, additive manufacturing — to manufacturing challenges. Projects involve an industry consortium with at least three members and must deliver measurable productivity or competitiveness gains for Canadian manufacturers.",
                  grants: "Projects from $250K to several million. Industry must contribute at least 50% of project costs.",
                  url: "https://ngen.ca",
                  fit: "Manufacturers, industrial tech companies, robotics, IoT, materials science",
                },
                {
                  name: "Protein Industries Canada",
                  abbr: "PIC",
                  sector: "Plant Proteins, Agri-Food",
                  region: "National (Prairie-focused)",
                  desc: "Protein Industries Canada focuses on developing Canada's plant protein sector — processing, ingredient development, alternative proteins. Projects involve multiple companies working together to create market opportunities for Canadian plant protein ingredients and food products.",
                  grants: "Project grants up to several million for large consortia; smaller projects via member programs",
                  url: "https://proteinindustriescanada.ca",
                  fit: "Food processors, agri-food companies, ingredient technology, pulse crops",
                },
                {
                  name: "Scale AI",
                  abbr: "Scale AI",
                  sector: "AI, Supply Chain, Retail",
                  region: "National (Montreal hub)",
                  desc: "Scale AI focuses on applying artificial intelligence to supply chain management, retail, and logistics. Projects must involve AI application in a real commercial context, with at least two partners. Scale AI has been particularly active in logistics optimisation, demand forecasting, and retail analytics.",
                  grants: "Project funding from $250K to several million; 50%+ industry cost-share",
                  url: "https://www.scaleai.ca",
                  fit: "Logistics companies, retailers, AI developers, supply chain technology",
                },
              ].map((cluster) => (
                <div key={cluster.name} className="glass rounded-xl p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-white font-semibold">{cluster.name}</h3>
                      <div className="flex gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-400">{cluster.sector}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-400">{cluster.region}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{cluster.desc}</p>
                  <div className="text-xs text-slate-500 mb-1">
                    <span className="text-slate-400 font-medium">Grants:</span> {cluster.grants}
                  </div>
                  <div className="text-xs text-slate-500 mb-2">
                    <span className="text-slate-400 font-medium">Best fit:</span> {cluster.fit}
                  </div>
                  <a href={cluster.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-xs">
                    {cluster.url} →
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Access Supercluster Funding</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Identify Your Cluster", desc: "Match your industry and technology to the relevant supercluster. Companies that span sectors (e.g., AI applied to food processing) may fit more than one." },
                { step: "2", title: "Become a Member", desc: "Most superclusters require membership before you can access project funding. Membership is typically low-cost or free for SMEs. Benefits include networking, market intelligence, and first access to funding calls." },
                { step: "3", title: "Watch for Project Calls", desc: "Superclusters issue funding calls (RFPs) for collaborative projects. Monitor their websites and newsletters. Projects are typically industry-led consortia — you will need to recruit partners." },
                { step: "4", title: "Build a Consortium", desc: "Most projects require 2–3 industry partners plus ideally a research institution. Start building relationships with potential partners before a call opens. Rushed consortia score poorly." },
                { step: "5", title: "Submit a Letter of Intent or Full Application", desc: "Most calls have a two-stage process: LOI (Letter of Intent) → Full Application. Invest time in the LOI to get feedback before committing to a full proposal." },
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
            <h2 className="text-2xl font-bold text-white mb-4">Stacking Superclusters with Other Programs</h2>
            <p className="leading-relaxed mb-4">
              Supercluster project grants can be stacked with federal programs. Common combinations:
            </p>
            <ul className="space-y-2">
              {[
                "SR&ED tax credits can be claimed on the same project expenditures (with deduction for government assistance received)",
                "IRAP advisory services complement supercluster project work for qualifying SMEs",
                "Mitacs Accelerate funding can fund a graduate student working on your supercluster project",
                "Provincial R&D programs (like Alberta IEG) can stack on top of supercluster contributions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-violet-400 mt-0.5 shrink-0">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mt-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Find Your Best Grant Programs with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap checks your business against 15+ federal and provincial programs — including identifying your best supercluster fit — in under 5 minutes.
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
            <Link href="/blog/mitacs-funding-research/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Mitacs Funding</div>
              <div className="text-slate-500">Research partnerships for industry</div>
            </Link>
            <Link href="/blog/irap-grant-guide/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">IRAP Guide</div>
              <div className="text-slate-500">Stack with supercluster projects</div>
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
