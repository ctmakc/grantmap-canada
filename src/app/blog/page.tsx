import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Canadian Business Grant Blog — GrantMap Canada",
  description:
    "Guides, news, and practical advice on Canadian business grants, SR&ED tax credits, CDAP, IRAP, and provincial funding programs.",
  alternates: { canonical: "/blog/" },
};

const POSTS = [
  {
    slug: "canadian-business-grants-2026",
    title: "Complete Guide to Canadian Business Grants in 2026",
    excerpt:
      "Categories, federal vs provincial, application tips, and common mistakes. The definitive pillar post on Canadian business funding.",
    date: "May 15, 2026",
    readTime: "12 min",
    tag: "Guide",
    tagColor: "blue",
  },
  {
    slug: "irap-grant-guide",
    title: "NRC IRAP Grant: How to Apply and What Qualifies (2026)",
    excerpt:
      "Everything you need to know about Canada's Industrial Research Assistance Program — eligibility, amounts, the application process, and what counts as R&D.",
    date: "May 14, 2026",
    readTime: "8 min",
    tag: "Federal",
    tagColor: "violet",
  },
  {
    slug: "cdap-digital-adoption-program",
    title: "Canada Digital Adoption Program (CDAP): Is Your Business Eligible?",
    excerpt:
      "What CDAP covers, who qualifies, the $15K grant and $100K BDC loan component, and how to work with a certified digital advisor.",
    date: "May 13, 2026",
    readTime: "7 min",
    tag: "Federal",
    tagColor: "violet",
  },
  {
    slug: "sred-tax-credit-calculator",
    title: "SR&ED Tax Credit Calculator: Estimate Your Refund (2026)",
    excerpt:
      "Walk through worked examples to estimate your SR&ED refund. Includes CCPC vs other corporation rates and Ontario top-up calculations.",
    date: "May 12, 2026",
    readTime: "6 min",
    tag: "Tax Credit",
    tagColor: "fuchsia",
  },
  {
    slug: "stacking-grants-canada-guide",
    title: "Grant Stacking in Canada: Combine Multiple Programs for Maximum Funding",
    excerpt:
      "Federal + provincial + municipal stacking rules, a real $275K combined example, and what is prohibited. The strategic guide every Canadian business needs.",
    date: "May 15, 2026",
    readTime: "9 min",
    tag: "Strategy",
    tagColor: "emerald",
  },
  {
    slug: "sred-eligible-expenses",
    title: "SR&ED Eligible Expenses: What Qualifies and What Doesn't (2026)",
    excerpt:
      "Salaries 100%, subcontractors 80%, the overhead proxy method, capital equipment excluded, and worked examples for software and manufacturing companies.",
    date: "May 15, 2026",
    readTime: "9 min",
    tag: "SR&ED",
    tagColor: "fuchsia",
  },
  {
    slug: "how-to-write-grant-application",
    title: "How to Write a Winning Canadian Grant Application (Template + Tips)",
    excerpt:
      "Templates for all six core sections, the evaluation rubric reviewers use, and a final checklist before you hit submit.",
    date: "May 15, 2026",
    readTime: "10 min",
    tag: "Grant Writing",
    tagColor: "blue",
  },
  {
    slug: "common-grant-application-mistakes",
    title: "10 Grant Application Mistakes That Get Canadian Businesses Rejected",
    excerpt:
      "Missing eligibility proof, starting work before approval, weak budget justification, vague outcomes — and how to fix every one.",
    date: "May 15, 2026",
    readTime: "9 min",
    tag: "Grant Writing",
    tagColor: "blue",
  },
  {
    slug: "ontario-innovation-tax-credit",
    title: "Ontario Innovation Tax Credit (OITC): What IT Companies Need to Know",
    excerpt:
      "8% on eligible R&D, stackable with federal SR&ED for a combined 43%+ rate, eligibility requirements, and how CRA vs Ministry of Finance administration works.",
    date: "May 15, 2026",
    readTime: "7 min",
    tag: "Tax Credit",
    tagColor: "fuchsia",
  },
  {
    slug: "alberta-innovation-employment-grant",
    title: "Alberta Innovation Employment Grant (IEG): Complete 2026 Guide",
    excerpt:
      "20% refundable payroll credit on qualifying R&D, stacks with federal SR&ED, eligible activities, how to claim on your AT1 return.",
    date: "May 15, 2026",
    readTime: "8 min",
    tag: "Provincial",
    tagColor: "orange",
  },
  {
    slug: "bc-small-business-grants-2026",
    title: "BC Small Business Grants and Funding Programs in 2026",
    excerpt:
      "InBC, BCTECH, CleanBC, BC Hydro programs, regional grants from NDIT and RDNO, and how to stack with federal support.",
    date: "May 15, 2026",
    readTime: "10 min",
    tag: "Provincial",
    tagColor: "blue",
  },
  {
    slug: "grant-timeline-application-to-funding",
    title: "Canadian Grant Timeline: From Application to Cash in Your Account",
    excerpt:
      "IRAP: 4–16 weeks, CDAP: 3–5 months, SR&ED: 6–18 months. Real timelines for every major program and cash flow strategies for the wait.",
    date: "May 15, 2026",
    readTime: "8 min",
    tag: "Planning",
    tagColor: "blue",
  },
  {
    slug: "women-entrepreneurship-fund-canada",
    title: "Women Entrepreneurship Fund Canada: How to Apply and Qualify",
    excerpt:
      "WEF stream vs WES Ecosystem Fund, eligible expenses ($20K–$100K), the application scoring rubric, and how to submit a competitive proposal.",
    date: "May 15, 2026",
    readTime: "8 min",
    tag: "Federal",
    tagColor: "violet",
  },
  {
    slug: "bdc-financing-vs-grants",
    title: "BDC Loans vs Canadian Business Grants: Which Is Right for Your Business?",
    excerpt:
      "Grants are free money; BDC loans you repay. When to use each, three real stacking examples, and how to build a complete funding strategy.",
    date: "May 15, 2026",
    readTime: "8 min",
    tag: "Guide",
    tagColor: "blue",
  },
  {
    slug: "canexport-program-exporters",
    title: "CanExport Program: Free Money for Canadian Exporters (Up to $75,000)",
    excerpt:
      "CanExport SMEs vs Associations, eligible expenses, 75% cost-share, how to apply online, and tips for getting approved.",
    date: "May 15, 2026",
    readTime: "7 min",
    tag: "Federal",
    tagColor: "violet",
  },
  {
    slug: "hire-grant-writer-vs-ai",
    title: "Should You Hire a Grant Writer or Use AI? Honest Comparison for Canadian SMBs",
    excerpt:
      "Grant writer costs ($150–$300/hr or 5–10%), when AI tools handle the job, and when human expertise is genuinely worth paying for.",
    date: "May 15, 2026",
    readTime: "8 min",
    tag: "Strategy",
    tagColor: "blue",
  },
  {
    slug: "clean-technology-grants-canada",
    title: "Clean Technology Grants and Funding in Canada: 2026 Directory",
    excerpt:
      "Net Zero Accelerator, SIF clean tech stream, NRCan programs, and provincial green business grants — every major federal and provincial clean tech program.",
    date: "May 15, 2026",
    readTime: "10 min",
    tag: "Clean Tech",
    tagColor: "emerald",
  },
  {
    slug: "innovation-superclusters-program",
    title: "Canada's Innovation Superclusters: Funding for Tech and Industrial Companies",
    excerpt:
      "All 5 superclusters (DMCP, BCSA, NGen, Protein Industries, Scale AI), membership benefits, project grant sizes, and how to join.",
    date: "May 15, 2026",
    readTime: "9 min",
    tag: "Federal",
    tagColor: "violet",
  },
  {
    slug: "mitacs-funding-research",
    title: "Mitacs Funding: How to Get Paid Research Partnerships at Canadian Universities",
    excerpt:
      "Mitacs Accelerate internships ($15,000/4-month unit, half subsidised), Elevate fellowships, how to find an academic partner, and SR&ED stacking.",
    date: "May 15, 2026",
    readTime: "8 min",
    tag: "Research",
    tagColor: "violet",
  },
  {
    slug: "indigenous-business-grants-canada",
    title: "Grants for Indigenous-Owned Businesses in Canada: Full 2026 Guide",
    excerpt:
      "ABES program, NACCA Indigenous Financial Institutions, provincial programs by province, and mainstream programs open to Indigenous businesses.",
    date: "May 15, 2026",
    readTime: "9 min",
    tag: "Federal + Provincial",
    tagColor: "emerald",
  },
  {
    slug: "futurpreneur-canada-guide",
    title: "Futurpreneur Canada: Funding and Mentorship for Young Entrepreneurs",
    excerpt:
      "Up to $20K Futurpreneur loan + $40K BDC co-loan = $60K total, age 18–39, mandatory 2-year mentorship, repayment terms, and how to apply.",
    date: "May 15, 2026",
    readTime: "7 min",
    tag: "Federal",
    tagColor: "blue",
  },
  {
    slug: "agri-innovate-program",
    title: "AgriInnovate Program: Grants for Canadian Food and Agriculture Businesses",
    excerpt:
      "50% cost-share up to $10M, eligible investments in food processing and commercialisation, intake windows, and how to build a strong application.",
    date: "May 15, 2026",
    readTime: "8 min",
    tag: "Agriculture",
    tagColor: "emerald",
  },
  {
    slug: "ontario-centre-of-innovation",
    title: "Ontario Centre of Innovation (OCI): Programs for Ontario Tech Companies",
    excerpt:
      "VIP vouchers up to $25K, Market Readiness grants up to $30K, Invest Ontario, BIRD Ontario, and how to stack OCI with SR&ED and IRAP.",
    date: "May 15, 2026",
    readTime: "7 min",
    tag: "Ontario",
    tagColor: "blue",
  },
  {
    slug: "export-development-canada-programs",
    title: "Export Development Canada (EDC): Financing for Canadian Exporters",
    excerpt:
      "EDC is not a grant program — it offers loans, credit insurance, and guarantees. How each product works and how to combine EDC with CanExport.",
    date: "May 15, 2026",
    readTime: "8 min",
    tag: "Financing",
    tagColor: "blue",
  },
];

