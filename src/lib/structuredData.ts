import { PRACTICE } from "@/content/practice.config";
import { absUrl } from "./url";

export function localBusinessJsonLd() {
  const loc = PRACTICE.locations[0];
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: PRACTICE.brandName,
    url: absUrl("/"),
    telephone: PRACTICE.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: [loc.addressLine1, loc.addressLine2].filter(Boolean).join(", "),
      addressLocality: loc.city,
      addressRegion: loc.state,
      postalCode: loc.postalCode,
      addressCountry: "US"
    },
    areaServed: PRACTICE.serviceArea.map((x) => ({ "@type": "City", name: x }))
  };
}
