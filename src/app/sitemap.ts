import type { MetadataRoute } from "next";

const BASE = "https://grantmap.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: Array<{ url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    { url: "/grants/federal/", priority: 0.9, changeFrequency: "monthly" },
    { url: "/grants/ontario/", priority: 0.9, changeFrequency: "monthly" },
    { url: "/sred/", priority: 0.95, changeFrequency: "monthly" },
    { url: "/for-accountants/", priority: 0.85, changeFrequency: "monthly" },
    { url: "/compare/grantmap-vs-manual-research/", priority: 0.75, changeFrequency: "monthly" },
    { url: "/about/", priority: 0.6, changeFrequency: "yearly" },
    { url: "/blog/", priority: 0.8, changeFrequency: "weekly" },
    { url: "/blog/canadian-business-grants-2026/", priority: 0.9, changeFrequency: "monthly" },
    { url: "/blog/irap-grant-guide/", priority: 0.85, changeFrequency: "monthly" },
    { url: "/blog/cdap-digital-adoption-program/", priority: 0.85, changeFrequency: "monthly" },
    { url: "/blog/sred-tax-credit-calculator/", priority: 0.85, changeFrequency: "monthly" },
  ];

  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
