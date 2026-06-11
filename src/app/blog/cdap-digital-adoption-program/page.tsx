import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Canada Digital Adoption Program (CDAP): Is Your Business Eligible?",
  description:
    "Complete guide to the Canada Digital Adoption Program (CDAP). What CDAP covers, eligibility criteria, the $15,000 grant and $100,000 BDC loan component, and how to work with a certified digital advisor.",
  alternates: { canonical: "/blog/cdap-digital-adoption-program/" },
  openGraph: {
    title: "Canada Digital Adoption Program (CDAP): Is Your Business Eligible?",
    description:
      "CDAP offers eligible Canadian businesses up to $15,000 for a digital adoption plan plus access to a $100,000 BDC loan. Learn if you qualify.",
  },
};

export default function CDAPGuidePage() {
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
            Check CDAP Eligibility
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
          <span className="text-slate-300">CDAP Guide</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-medium">Federal Grant</span>
            <span className="text-xs text-slate-500">May 13, 2026 · 7 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Canada Digital Adoption Program (CDAP): Is Your Business Eligible?
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            CDAP is one of the most accessible federal grants for Canadian small businesses — covering digital adoption costs with up to $15,000 and providing a path to a $100,000 BDC loan to implement the plan. Here is how it works and whether your business qualifies.
          </p>
        </header>

        <div className="space-y-10 text-slate-300">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Is CDAP?</h2>
            <p className="leading-relaxed mb-4">
              The Canada Digital Adoption Program (CDAP) is a Government of Canada program administered by Innovation, Science and Economic Development Canada (ISED). It was launched in 2021 as part of Canada's commitment to help small and medium-sized businesses adopt digital technologies and compete in the digital economy.
            </p>
            <p className="leading-relaxed mb-4">
              CDAP works primarily through the <strong className="text-white">Boost Your Business Technology (Boost Your BT) stream</strong>, which provides funding to hire a certified digital advisor who develops a customised digital adoption plan for your business. The grant covers the cost of the advisor; a separate BDC loan covers implementation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {[
                { label: "Digital Advisor Grant", value: "Up to $15,000", sub: "Covers cost of certified digital advisor" },
                { label: "BDC Implementation Loan", value: "Up to $100,000", sub: "0% interest, 36-month repayment" },
                { label: "Youth Wage Subsidy", value: "Up to $7,300", sub: "Hire a student to implement the plan" },
              ].map((card) => (
                <div key={card.label} className="glass rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{card.value}</div>
                  <div className="text-sm font-medium text-slate-300 mb-1">{card.label}</div>
                  <div className="text-xs text-slate-500">{card.sub}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">CDAP Eligibility: Does Your Business Qualify?</h2>
            <p className="leading-relaxed mb-4">
              CDAP is one of the broader Canadian grant programs in terms of who can apply. The core eligibility requirements are:
            </p>
            <div className="space-y-3">
              {[
                { label: "Business size", detail: "1 to 499 full-time equivalent employees", eligible: true },
                { label: "Revenue", detail: "$500,000 to $100,000,000 in annual revenue", eligible: true },
                { label: "Time in business", detail: "Minimum 1 year in operation", eligible: true },
                { label: "Location", detail: "Must be operating in Canada", eligible: true },
                { label: "For-profit", detail: "Must be a for-profit enterprise (not-for-profits do not qualify)", eligible: true },
                { label: "No previous CDAP grant", detail: "If you already received a CDAP Grow Your Business Online (GYBO) grant, you may still qualify for Boost Your BT", eligible: true },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 glass rounded-lg p-4">
                  <span className={`mt-0.5 shrink-0 ${item.eligible ? "text-emerald-400" : "text-rose-400"}`}>
                    {item.eligible ? "✓" : "×"}
                  </span>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.label}</div>
                    <div className="text-slate-400 text-sm">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 glass rounded-xl p-4 border-l-4 border-amber-500/40">
              <p className="text-sm text-slate-300">
                <strong className="text-amber-400">Check current intake status:</strong> CDAP has operated in multiple intake windows. Always verify the current status at the{" "}
                <a href="https://ised-isde.canada.ca/site/canada-digital-adoption-program/en" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  official CDAP page on Canada.ca
                </a>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Does CDAP Cover?</h2>
            <p className="leading-relaxed mb-4">
              The $15,000 grant specifically covers the cost of engaging a <strong className="text-white">certified digital advisor</strong> — a professional from CDAP's network of approved advisors who assesses your current digital maturity and produces a customised digital adoption plan.
            </p>
            <p className="leading-relaxed mb-4">
              The digital adoption plan is a formal document that includes:
            </p>
            <ul className="space-y-2">
              {[
                "Assessment of your current digital tools and processes",
                "Gap analysis comparing your capability to industry peers",
                "Recommended digital technologies to adopt (e.g., ERP, CRM, e-commerce, cloud accounting)",
                "Implementation roadmap with timelines and estimated costs",
                "Identification of ROI and productivity gains expected from the plan",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed mt-4">
              Once the plan is complete, you can apply to BDC for a zero-interest loan of up to $100,000 to implement the recommendations. You also have the option to hire a student through the program's youth component to help execute the plan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The CDAP Application Process</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Check your eligibility", desc: "Verify you meet the employee count, revenue, and time-in-business requirements. Use GrantMap's free quiz to get an instant pre-check." },
                { step: "2", title: "Register on the CDAP portal", desc: "Create an account at the CDAP portal on Canada.ca. Complete your business profile with financial and operational details." },
                { step: "3", title: "Find a certified digital advisor", desc: "Browse CDAP's marketplace of approved digital advisors. Advisors have been pre-vetted by CDAP. Compare profiles, expertise, and reviews. Get quotes from 2–3 advisors." },
                { step: "4", title: "Receive your digital adoption plan", desc: "Your advisor conducts an assessment (typically 3–6 weeks) and produces the digital adoption plan. Review and approve it." },
                { step: "5", title: "Claim your grant", desc: "Submit the completed plan to CDAP to claim the grant funds. CDAP reimburses up to $15,000 of the advisor's cost directly to you." },
                { step: "6", title: "Apply for the BDC loan (optional)", desc: "If you want funding to implement the plan, apply to BDC for the zero-interest implementation loan. Present your completed digital adoption plan as part of the application." },
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
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Is CDAP Worth Applying For?</h2>
            <p className="leading-relaxed mb-4">
              For most eligible businesses, yes — with some caveats.
            </p>
            <p className="leading-relaxed mb-4">
              The <strong className="text-white">grant value is real</strong>: up to $15,000 for advisory work you would otherwise pay for yourself. Even if you already have a sense of what digital tools you need, working through a CDAP-certified advisor often uncovers opportunities and produces a defensible document for future grant applications.
            </p>
            <p className="leading-relaxed mb-4">
              The <strong className="text-white">BDC loan at 0% interest</strong> is a genuine financial product. For a business that needs to invest in software, systems, or digital infrastructure, borrowing $50–100K at 0% over 36 months is significantly better than bank financing.
            </p>
            <p className="leading-relaxed">
              The caveat: CDAP intake periods have been irregular and sometimes paused. Always verify the current program status before investing time in the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Can CDAP Be Stacked with Other Programs?</h2>
            <p className="leading-relaxed mb-4">
              Yes. CDAP is generally stackable with other federal and provincial programs:
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "SR&ED: The technology assessment component of your digital adoption plan may involve R&D activities that qualify for SR&ED — check with your accountant.",
                "Canada Job Grant: If the digital adoption plan identifies employee training needs, Canada Job Grant can fund up to $10,000 per employee for training.",
                "Ontario Digital Main Street: Ontario businesses may access additional provincial digital support programs that complement CDAP.",
                "IRAP: If implementing new technology leads to further R&D, IRAP advisory services can support the next phase.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-blue-400 mt-0.5 shrink-0">+</span>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Official source */}
        <div className="glass rounded-xl p-5 mt-10 mb-6 flex items-center justify-between">
          <div>
            <div className="text-white font-semibold text-sm">Official Program Source</div>
            <div className="text-slate-400 text-xs">Innovation, Science and Economic Development Canada</div>
          </div>
          <a
            href="https://ised-isde.canada.ca/site/canada-digital-adoption-program/en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium shrink-0"
          >
            Canada.ca/CDAP →
          </a>
        </div>

        {/* CTA */}
        <section className="glass rounded-2xl p-10 text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Check Your CDAP Eligibility Now</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            GrantMap checks CDAP eligibility alongside 14 other programs and tells you exactly where you stand in under 5 minutes.
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
            <Link href="/grants/federal/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">All Federal Grants</div>
              <div className="text-slate-500">Full 2026 program list</div>
            </Link>
            <Link href="/blog/irap-grant-guide/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">IRAP Guide</div>
              <div className="text-slate-500">Canada's top innovation grant</div>
            </Link>
            <Link href="/blog/canadian-business-grants-2026/" className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-medium mb-1">Canadian Grants 2026</div>
              <div className="text-slate-500">Complete category overview</div>
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
