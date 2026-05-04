"use client";

import { useState } from "react";
import { ProfileForm } from "@/components/profile/profile-form";
import { MatchResults } from "@/components/dashboard/match-results";

export default function Home() {
  const [profileId, setProfileId] = useState<string | null>(null);
  const [view, setView] = useState<"form" | "results">("form");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">GrantMap Canada</h1>
            <p className="text-sm text-gray-500">AI-powered grant matching for Canadian small business</p>
          </div>
          <nav className="flex gap-4">
            <button
              onClick={() => { setView("form"); setProfileId(null); }}
              className={`text-sm px-3 py-1.5 rounded-md ${view === "form" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}
            >
              New Profile
            </button>
            {profileId && (
              <button
                onClick={() => setView("results")}
                className={`text-sm px-3 py-1.5 rounded-md ${view === "results" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}
              >
                Results
              </button>
            )}
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        {view === "form" && (
          <div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold">Enter Company Profile</h2>
              <p className="text-sm text-gray-500">
                Our AI will match your business to Canadian federal and provincial grant programs.
              </p>
            </div>
            <ProfileForm
              clientId="demo-client"
              onComplete={(id) => {
                setProfileId(id);
                setView("results");
              }}
            />
          </div>
        )}

        {view === "results" && profileId && (
          <MatchResults profileId={profileId} />
        )}
      </main>

      <footer className="border-t mt-12">
        <div className="max-w-5xl mx-auto px-6 py-4 text-center text-xs text-gray-400">
          GrantMap Canada — Open-source AI grant intelligence for Canadian small business
        </div>
      </footer>
    </div>
  );
}