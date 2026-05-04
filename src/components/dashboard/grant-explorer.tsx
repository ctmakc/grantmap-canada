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
    fetch("/api/grants").then((r) => r.json()).then(setPrograms).catch(console.error);
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
  const inputCls = "bg-slate-800/50 border border-slate-700/50 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors";

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <input
          type="text"
          placeholder="Search programs..."
          value={filter.search}
          onChange={(e) => setFilter((f) => ({ ...f, search: e.target.value }))}
          className={`${inputCls} flex-1 min-w-48`}
        />
        <select value={filter.jurisdiction} onChange={(e) => setFilter((f) => ({ ...f, jurisdiction: e.target.value }))} className={inputCls}>
          <option value="all">All jurisdictions</option>
          {jurisdictions.map((j) => <option key={j} value={j}>{j}</option>)}
        </select>
        <select value={filter.type} onChange={(e) => setFilter((f) => ({ ...f, type: e.target.value }))} className={inputCls}>
          <option value="all">All types</option>
          {types.map((t) => <option key={t} value={t}>{t.replace("_", " ")}</option>)}
        </select>
      </div>

      <div className="text-sm text-slate-500">{filtered.length} of {programs.length} programs</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filtered.map((p) => (
          <div key={p.id} className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-5 hover:border-slate-700/50 transition-all group">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-300 transition-colors">{p.name}</h3>
                <p className="text-xs text-slate-400 mt-1.5 line-clamp-2">{p.eligibilitySummary}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-base font-bold text-emerald-400">
                  {formatCurrency(p.fundingMin)}
                </div>
                <div className="text-xs text-slate-500">to {formatCurrency(p.fundingMax)}</div>
              </div>
            </div>
            <div className="flex gap-2 mt-3 flex-wrap">
              <span className="text-xs px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">{p.jurisdiction}</span>
              <span className="text-xs px-2 py-0.5 bg-violet-500/10 text-violet-400 rounded-md border border-violet-500/20">{p.type.replace("_", " ")}</span>
              <span className={`text-xs px-2 py-0.5 rounded-md border ${
                p.complexity === "simple" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                p.complexity === "moderate" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                "bg-rose-500/10 text-rose-400 border-rose-500/20"
              }`}>{p.complexity}</span>
              {p.ongoing && <span className="text-xs px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">ongoing</span>}
              {p.deadline && <span className="text-xs px-2 py-0.5 bg-amber-500/10 text-amber-400 rounded-md border border-amber-500/20">due {p.deadline}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}