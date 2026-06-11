import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://grantmap.ca";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicitly welcome AI crawlers for GEO (Generative Engine Optimisation)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "GoogleOther", allow: "/" },
      { userAgent: "Googlebot-News", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "meta-externalagent", allow: "/" },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
