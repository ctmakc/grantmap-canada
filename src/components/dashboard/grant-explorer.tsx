"use client";

import { useState, useEffect } from "react";

interface GrantProgram {
  id: string;
  name: string;
  jurisdiction: string;
  type: string;
  fundingMin: number;
  fundingMax: number;
  complexity: string;
  ongoing: boolean;
  deadline: string | null;
  eligibilitySummary: string;
}

export function GrantExplorer() {
  const [programs, setPrograms] = useState<GrantProgram[]>([]);
  const [filter, setFilter] = useState({ jurisdiction: "all", type: "all", search: "" });

  useEffect(() => {
    fetch("/api/grants")
      .then((r) => r.json())
      .then(setPrograms)
      .catch(console.error);
  }, []);

  const filtered = programs.filter((p) => {
    if (filter.jurisdiction !== "all" && p.jurisdiction !== filter.jurisdiction) return false;
    if (filter.type !== "all" && p.type !== filter.type) return false;
    if (filter.search && !p.name.toLowerCase().includes(filter.search.toLowerCase())) return false;
    return true;
  });

  function formatCurrency(n: number) {
    return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(n);
  }

  const jurisdictions = [...new Set(programs.map((p) => p.jurisdiction))];
  const types = [...new Set(programs.map((p) => p.type))];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <input
          type="text"
          placeholder="Search programs..."
          value={filter.search}
          onChange={(e) => setFilter((f) => ({ ...f, search: e.target.value }))}
          className="border rounded-md px-3 py-2 text-sm flex-1 min-w-48"
        />
        <select
          value={filter.jurisdiction}
          onChange={(e) => setFilter((f) => ({ ...f, jurisdiction: e.target.value }))}
          className="border rounded-md px-3 py-2 text-sm"
        >
          <option value="all">All jurisdictions</option>
          {jurisdictions.map((j) => <option key={j} value={j}>{j}</option>)}
        </select>
        <select
          value={filter.type}
          onChange={(e) => setFilter((f) => ({ ...f, type: e.target.value }))}
          className="border rounded-md px-3 py-2 text-sm"
        >
          <option value="all">All types</option>
          {types.map((t) => <option key={t} value={t}>{t.replace("_", " ")}</option>)}
        </select>
      </div>

      <div className="text-sm text-gray-500">{filtered.length} of {programs.length} programs</div>

      <div className="space-y-3">
        {filtered.map((p) => (
          <div key={p.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium">{p.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{p.eligibilitySummary}</p>
              </div>
              <div className="text-right ml-4 shrink-0">
                <div className="text-lg font-semibold text-green-700">
                  {formatCurrency(p.fundingMin)} – {formatCurrency(p.fundingMax)}
                </div>
                <div className="flex gap-2 mt-1 justify-end">
                  <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded">{p.jurisdiction}</span>
                  <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded">{p.type.replace("_", " ")}</span>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    p.complexity === "simple" ? "bg-green-100 text-green-700" :
                    p.complexity === "moderate" ? "bg-yellow-100 text-yellow-700" :
                    "bg-red-100 text-red-700"
                  }`}>{p.complexity}</span>
                </div>
              </div>
            </div>
            {p.deadline && <div className="text-xs text-gray-500 mt-2">Deadline: {p.deadline}</div>}
            {!p.deadline && p.ongoing && <div className="text-xs text-green-600 mt-2">Ongoing — apply anytime</div>}
          </div>
        ))}
      </div>
    </div>
  );
}