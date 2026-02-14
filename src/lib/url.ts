import { SEO } from "@/content/seo.config";

export function absUrl(pathname: string) {
  const base = SEO.baseUrl.replace(/\/$/, "");
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}
