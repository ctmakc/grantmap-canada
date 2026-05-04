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
    "women-owned",
    "visible-minority",
    "indigenous",
    "immigrant-founder",
    "veteran-owned",
    "lgbtq-owned",
    "disability-owned",
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
        body: JSON.stringify({
          clientId,
          rawData: form,
        }),
      });
      const data = await res.json();
      onComplete?.(data.profileId);
    } catch (err) {
      console.error("Failed to submit profile:", err);
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Company Name</label>
          <input
            required
            className="w-full border rounded-md px-3 py-2 text-sm"
            value={form.companyName}
            onChange={(e) => setForm((f) => ({ ...f, companyName: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Province</label>
          <select
            className="w-full border rounded-md px-3 py-2 text-sm"
            value={form.province}
            onChange={(e) => setForm((f) => ({ ...f, province: e.target.value }))}
          >
            {provinces.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Industry / Sector</label>
          <input
            required
            className="w-full border rounded-md px-3 py-2 text-sm"
            placeholder="e.g. Software, Manufacturing, Agriculture"
            value={form.sector}
            onChange={(e) => setForm((f) => ({ ...f, sector: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Industry Description</label>
          <input
            className="w-full border rounded-md px-3 py-2 text-sm"
            placeholder="e.g. SaaS platform for logistics"
            value={form.industry}
            onChange={(e) => setForm((f) => ({ ...f, industry: e.target.value }))}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Employees</label>
          <input
            required
            type="number"
            min="0"
            className="w-full border rounded-md px-3 py-2 text-sm"
            value={form.employeeCount}
            onChange={(e) => setForm((f) => ({ ...f, employeeCount: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Annual Revenue (CAD)</label>
          <input
            required
            type="number"
            min="0"
            className="w-full border rounded-md px-3 py-2 text-sm"
            value={form.annualRevenue}
            onChange={(e) => setForm((f) => ({ ...f, annualRevenue: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Founded Year</label>
          <input
            required
            type="number"
            min="1900"
            max={new Date().getFullYear()}
            className="w-full border rounded-md px-3 py-2 text-sm"
            value={form.foundingYear}
            onChange={(e) => setForm((f) => ({ ...f, foundingYear: e.target.value }))}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.rdActivity}
            onChange={(e) => setForm((f) => ({ ...f, rdActivity: e.target.checked }))}
          />
          <span className="text-sm">Conducts R&D</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.exportActivity}
            onChange={(e) => setForm((f) => ({ ...f, exportActivity: e.target.checked }))}
          />
          <span className="text-sm">Exports products/services</span>
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Founder Demographics</label>
        <div className="flex flex-wrap gap-2">
          {demographicsOptions.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => toggleDemographic(tag)}
              className={`px-3 py-1 rounded-full text-xs border transition-colors ${
                form.founderDemographics.includes(tag)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-300 hover:border-blue-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
      >
        {loading ? "Analyzing profile..." : "Find Matching Grants"}
      </button>
    </form>
  );
}