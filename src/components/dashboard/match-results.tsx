"use client";

import { useState, useEffect } from "react";

interface Match {
  id: string;
  programId: string;
  eligibilityScore: number;
  expectedAmountMin: number;
  expectedAmountMax: number;
  complexity: string;
  deadline: string | null;
  reasoning: string[];
}

interface Draft {
  programId: string;
  programName: string;
  sections: Array<{
    sectionTitle: string;
    content: string;
    wordCount: number;
    tips: string[];
  }>;
  overallTips: string[];
  estimatedPrepHours: number;
}

interface MatchResultsProps {
  profileId: string;
}

export function MatchResults({ profileId }: MatchResultsProps) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedMatch, setExpandedMatch] = useState<string | null>(null);
  const [showDraft, setShowDraft] = useState<string | null>(null);

  useEffect(() => {
    async function fetchResults() {
      try {
        const res = await fetch(`/api/matches?profileId=${profileId}`);
        const data = await res.json();
        setMatches(data.matches || []);
        setDrafts(data.drafts || []);
      } catch (err) {
        console.error("Failed to fetch matches:", err);
      } finally {
        setLoading(false);
      }
    }

    // Poll for results since pipeline runs async
    const poll = setInterval(fetchResults, 3000);
    fetchResults();

    return () => clearInterval(poll);
  }, [profileId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
        <span className="ml-3 text-gray-600">Running AI matching pipeline...</span>
      </div>
    );
  }

  if (matches.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No matching grants found. Try adjusting your company profile.
      </div>
    );
  }

  function formatCurrency(n: number) {
    return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(n);
  }

  function scoreColor(score: number) {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    if (score >= 40) return "text-orange-600";
    return "text-red-600";
  }

  function complexityBadge(complexity: string) {
    const colors: Record<string, string> = {
      simple: "bg-green-100 text-green-700",
      moderate: "bg-yellow-100 text-yellow-700",
      complex: "bg-red-100 text-red-700",
    };
    return colors[complexity] || "bg-gray-100 text-gray-700";
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        Matching Grants ({matches.length} found)
      </h3>

      {matches.map((match) => {
        const draft = drafts.find((d) => d.programId === match.programId);
        const isExpanded = expandedMatch === match.programId;

        return (
          <div key={match.id} className="border rounded-lg overflow-hidden">
            <div
              className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setExpandedMatch(isExpanded ? null : match.programId)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`text-2xl font-bold ${scoreColor(match.eligibilityScore)}`}>
                    {match.eligibilityScore}%
                  </span>
                  <div>
                    <div className="font-medium">{match.programId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}</div>
                    <div className="text-sm text-gray-500">
                      {formatCurrency(match.expectedAmountMin)} – {formatCurrency(match.expectedAmountMax)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${complexityBadge(match.complexity)}`}>
                    {match.complexity}
                  </span>
                  {match.deadline && (
                    <span className="text-xs text-gray-500">Due: {match.deadline}</span>
                  )}
                </div>
              </div>
            </div>

            {isExpanded && (
              <div className="border-t p-4 bg-gray-50">
                <div className="mb-3">
                  <h4 className="font-medium text-sm mb-1">Eligibility Reasoning</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {match.reasoning.map((r, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-blue-500 shrink-0">{i + 1}.</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {draft && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">Application Draft</h4>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDraft(showDraft === match.programId ? null : match.programId);
                        }}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        {showDraft === match.programId ? "Hide draft" : "Show draft"}
                      </button>
                    </div>
                    <div className="text-xs text-gray-500">
                      Estimated prep time: {draft.estimatedPrepHours}h
                    </div>

                    {showDraft === match.programId && (
                      <div className="mt-3 space-y-3">
                        {draft.sections.map((section, i) => (
                          <div key={i} className="bg-white rounded p-3 border">
                            <h5 className="font-medium text-sm mb-1">{section.sectionTitle}</h5>
                            <p className="text-sm text-gray-700 whitespace-pre-wrap">{section.content}</p>
                            {section.tips.length > 0 && (
                              <div className="mt-2 text-xs text-blue-600">
                                Tips: {section.tips.join(" | ")}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}