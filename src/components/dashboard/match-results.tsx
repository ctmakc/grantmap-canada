"use client";

import { useState, useEffect, useCallback, useRef } from "react";

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
  const [error, setError] = useState<string | null>(null);
  const [expandedMatch, setExpandedMatch] = useState<string | null>(null);
  const [showDraft, setShowDraft] = useState<string | null>(null);
  const pollCountRef = useRef(0);

  const fetchResults = useCallback(async () => {
    try {
      const res = await fetch(`/api/matches?profileId=${profileId}`);
      const data = await res.json();
      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }
      const matchList = data.matches || data || [];
      if (Array.isArray(matchList) && matchList.length > 0) {
        setMatches(matchList);
        const draftList = data.drafts || [];
        if (Array.isArray(draftList) && draftList.length > 0) {
          setDrafts(draftList);
        }
        setLoading(false);
      }
    } catch (err) {
      setError(String(err));
      setLoading(false);
    }
  }, [profileId]);

  useEffect(() => {
    if (!profileId) return;
    pollCountRef.current = 0;
    // Reset state when the selected profile changes, then begin polling the
    // pipeline. These synchronous resets are intentional (keyed off profileId).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    setError(null);
    setMatches([]);
    setDrafts([]);

    const interval = setInterval(() => {
      pollCountRef.current += 1;
      if (pollCountRef.current >= 40) {
        // 2 minutes timeout
        clearInterval(interval);
        setLoading(false);
        setError("Pipeline timed out. Try the Quiz tab for faster results.");
        return;
      }
      fetchResults();
    }, 3000);

    fetchResults();
    return () => clearInterval(interval);
  }, [profileId, fetchResults]);

  if (error) {
    return (
      <div className="glass rounded-2xl p-6 text-center">
        <div className="text-rose-400 text-sm mb-3">{error}</div>
        <p className="text-slate-500 text-xs">The full pipeline can take 30-120 seconds. Try the Quiz tab for instant results.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 glass rounded-2xl">
        <div className="relative">
          <div className="w-14 h-14 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
          <div className="absolute inset-0 w-14 h-14 border-2 border-violet-500/20 border-b-violet-500 rounded-full animate-spin" style={{ animationDirection: "reverse", animationDuration: "1.5s" }} />
        </div>
        <span className="mt-4 text-sm text-slate-400">Running 4-stage AI pipeline...</span>
        <span className="mt-1 text-xs text-slate-600">This can take 30-120 seconds with local AI</span>
      </div>
    );
  }

  if (matches.length === 0) {
    return (
      <div className="glass rounded-2xl p-10 text-center text-slate-500">No matching grants found.</div>
    );
  }

  function formatCurrency(n: number) {
    return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(n);
  }

  function scoreColor(score: number) {
    if (score >= 80) return "from-emerald-500 to-emerald-400";
    if (score >= 60) return "from-amber-500 to-amber-400";
    if (score >= 40) return "from-orange-500 to-orange-400";
    return "from-rose-500 to-rose-400";
  }

  function scoreGlow(score: number) {
    if (score >= 80) return "shadow-emerald-500/20";
    if (score >= 60) return "shadow-amber-500/20";
    return "shadow-orange-500/20";
  }

  function complexityStyle(complexity: string) {
    const m: Record<string, string> = {
      simple: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      moderate: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      complex: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    };
    return m[complexity] || "bg-slate-500/10 text-slate-400 border-slate-500/20";
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">{matches.length} Matching Programs</h3>
        <span className="text-xs text-slate-500">sorted by eligibility</span>
      </div>

      {matches.map((match) => {
        const draft = drafts.find((d) => d.programId === match.programId);
        const isExpanded = expandedMatch === match.programId;

        return (
          <div key={match.id} className={`glass rounded-xl overflow-hidden transition-all ${isExpanded ? 'glow-brand' : ''}`}>
            <div
              className="p-4 cursor-pointer hover:bg-slate-800/30 transition-colors"
              onClick={() => setExpandedMatch(isExpanded ? null : match.programId)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${scoreColor(match.eligibilityScore)} flex items-center justify-center shadow-lg ${scoreGlow(match.eligibilityScore)}`}>
                    <span className="text-lg font-bold text-white">{match.eligibilityScore}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{match.programId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}</div>
                    <div className="text-sm text-emerald-400 font-medium mt-0.5">
                      {formatCurrency(match.expectedAmountMin)} – {formatCurrency(match.expectedAmountMax)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${complexityStyle(match.complexity)}`}>
                    {match.complexity}
                  </span>
                  {match.deadline && (
                    <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded-lg">{match.deadline}</span>
                  )}
                  <span className="text-slate-600 text-xs ml-1">{isExpanded ? "▲" : "▼"}</span>
                </div>
              </div>
            </div>

            {isExpanded && (
              <div className="border-t border-slate-700/50 p-4 bg-slate-900/50">
                <div className="mb-4">
                  <h4 className="font-medium text-sm text-blue-400 mb-2 uppercase tracking-wider">Eligibility Reasoning</h4>
                  <div className="space-y-2">
                    {match.reasoning.map((r, i) => (
                      <div key={i} className="flex gap-3 text-sm text-slate-300">
                        <span className="w-5 h-5 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                        {r}
                      </div>
                    ))}
                  </div>
                </div>

                {draft && (
                  <div className="mt-4 pt-4 border-t border-slate-800/50">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-sm text-emerald-400 uppercase tracking-wider">Application Draft</h4>
                      <button
                        onClick={(e) => { e.stopPropagation(); setShowDraft(showDraft === match.programId ? null : match.programId); }}
                        className="text-xs text-blue-400 hover:text-blue-300 bg-blue-500/10 px-3 py-1 rounded-lg"
                      >
                        {showDraft === match.programId ? "Hide" : "Show draft"}
                      </button>
                    </div>
                    <div className="text-xs text-slate-500">~{draft.estimatedPrepHours}h to finalize</div>

                    {showDraft === match.programId && (
                      <div className="mt-3 space-y-3">
                        {draft.sections.map((section, i) => (
                          <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/30">
                            <h5 className="font-medium text-sm text-violet-400 mb-2">{section.sectionTitle}</h5>
                            <p className="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">{section.content}</p>
                            {section.tips.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {section.tips.map((tip, ti) => (
                                  <span key={ti} className="text-xs bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-md">{tip}</span>
                                ))}
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