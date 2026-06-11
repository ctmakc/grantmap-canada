import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Federal Grants for Small Business Canada — 2026 Guide",
  description:
    "Complete 2026 guide to Canadian federal grants for small businesses. Covers IRAP, CDAP, CanExport, SR&ED tax credits, Canada Job Grant, and ISED programs.",
  alternates: { canonical: "/grants/federal/" },
  openGraph: {
    title: "Federal Grants for Canadian Small Businesses — Complete 2026 Guide",
    description:
      "Every major Canadian federal grant program explained: eligibility, amounts, deadlines, and official sources.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the most popular federal grant for Canadian small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The SR&ED (Scientific Research and Experimental Development) tax credit is the largest federal program by dollars awarded, providing up to 35% refundable credit on qualifying R&D expenditures. For digital adoption, the Canada Digital Adoption Program (CDAP) offers up to $15,000 and is accessible to most small businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Can I apply for multiple federal grants at the same time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Most federal grant programs can be stacked — for example, a business can claim SR&ED, apply for IRAP advisory support, and also receive CDAP funding simultaneously, provided they meet each programme's eligibility rules. GrantMap checks for stacking opportunities in its matching report.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a federal grant application take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It varies by program. CDAP applications can be completed in a few hours. IRAP typically requires an introductory meeting with an Industrial Technology Advisor (ITA) and a proposal phase taking 2–6 weeks. SR&ED claims are filed annually with your corporate tax return (T2) and T661 form, usually prepared by a specialist.",
      },
    },
  ],
};

const PROGRAMS = [
  {
    name: "SR&ED Tax Credit",
    fullName: "Scientific Research & Experimental Development",
    amount: "Up to 35% federal; up to 44% with Ontario provincial top-up",
    type: "Tax Credit (Refundable)",
    eligibility: "Canadian-controlled private corporations (CCPCs) with qualifying R&D activities",
    deadline: "18 months after fiscal year-end",
    link: "https://www.canada.ca/en/revenue-agency/services/scientific-research-experimental-development-tax-incentive-program.html",
    note: "Filed on T661 form with corporate tax return. Largest program by total dollars awarded (~$3B/year).",
  },
  {
    name: "NRC IRAP",
    fullName: "Industrial Research Assistance Program",
    amount: "Up to $500,000 (project-dependent)",
    type: "Grant / Advisory Services",
    eligibility: "Canadian SMEs engaged in technology innovation; must have employees and be incorporated",
    deadline: "Rolling — contact a regional Industrial Technology Advisor (ITA)",
    link: "https://nrc.canada.ca/en/support-technology-innovation/nrc-industrial-research-assistance-program",
    note: "Covers up to 80% of eligible project costs. Widely regarded as Canada's most impactful innovation grant.",
  },
  {
    name: "CDAP",
    fullName: "Canada Digital Adoption Program",
    amount: "Up to $15,000 grant + up to $100,000 BDC loan",
    type: "Grant + Loan",
    eligibility: "Canadian businesses with 1–499 employees, $500K–$100M annual revenue, min. 1 year in operation",
    deadline: "Check Canada.ca — program has seen rolling intake periods",
    link: "https://ised-isde.canada.ca/site/canada-digital-adoption-program/en",
    note: "Covers cost of a digital adoption plan prepared by a certified digital advisor. Includes wage subsidy for a student to implement the plan.",
  },
  {
    name: "CanExport SMEs",
    fullName: "CanExport for Small and Medium-Sized Enterprises",
    amount: "$3,000–$75,000 per project",
    type: "Grant (non-repayable)",
    eligibility: "Canadian SMEs with 1–499 employees, $100K+ annual revenue, targeting new export markets",
    deadline: "Rolling applications accepted year-round",
    link: "https://www.tradecommissioner.gc.ca/funding-financement/canexport/sme-pme/index.aspx",
    note: "Covers up to 50% of eligible market development expenses: trade shows, in-market visits, translation, legal fees.",
  },
  {
    name: "Canada Job Grant",
    fullName: "Canada-Provincial Job Grant",
    amount: "Up to $10,000 per employee",
    type: "Training Subsidy",
    eligibility: "Canadian employers of all sizes; employees must be Canadian citizens or permanent residents",
    deadline: "Delivered provincially — check your province's portal",
    link: "https://www.canada.ca/en/employment-social-development/services/funding/canada-job-grant.html",
    note: "Government funds up to two-thirds of training costs. Employers contribute one-third. No cap on number of employees trained.",
  },
  {
    name: "ISED Innovation Grants",
    fullName: "Innovation, Science and Economic Development Canada Programs",
    amount: "Varies by program ($50K–$10M+)",
    type: "Grants / Contributions",
    eligibility: "Varies — targeted by sector, region, and company stage",
    deadline: "Program-specific; check ISED funding finder",
    link: "https://ised-isde.canada.ca/site/ised/en/funding-and-programs",
    note: "Includes Strategic Innovation Fund (SIF), Regional Economic Growth through Innovation (REGI), and more.",
  },
];

