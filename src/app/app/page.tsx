"use client";

import { useState } from "react";
import { ProfileForm } from "@/components/profile/profile-form";
import { MatchResults } from "@/components/dashboard/match-results";
import { GrantExplorer } from "@/components/dashboard/grant-explorer";
import { EligibilityQuiz } from "@/components/dashboard/eligibility-quiz";
import { ChatAdvisor } from "@/components/dashboard/chat-advisor";

type Mode = "profile" | "explorer" | "quiz" | "chat";

export default function Home() {
  const [profileId, setProfileId] = useState<string | null>(null);
  const [mode, setMode] = useState<Mode>("quiz");

  const tabs: { key: Mode; label: string; icon: string; desc: string }[] = [
    { key: "profile", label: "Match", icon: "◎", desc: "Full pipeline" },
    { key: "explorer", label: "Explore", icon: "◈", desc: "Browse programs" },
    { key: "quiz", label: "Quiz", icon: "✦", desc: "Quick check" },
    { key: "chat", label: "Advisor", icon: "◆", desc: "AI chat" },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">G</div>
              <div>
                <h1 className="text-lg font-bold text-white tracking-tight">GrantMap<span className="text-blue-400">.ca</span></h1>
              </div>
            </div>
            <nav className="flex gap-1 bg-slate-900/80 rounded-xl p-1 border border-slate-800/50">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setMode(tab.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    mode === tab.key
                      ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  <span className="mr-1.5 opacity-70">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              AI Active
            </div>
          </div>
        </div>
      </header>

      {/* Hero bar */}
      <div className="border-b border-slate-800/30 bg-gradient-to-r from-slate-950 via-blue-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                <span className="text-gradient">Find your funding</span>
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                AI-powered matching across 15+ Canadian federal & provincial grant programs
              </p>
            </div>
            <div className="flex gap-4 text-xs text-slate-500">
              <div className="text-center">
                <div className="text-lg font-bold text-white">15</div>
                <div>Programs</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">$4.2B</div>
                <div>Available</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">4</div>
                <div>AI Stages</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {mode === "profile" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-6 glow-brand">
              <h3 className="text-lg font-semibold text-white mb-1">Company Profile</h3>
              <p className="text-sm text-slate-400 mb-6">4-stage AI pipeline: parse → retrieve → score → draft</p>
              <ProfileForm onComplete={(id) => setProfileId(id)} />
            </div>
            <div>
              {profileId ? (
                <MatchResults profileId={profileId} />
              ) : (
                <div className="glass rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">
                  <div className="text-6xl mb-4 opacity-30">◎</div>
                  <h3 className="text-lg font-medium text-slate-300">Matches appear here</h3>
                  <div className="mt-6 space-y-2 text-sm text-slate-500 text-left max-w-xs">
                    <div className="flex items-center gap-3"><span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs font-bold">1</span> Profile parsing & enrichment</div>
                    <div className="flex items-center gap-3"><span className="w-6 h-6 rounded-md bg-violet-500/10 text-violet-400 flex items-center justify-center text-xs font-bold">2</span> Semantic program retrieval</div>
                    <div className="flex items-center gap-3"><span className="w-6 h-6 rounded-md bg-fuchsia-500/10 text-fuchsia-400 flex items-center justify-center text-xs font-bold">3</span> Eligibility scoring & ranking</div>
                    <div className="flex items-center gap-3"><span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs font-bold">4</span> Application draft generation</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {mode === "explorer" && (
          <div className="glass rounded-2xl p-6">
            <GrantExplorer />
          </div>
        )}

        {mode === "quiz" && (
          <div className="max-w-2xl mx-auto">
            <div className="glass rounded-2xl p-6 gradient-border">
              <EligibilityQuiz />
            </div>
          </div>
        )}

        {mode === "chat" && (
          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-2xl overflow-hidden glow-brand">
              <ChatAdvisor />
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-slate-800/30 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-xs text-slate-600">
          <span>GrantMap Canada — Open-source AI grant intelligence</span>
          <span>Ollama + Claude / GPT-4o / Gemini</span>
        </div>
      </footer>
    </div>
  );
}