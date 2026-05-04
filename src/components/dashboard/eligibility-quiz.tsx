"use client";

import { useState } from "react";

interface QuizResult {
  topPrograms: Array<{
    programId: string;
    programName: string;
    eligibilityScore: number;
    expectedFunding: string;
    oneLineReason: string;
  }>;
  summary: string;
  nextSteps: string[];
}

const STEPS = [
  { key: "province", question: "Where is your business located?", type: "select" as const, options: ["ON", "BC", "AB", "QC", "MB", "SK", "NS", "NB", "NL", "PE", "NT", "YT", "NU"] },
  { key: "employeeCount", question: "How many employees?", type: "number" as const, placeholder: "e.g. 12" },
  { key: "annualRevenue", question: "Annual revenue (CAD)?", type: "number" as const, placeholder: "e.g. 500000" },
  { key: "sector", question: "What sector?", type: "select" as const, options: ["technology", "manufacturing", "agriculture", "retail", "services", "healthcare", "construction", "education", "other"] },
  { key: "rdActivity", question: "Does your company do R&D?", type: "boolean" as const },
  { key: "exportActivity", question: "Do you export?", type: "boolean" as const },
  { key: "founderDemographics", question: "Founder demographics? (select all)", type: "multiselect" as const, options: ["women-owned", "visible-minority", "indigenous", "immigrant-founder", "veteran-owned", "none"] },
  { key: "yearsInOperation", question: "Years in operation?", type: "number" as const, placeholder: "e.g. 3" },
];

export function EligibilityQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const currentStep = STEPS[step];

  function handleNext(value: unknown) {
    const newAnswers = { ...answers, [currentStep.key]: value };
    setAnswers(newAnswers);
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      submitQuiz(newAnswers);
    }
  }

  async function submitQuiz(finalAnswers: Record<string, unknown>) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/quiz", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(finalAnswers) });
      const data = await res.json();
      if (data.error) setError(data.error);
      else setResult(data);
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }

  function reset() { setStep(0); setAnswers({}); setResult(null); setError(null); }

  const btnOpt = "px-4 py-2.5 rounded-xl text-sm font-medium transition-all border border-slate-700/50 bg-slate-800/50 text-slate-300 hover:border-blue-500/30 hover:text-blue-300 hover:bg-blue-500/5";
  const btnOptActive = "px-4 py-2.5 rounded-xl text-sm font-medium transition-all border border-blue-500/30 bg-blue-500/10 text-blue-300 shadow-lg shadow-blue-500/10";
  const btnPrimary = "px-6 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/20 disabled:opacity-40 transition-all";

  if (result) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl p-5">
          <h3 className="font-semibold text-white text-sm leading-relaxed">{result.summary}</h3>
        </div>
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Top Programs</h4>
          {result.topPrograms.map((p, i) => (
            <div key={i} className="glass rounded-xl p-4 flex items-center justify-between gradient-border">
              <div className="flex-1">
                <div className="font-semibold text-white text-sm">{p.programName}</div>
                <div className="text-xs text-slate-400 mt-1">{p.oneLineReason}</div>
              </div>
              <div className="text-right ml-4 shrink-0">
                <div className={`text-2xl font-bold ${p.eligibilityScore >= 70 ? "text-emerald-400" : p.eligibilityScore >= 40 ? "text-amber-400" : "text-orange-400"}`}>{p.eligibilityScore}%</div>
                <div className="text-xs text-slate-500">{p.expectedFunding}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
          <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">Next Steps</h4>
          <div className="space-y-2">
            {result.nextSteps.map((s, i) => (
              <div key={i} className="flex gap-3 text-sm text-slate-300">
                <span className="w-5 h-5 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                {s}
              </div>
            ))}
          </div>
        </div>
        <button onClick={reset} className="text-sm text-blue-400 hover:text-blue-300">Start over</button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4">
        <div className="relative">
          <div className="w-14 h-14 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
          <div className="absolute inset-0 w-14 h-14 border-2 border-violet-500/20 border-b-violet-500 rounded-full animate-spin" style={{ animationDirection: "reverse", animationDuration: "1.5s" }} />
        </div>
        <p className="text-sm text-slate-400">Analyzing across 15+ grant programs...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-1.5">
        {STEPS.map((_, i) => (
          <div key={i} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${i < step ? "bg-blue-500" : i === step ? "bg-gradient-to-r from-blue-500 to-violet-500" : "bg-slate-800"}`} />
        ))}
      </div>

      {error && <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-3 text-sm text-rose-400">{error}</div>}

      <h3 className="text-xl font-semibold text-white">{currentStep.question}</h3>

      {currentStep.type === "select" && (
        <div className="flex flex-wrap gap-2">
          {currentStep.options!.map((opt) => (
            <button key={opt} onClick={() => handleNext(opt)} className={answers[currentStep.key] === opt ? btnOptActive : btnOpt}>{opt}</button>
          ))}
        </div>
      )}

      {currentStep.type === "boolean" && (
        <div className="flex gap-3">
          <button onClick={() => handleNext(true)} className={btnOpt + " px-10"}>Yes</button>
          <button onClick={() => handleNext(false)} className={btnOpt + " px-10"}>No</button>
        </div>
      )}

      {currentStep.type === "number" && (
        <div className="flex gap-3">
          <input
            type="number"
            placeholder={currentStep.placeholder}
            className="flex-1 bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
            onKeyDown={(e) => e.key === "Enter" && handleNext(Number((e.target as HTMLInputElement).value))}
            onChange={(e) => setAnswers({ ...answers, [currentStep.key]: Number(e.target.value) })}
          />
          <button onClick={() => handleNext(answers[currentStep.key])} disabled={!answers[currentStep.key]} className={btnPrimary}>Next</button>
        </div>
      )}

      {currentStep.type === "multiselect" && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {currentStep.options!.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  const current = (answers[currentStep.key] as string[]) || [];
                  const next = current.includes(opt) ? current.filter((v) => v !== opt) : [...current, opt];
                  setAnswers({ ...answers, [currentStep.key]: next });
                }}
                className={((answers[currentStep.key] as string[]) || []).includes(opt) ? btnOptActive : btnOpt}
              >
                {opt}
              </button>
            ))}
          </div>
          <button onClick={() => handleNext(answers[currentStep.key] || [])} className={btnPrimary}>Next</button>
        </div>
      )}

      {step > 0 && <button onClick={() => setStep(step - 1)} className="text-sm text-slate-500 hover:text-slate-300 mt-4">Back</button>}
    </div>
  );
}