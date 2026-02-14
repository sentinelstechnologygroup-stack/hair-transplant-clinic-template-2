export type PracticeLocation = {
  name: string; // "Primary Clinic"
  city: string;
  state: string;
  addressLine1: string;
  addressLine2?: string;
  postalCode: string;
  phoneDisplay: string;
  phoneTel: string; // "+1..."
};

export type PracticeConfig = {
  brandName: string;
  providerDisplayName: string; // e.g. "Your Provider, M.D." (template placeholder)
  providerTitleLine: string;   // e.g. "Hair Restoration Specialist"
  tagline: string;             // short descriptor

  // Default contact details used across site (can be overridden by PPC campaign)
  phoneDisplay: string;
  phoneTel: string;

  locations: PracticeLocation[];

  // Optional: used for structured data and footer
  serviceArea: string[];
  primaryProcedureLabel: string; // "NeoGraft FUE" or client-specific
};

export const PRACTICE: PracticeConfig = {
  brandName: "Hair Transplant Clinic",
  providerDisplayName: "Lead Provider, M.D.",
  providerTitleLine: "Hair Restoration Specialist",
  tagline: "Physician-led hair restoration with natural, permanent results.",

  phoneDisplay: "(941) 555-0123",
  phoneTel: "+19415550123",

  locations: [
    {
      name: "Primary Clinic",
      city: "Tampa",
      state: "FL",
      addressLine1: "123 Clinic Ave",
      addressLine2: "Suite 100",
      postalCode: "33602",
      phoneDisplay: "(941) 555-0123",
      phoneTel: "+19415550123"
    }
  ],

  serviceArea: ["Tampa, FL", "Bradenton, FL", "St. Petersburg, FL"],
  primaryProcedureLabel: "NeoGraft FUE"
};
