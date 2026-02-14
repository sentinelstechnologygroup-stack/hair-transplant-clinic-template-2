# Hair Transplant Clinic — Template (Next.js + Tailwind)

This is a doctor/practice-agnostic starter template built for SEO + PPC landing performance.

## Routes
- `/` Home
- `/provider` Provider page
- `/neograft` Procedure page
- `/free-consultation` Consultation page (Gravity Forms embed placeholder)

## Quick start
```bash
npm install
npm run dev
```

## What to edit for a new practice (fast reskin)
1) `src/content/practice.config.ts` (name, phone, locations, service area)
2) `src/content/pages/*` (page copy blocks)
3) `src/content/campaigns.ts` (PPC variants by utm_campaign)
4) Swap images in `public/images/**` using the filenames listed in:
   - `src/content/media.manifest.ts`

## Gravity Forms
Paste your embed into `src/components/GravityFormEmbed.tsx`.  
If you switch providers later, replace that component only.

## IMPORTANT
Update `src/content/seo.config.ts` -> `baseUrl` after deploying to your real domain.


## WP source snapshots (for exact-clone parity)
The folder `src/_wp_snapshots/` contains the raw HTML snapshots extracted from the uploaded page-source dump.
Use them as a reference while we match section order + spacing.


## Clone parity (all 4 pages)
This starter now includes extracted page-source snapshots and a summary at `src/_wp_snapshots/summary.json`.
The four routes are structured to match the conversion cadence (hero → trust/proof → education → FAQ → CTA) and are fully reskinnable.
