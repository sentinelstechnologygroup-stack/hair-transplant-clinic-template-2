import { PRACTICE } from "./practice.config";

export type CampaignOverride = {
  key: string;

  // Optional overrides
  phoneDisplay?: string;
  phoneTel?: string;

  heroHeadline?: string;
  heroSubheadline?: string;
  primaryCtaLabel?: string;

  trustBar?: string[];
  offerBadge?: string;

  // For PPC-only variants you may want to block indexing
  noindex?: boolean;
};

export const CAMPAIGNS: Record<string, CampaignOverride> = {
  default: {
    key: "default",
    heroHeadline: "Physician-Led Hair Transplants Starting at $5,500",
    heroSubheadline:
      "Advanced FUE hair restoration with natural results. Schedule a free consultation.",
    primaryCtaLabel: "Free Consultation",
    trustBar: ["Physician-Led", "Natural Results", "Discreet Experience"],
    offerBadge: "Limited availability"
  },

  // Example PPC variant:
  google_neograft_tampa: {
    key: "google_neograft_tampa",
    heroHeadline: "NeoGraft FUE in Tampa — Natural, Permanent Results",
    heroSubheadline:
      "Modern FUE technique with physician-led planning. Book a free consultation today.",
    primaryCtaLabel: "Book Free Consult",
    trustBar: ["NeoGraft FUE", "Physician-Led", "Tampa Area"],
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
