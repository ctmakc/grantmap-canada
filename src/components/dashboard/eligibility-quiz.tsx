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
  {
    key: "province",
    question: "Where is your business located?",
    type: "select" as const,
    options: ["ON", "BC", "AB", "QC", "MB", "SK", "NS", "NB", "NL", "PE", "NT", "YT", "NU"],
  },
  {
    key: "employeeCount",
    question: "How many employees does your company have?",
    type: "number" as const,
    placeholder: "e.g. 12",
  },
  {
    key: "annualRevenue",
    question: "What is your annual revenue (CAD)?",
    type: "number" as const,
    placeholder: "e.g. 500000",
  },
  {
    key: "sector",
    question: "What sector is your business in?",
    type: "select" as const,
    options: ["technology", "manufacturing", "agriculture", "retail", "services", "healthcare", "construction", "education", "other"],
  },
  {
    key: "rdActivity",
    question: "Does your company conduct R&D (research & development)?",
    type: "boolean" as const,
  },
  {
    key: "exportActivity",
    question: "Does your company export products or services?",
    type: "boolean" as const,
  },
  {
    key: "founderDemographics",
    question: "Do any founders identify as? (select all that apply)",
    type: "multiselect" as const,
    options: ["women-owned", "visible-minority", "indigenous", "immigrant-founder", "veteran-owned", "none"],
  },
  {
    key: "yearsInOperation",
    question: "How many years has your company been in operation?",
    type: "number" as const,
    placeholder: "e.g. 3",
  },
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
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalAnswers),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setResult(data);
      }
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }

  function handleBack() {
    if (step > 0) setStep(step - 1);
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setResult(null);
    setError(null);
  }

  if (result) {
    return (
      <div className="space-y-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-green-800 mb-2">{result.summary}</h3>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium">Top Matching Programs</h4>
          {result.topPrograms.map((p, i) => (
            <div key={i} className="border rounded-lg p-4 flex items-center justify-between">
              <div>
                <div className="font-medium">{p.programName}</div>
                <div className="text-sm text-gray-600">{p.oneLineReason}</div>
              </div>
              <div className="text-right ml-4">
                <div className="text-lg font-bold text-green-700">{p.eligibilityScore}%</div>
                <div className="text-sm text-gray-500">{p.expectedFunding}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-800 mb-2">Next Steps</h4>
          <ul className="space-y-1">
            {result.nextSteps.map((s, i) => (
              <li key={i} className="text-sm text-blue-700 flex gap-2">
                <span className="font-medium">{i + 1}.</span> {s}
              </li>
            ))}
          </ul>
        </div>

        <button onClick={reset} className="text-sm text-blue-600 hover:underline">
          Start over
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600" />
        <p className="text-gray-600">Analyzing your profile across 15+ grant programs...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        {STEPS.map((_, i) => (
          <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-blue-600" : "bg-gray-200"}`} />
        ))}
      </div>

      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">{error}</div>}

      <h3 className="text-lg font-semibold">{currentStep.question}</h3>

      {currentStep.type === "select" && (
        <div className="flex flex-wrap gap-2">
          {currentStep.options!.map((opt) => (
            <button
              key={opt}
              onClick={() => handleNext(opt)}
              className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                answers[currentStep.key] === opt
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-300"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {currentStep.type === "boolean" && (
        <div className="flex gap-4">
          <button
            onClick={() => handleNext(true)}
            className="px-8 py-2 rounded-lg border text-sm bg-white text-gray-700 border-gray-300 hover:border-blue-300"
          >
            Yes
          </button>
          <button
            onClick={() => handleNext(false)}
            className="px-8 py-2 rounded-lg border text-sm bg-white text-gray-700 border-gray-300 hover:border-blue-300"
          >
            No
          </button>
        </div>
      )}

      {currentStep.type === "number" && (
        <div className="flex gap-3">
          <input
            type="number"
            placeholder={currentStep.placeholder}
            className="border rounded-md px-3 py-2 text-sm w-48"
            onKeyDown={(e) => e.key === "Enter" && handleNext(Number((e.target as HTMLInputElement).value))}
            onChange={(e) => setAnswers({ ...answers, [currentStep.key]: Number(e.target.value) })}
          />
          <button
            onClick={() => handleNext(answers[currentStep.key])}
            disabled={!answers[currentStep.key]}
            className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {currentStep.type === "multiselect" && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {currentStep.options!.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  const current = (answers[currentStep.key] as string[]) || [];
                  const next = current.includes(opt) ? current.filter((v) => v !== opt) : [...current, opt];
                  setAnswers({ ...answers, [currentStep.key]: next });
                }}
                className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                  ((answers[currentStep.key] as string[]) || []).includes(opt)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          <button
            onClick={() => handleNext(answers[currentStep.key] || [])}
            className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      )}

      {step > 0 && (
        <button onClick={handleBack} className="text-sm text-gray-500 hover:text-gray-700 mt-4">
          Back
        </button>
      )}
    </div>
  );
}