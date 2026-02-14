/**
 * This manifest is the single source of truth for what images the template expects.
 * Swap files in /public/images/... (keep filenames) to reskin for a new practice quickly.
 */
export const MEDIA = {
  brand: {
    logo: "/images/brand/logo.svg"
  },
  provider: {
    portrait: "/images/provider/portrait.jpg",
    clinic: "/images/provider/clinic.jpg"
  },
  procedures: {
    neograft: "/images/procedures/neograft.jpg"
  },
  beforeAfter: [
    "/images/before-after/ba-01.jpg",
    "/images/before-after/ba-02.jpg",
    "/images/before-after/ba-03.jpg",
    "/images/before-after/ba-04.jpg",
    "/images/before-after/ba-05.jpg",
    "/images/before-after/ba-06.jpg",
    "/images/before-after/ba-07.jpg",
    "/images/before-after/ba-08.jpg"
  ],
  trustLogos: [
    "/images/logos/logo-01.svg",
    "/images/logos/logo-02.svg",
    "/images/logos/logo-03.svg",
    "/images/logos/logo-04.svg",
    "/images/logos/logo-05.svg"
  ]
} as const;
