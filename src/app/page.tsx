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
  const [mode, setMode] = useState<Mode>("profile");

  const tabs: { key: Mode; label: string; icon: string }[] = [
    { key: "profile", label: "Match Grants", icon: "🎯" },
    { key: "explorer", label: "Explore Programs", icon: "📋" },
    { key: "quiz", label: "Quick Quiz", icon: "✅" },
    { key: "chat", label: "AI Advisor", icon: "💬" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">GrantMap Canada</h1>
              <p className="text-sm text-gray-500">AI-powered grant matching for Canadian small businesses</p>
            </div>
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setMode(tab.key)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    mode === tab.key
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <span className="mr-1.5">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {mode === "profile" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">Enter Company Profile</h2>
              <p className="text-sm text-gray-500 mb-6">
                Our 4-stage AI pipeline will match your business to Canadian grant programs, score eligibility, and generate application drafts.
              </p>
              <ProfileForm
                clientId="demo-client"
                onComplete={(id) => setProfileId(id)}
              />
            </div>
            <div>
              {profileId ? (
                <MatchResults profileId={profileId} />
              ) : (
                <div className="bg-white border rounded-lg p-8 text-center text-gray-400">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-lg font-medium text-gray-600">Grant matches will appear here</h3>
                  <p className="text-sm mt-2">
                    Fill in your company profile to discover eligible programs with AI-powered eligibility scoring and application drafts.
                  </p>
                  <div className="mt-6 space-y-2 text-left text-sm text-gray-500 max-w-xs mx-auto">
                    <div className="flex items-center gap-2"><span className="text-blue-500">1.</span> Profile parsing & enrichment</div>
                    <div className="flex items-center gap-2"><span className="text-blue-500">2.</span> Semantic program retrieval</div>
                    <div className="flex items-center gap-2"><span className="text-blue-500">3.</span> Eligibility scoring & ranking</div>
                    <div className="flex items-center gap-2"><span className="text-blue-500">4.</span> Application draft generation</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {mode === "explorer" && <GrantExplorer />}

        {mode === "quiz" && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-2">Quick Eligibility Quiz</h2>
            <p className="text-sm text-gray-500 mb-6">
              Answer 8 questions and get instant AI-powered grant recommendations.
            </p>
            <EligibilityQuiz />
          </div>
        )}

        {mode === "chat" && (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold mb-2">AI Grant Advisor</h2>
            <p className="text-sm text-gray-500 mb-4">
              Chat with our AI advisor about Canadian grants, eligibility, and application strategies.
            </p>
            <div className="bg-white border rounded-lg overflow-hidden">
              <ChatAdvisor />
            </div>
          </div>
        )}
      </main>

      <footer className="border-t mt-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div>GrantMap Canada — Open-source AI grant intelligence</div>
            <div>Powered by Ollama (local) + Claude/GPT-4o/Gemini (cloud)</div>
          </div>
        </div>
      </footer>
    </div>
  );
}