import { PRACTICE } from "./practice.config";

export type SEOConfig = {
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
  baseUrl: string; // set for canonical URLs (update per deployment)
};

export const SEO: SEOConfig = {
  siteName: PRACTICE.brandName,
  defaultTitle: `${PRACTICE.brandName} | Physician-Led Hair Restoration`,
  defaultDescription: PRACTICE.tagline,
  // IMPORTANT: change this to your production domain after deployment
  baseUrl: "https://example.com"
};
