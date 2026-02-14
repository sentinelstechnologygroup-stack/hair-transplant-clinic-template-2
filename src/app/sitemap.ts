import type { MetadataRoute } from "next";
import { absUrl } from "@/lib/url";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/provider", "/neograft", "/free-consultation"];
  const now = new Date();
  return routes.map((r) => ({
    url: absUrl(r),
    lastModified: now,
    changeFrequency: "weekly",
    priority: r === "/" ? 1 : 0.8
  }));
}
