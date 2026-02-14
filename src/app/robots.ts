import type { MetadataRoute } from "next";
import { SEO } from "@/content/seo.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SEO.baseUrl.replace(/\/$/, "")}/sitemap.xml`
  };
}
