import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About GrantMap Canada — AI Grant Intelligence",
  description:
    "GrantMap Canada was built to solve a real problem: Canadian small businesses miss billions in grants every year because grant research is fragmented and time-consuming. We built the AI to fix that.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
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

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">About</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-6">About GrantMap Canada</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            We built GrantMap because we kept watching small businesses leave millions of dollars on the table — not because they did not qualify for grants, but because they had no practical way to find out which ones.
          </p>
        </header>

        <section className="prose prose-invert max-w-none space-y-6 text-slate-300 leading-relaxed mb-12">
          <h2 className="text-2xl font-bold text-white">The Problem We Saw</h2>
          <p>
            Canada's grant landscape is genuinely complex. There are hundreds of programs across federal departments — CRA, ISED, NRC, EDC — and each province adds its own layer. Eligibility rules differ by industry, employee count, revenue, R&amp;D activity, and export status. Intake windows open and close unpredictably. Programs change year to year.
          </p>
          <p>
            Most small business owners encounter this problem once, spend three hours on Canada.ca, and give up. Some hire a consultant at $150–$200/hour. Some rely on word of mouth and miss programs they clearly qualify for. Very few ever run a systematic check across all the programs that might apply to them.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">What We Built</h2>
          <p>
            GrantMap is a four-stage AI pipeline:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-slate-300">
            <li><strong className="text-white">Profile parsing</strong> — we extract structured eligibility signals from your business description</li>
            <li><strong className="text-white">Semantic retrieval</strong> — we match your profile against our database of 15+ programs using embedding-based similarity search</li>
            <li><strong className="text-white">Eligibility scoring</strong> — a rule-based layer applies each program's specific criteria to your profile and produces a ranked eligibility score</li>
            <li><strong className="text-white">Draft generation</strong> — for your top 3 matches, the AI generates draft application text in formal Canadian English, tailored to the program's requirements</li>
          </ol>
          <p>
            The result is a report that would take a knowledgeable human 8–12 hours to produce — delivered in under 5 minutes, for $150.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Our Mission</h2>
          <p>
            Canada spends billions on business support programs. We want every eligible business to find and claim what it is entitled to — regardless of whether it has a dedicated grant writer, an expensive accountant, or any prior knowledge of how government funding works.
          </p>
          <p>
            We are especially focused on serving the businesses most likely to be underserved: small manufacturers, innovative startups, export-ready companies, and the accountants and advisors who serve them.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Who Uses GrantMap</h2>
          <ul className="space-y-2">
            <li><strong className="text-white">Small and medium businesses</strong> — who want a fast, affordable way to see what funding they qualify for</li>
            <li><strong className="text-white">Accountants and CPAs</strong> — who use GrantMap's unlimited plan ($50/mo) to run reports for all their clients and add grant assessment as a billable service</li>
            <li><strong className="text-white">Business advisors and fractional CFOs</strong> — who need to quickly size the funding opportunity for a new or existing client</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8">Our Coverage</h2>
          <p>
            GrantMap's database currently covers 15+ programs including:
          </p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-slate-400">
            {[
              "SR&ED Tax Credit (Federal)",
              "NRC IRAP (Federal)",
              "Canada Digital Adoption Program",
              "CanExport SMEs",
              "Canada Job Grant",
              "Ontario Innovation Tax Credit",
              "Ontario Co-investment Fund",
              "Digital Main Street",
              "Alberta Innovates",
              "BC Tech Pilot Program",
              "WES Ecosystem Fund",
              "Agri-Innovate Program",
              "CanExport Community",
              "NS Business Development Rebate",
              "QC Jeunes Promoteurs",
            ].map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="text-blue-400 text-xs">✓</span> {p}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to See What You Qualify For?</h2>
          <p className="text-slate-400 mb-6">Try the free quiz or get a full AI report for $150.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/app" className="px-8 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white font-medium transition-all">
              Free Eligibility Quiz
            </Link>
            <Link href="/#pricing" className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all">
              Get Full Report — $150
            </Link>
          </div>
        </section>

        {/* Nav links */}
        <section className="border-t border-slate-800 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <Link href="/grants/federal/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Federal Grants Guide</div>
              <div className="text-slate-500">Programs we cover in depth</div>
            </Link>
            <Link href="/for-accountants/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">For Accountants</div>
              <div className="text-slate-500">Unlimited reports at $50/mo</div>
            </Link>
            <Link href="/blog/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Blog</div>
              <div className="text-slate-500">Grant guides and news</div>
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