export default function BlogIndexPage() {
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
            Try Free
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">Blog</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Canadian Business Grant Blog</h1>
          <p className="text-xl text-slate-400">
            Practical guides on Canadian federal and provincial grants, SR&amp;ED tax credits, CDAP, IRAP, and government funding programs for small businesses.
          </p>
        </header>

        <div className="space-y-6 mb-16">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="block glass rounded-2xl p-7 hover:border-blue-500/30 transition-colors group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className={`text-xs px-2 py-0.5 rounded-full bg-${post.tagColor}-500/10 border border-${post.tagColor}-500/20 text-${post.tagColor}-400 font-medium`}>
                    {post.tag}
                  </span>
                </div>
                <div className="text-xs text-slate-500">{post.date} · {post.readTime} read</div>
              </div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{post.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{post.excerpt}</p>
              <div className="mt-4 text-blue-400 text-sm font-medium">Read more →</div>
            </Link>
          ))}
        </div>

        {/* Featured links */}
        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-slate-300 mb-4">Key Grant Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <Link href="/grants/federal/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Federal Grants Guide</div>
              <div className="text-slate-500">Complete 2026 program list</div>
            </Link>
            <Link href="/sred/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">SR&amp;ED Deep Dive</div>
              <div className="text-slate-500">Canada's largest R&D credit</div>
            </Link>
            <Link href="/for-accountants/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">For Accountants</div>
              <div className="text-slate-500">Unlimited reports at $50/mo</div>
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