export default function FederalGrantsPage() {
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
            Match My Business
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">Federal Grants</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            Updated May 2026
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Federal Grants for Canadian Small Businesses — Complete 2026 Guide
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Canada's federal government offers billions of dollars in grants, tax credits, and subsidies each year for small and medium-sized businesses. This guide covers every major program: eligibility criteria, funding amounts, how to apply, and where to find official information.
          </p>
        </header>

        {/* Intro */}
        <section className="prose prose-invert max-w-none mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Why Federal Grants Matter for Canadian SMBs</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Canadian small businesses are often unaware of how much federal funding is available to them. The federal government disperses over $4 billion annually through direct grants, refundable tax credits, and cost-sharing programs — yet most businesses never claim what they are entitled to.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            The challenge is fragmentation: programs are administered by different departments (CRA, NRC, ISED, EDC), have varying eligibility rules, and change year to year. A tech startup in Ontario may qualify for IRAP, SR&amp;ED, CDAP, and the Ontario Innovation Tax Credit simultaneously — a combination worth hundreds of thousands of dollars.
          </p>
          <p className="text-slate-300 leading-relaxed mb-8">
            This guide focuses on the six most impactful federal programs. For AI-assisted matching across all 15+ programs in our database, see our <Link href="/app" className="text-blue-400 hover:text-blue-300">free eligibility dashboard</Link>.
          </p>
        </section>

        {/* Programs table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Federal Grant Programs at a Glance</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800/50 text-slate-300">
                  <th className="text-left px-4 py-3 font-medium">Program</th>
                  <th className="text-left px-4 py-3 font-medium">Max Amount</th>
                  <th className="text-left px-4 py-3 font-medium">Type</th>
                  <th className="text-left px-4 py-3 font-medium">Deadline</th>
                </tr>
              </thead>
              <tbody>
                {PROGRAMS.map((p, i) => (
                  <tr key={p.name} className={`border-t border-slate-800 ${i % 2 === 0 ? "bg-slate-900/30" : ""}`}>
                    <td className="px-4 py-3 font-medium text-white">
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">{p.name}</a>
                    </td>
                    <td className="px-4 py-3 text-emerald-400 font-medium">{p.amount.split(";")[0]}</td>
                    <td className="px-4 py-3 text-slate-400">{p.type}</td>
                    <td className="px-4 py-3 text-slate-400">{p.deadline.split("—")[0].trim()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Individual program deep-dives */}
        <section className="mb-12 space-y-10">
          <h2 className="text-2xl font-bold text-white">Program Deep-Dives</h2>

          {PROGRAMS.map((p) => (
            <div key={p.name} className="glass rounded-2xl p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{p.name}</h3>
                  <p className="text-sm text-slate-400">{p.fullName}</p>
                </div>
                <span className="shrink-0 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">{p.type}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Funding Amount</div>
                  <div className="text-emerald-400 font-semibold text-sm">{p.amount}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Application Deadline</div>
                  <div className="text-slate-300 text-sm">{p.deadline}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Eligibility</div>
                <p className="text-slate-300 text-sm">{p.eligibility}</p>
              </div>

              <div className="mb-5 p-3 bg-slate-800/40 rounded-lg border-l-2 border-blue-500/40">
                <p className="text-slate-400 text-sm italic">{p.note}</p>
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Official Government Source →
              </a>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Match Your Business to Federal Grants with AI</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Stop guessing which programs you qualify for. GrantMap's AI checks your business profile against every program on this page — plus 9 more — and delivers a ranked report with draft application text.
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

        {/* Related links */}
        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-slate-300 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <Link href="/sred/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">SR&amp;ED Tax Credit</div>
              <div className="text-slate-500">How to claim Canada's largest R&D credit</div>
            </Link>
            <Link href="/grants/ontario/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Ontario Grants Guide</div>
              <div className="text-slate-500">Provincial programs that stack with federal</div>
            </Link>
            <Link href="/blog/canadian-business-grants-2026/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Canadian Grants 2026</div>
              <div className="text-slate-500">Full pillar post: all categories covered</div>
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
