import { PRACTICE } from "./practice.config";

export type CampaignOverride = {
  key: string;

  phoneDisplay?: string;
  phoneTel?: string;

  heroHeadline?: string;
  heroHeadlineLine2?: string;
  heroSubheadline?: string; // used as the “Patient Focused…” line
  primaryCtaLabel?: string;

  trustBar?: string[];
  offerBadge?: string;

  noindex?: boolean;
};

export const CAMPAIGNS: Record<string, CampaignOverride> = {
  default: {
    key: "default",
    heroHeadline: "No Counting Grafts - We Focus on Quality",
    heroHeadlineLine2: "Hair Transplants Starting at $5,500",
    heroSubheadline: "Patient Focused. Provider Driven.",
    primaryCtaLabel: "Free Consult",
    trustBar: [
      "No Linear Scar with Permanent Results",
      "No Graft Counting - Focused on Quality",
      "Minimal Downtime with Minimal Discomfort"
    ],
    offerBadge: "Limited availability"
  },

  // Example PPC variant:
  google_neograft: {
    key: "google_neograft",
    heroHeadline: "NeoGraft FUE — Natural, Permanent Results",
    heroHeadlineLine2: "Schedule a Free Consult",
    heroSubheadline: "Patient Focused. Provider Driven.",
    primaryCtaLabel: "Free Consult",
    trustBar: [
      "No Linear Scar (FUE)",
      "Natural Hairline Design",
      "Physician-Led Oversight"
    ],
    offerBadge: "PPC Offer",
    noindex: true
  }
};

export function pickCampaign(searchParams?: Record<string, string | string[] | undefined>) {
  const raw = searchParams?.utm_campaign;
  const key = Array.isArray(raw) ? raw[0] : raw;

  if (key && CAMPAIGNS[key]) return CAMPAIGNS[key];
  return CAMPAIGNS.default ?? {
    key: "default",
    phoneDisplay: PRACTICE.phoneDisplay,
    phoneTel: PRACTICE.phoneTel
  };
}
