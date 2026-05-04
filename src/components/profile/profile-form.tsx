"use client";

import { useState } from "react";

interface ProfileFormProps {
  clientId: string;
  onComplete?: (profileId: string) => void;
}

export function ProfileForm({ clientId, onComplete }: ProfileFormProps) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    companyName: "",
    industry: "",
    employeeCount: "",
    annualRevenue: "",
    province: "ON",
    city: "",
    foundingYear: "",
    founderDemographics: [] as string[],
    rdActivity: false,
    exportActivity: false,
    exportMarkets: "",
    isStartup: false,
    sector: "",
  });

  const demographicsOptions = [
    { tag: "women-owned", label: "Women-owned" },
    { tag: "visible-minority", label: "Visible minority" },
    { tag: "indigenous", label: "Indigenous" },
    { tag: "immigrant-founder", label: "Immigrant" },
    { tag: "veteran-owned", label: "Veteran" },
    { tag: "lgbtq-owned", label: "LGBTQ+" },
    { tag: "disability-owned", label: "Disability-owned" },
  ];

  const provinces = [
    "AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT",
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientId, rawData: form }),
      });
      const data = await res.json();
      onComplete?.(data.profileId);
    } catch (err) {
      console.error("Failed:", err);
    } finally {
      setLoading(false);
    }
  }

  function toggleDemographic(tag: string) {
    setForm((prev) => ({
      ...prev,
      founderDemographics: prev.founderDemographics.includes(tag)
        ? prev.founderDemographics.filter((d) => d !== tag)
        : [...prev.founderDemographics, tag],
    }));
  }

  const inputCls = "w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-colors";
  const labelCls = "block text-sm font-medium text-slate-300 mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Company Name</label>
          <input required className={inputCls} value={form.companyName} onChange={(e) => setForm((f) => ({ ...f, companyName: e.target.value }))} />
        </div>
        <div>
          <label className={labelCls}>Province</label>
          <select className={inputCls} value={form.province} onChange={(e) => setForm((f) => ({ ...f, province: e.target.value }))}>
            {provinces.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Sector</label>
          <input required className={inputCls} placeholder="technology, manufacturing..." value={form.sector} onChange={(e) => setForm((f) => ({ ...f, sector: e.target.value }))} />
        </div>
        <div>
          <label className={labelCls}>Industry Description</label>
          <input className={inputCls} placeholder="SaaS platform for logistics" value={form.industry} onChange={(e) => setForm((f) => ({ ...f, industry: e.target.value }))} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelCls}>Employees</label>
          <input required type="number" min="0" className={inputCls} value={form.employeeCount} onChange={(e) => setForm((f) => ({ ...f, employeeCount: e.target.value }))} />
        </div>
        <div>
          <label className={labelCls}>Revenue (CAD)</label>
          <input required type="number" min="0" className={inputCls} value={form.annualRevenue} onChange={(e) => setForm((f) => ({ ...f, annualRevenue: e.target.value }))} />
        </div>
        <div>
          <label className={labelCls}>Founded</label>
          <input required type="number" min="1900" max={new Date().getFullYear()} className={inputCls} value={form.foundingYear} onChange={(e) => setForm((f) => ({ ...f, foundingYear: e.target.value }))} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={form.rdActivity} onChange={(e) => setForm((f) => ({ ...f, rdActivity: e.target.checked }))} className="rounded border-slate-600 bg-slate-800 text-blue-500 focus:ring-blue-500/20" />
          <span className="text-sm text-slate-300">R&D Activity</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={form.exportActivity} onChange={(e) => setForm((f) => ({ ...f, exportActivity: e.target.checked }))} className="rounded border-slate-600 bg-slate-800 text-blue-500 focus:ring-blue-500/20" />
          <span className="text-sm text-slate-300">Exports</span>
        </label>
      </div>

      <div>
        <label className={labelCls}>Founder Demographics</label>
        <div className="flex flex-wrap gap-2">
          {demographicsOptions.map(({ tag, label }) => (
            <button
              key={tag}
              type="button"
              onClick={() => toggleDemographic(tag)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                form.founderDemographics.includes(tag)
                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  : "bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-slate-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 disabled:opacity-40 shadow-lg shadow-blue-500/20 transition-all"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="animate-spin h-4 w-4 border-2 border-white/30 border-t-white rounded-full" />
            Analyzing...
          </span>
        ) : "Find Matching Grants"}
      </button>
    </form>
  );
}