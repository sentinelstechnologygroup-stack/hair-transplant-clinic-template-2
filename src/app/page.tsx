import Link from "next/link";
import Image from "next/image";

import TrustBar from "@/components/TrustBar";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import LogoSlider from "@/components/LogoSlider";
import { pickCampaign } from "@/content/campaigns";
import { HOME } from "@/content/pages/home";
import { PRACTICE } from "@/content/practice.config";

export const dynamic = "force-static";

export default async function HomePage({
  searchParams
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = (await searchParams) ?? {};
  const campaign = pickCampaign(sp);

  return (
    <div className="space-y-10 md:space-y-14">
      {/* HERO (Tampa-style: 2-line headline + Free Consult + “Patient Focused…” line) */}
      <div className="rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] ring-1 ring-white/10 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)]">
        <div className="px-6 py-10 md:px-10 md:py-14">
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {campaign.heroHeadline ?? "No Counting Grafts - We Focus on Quality"}
              </h1>
              <div className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {campaign.heroHeadlineLine2 ?? "Hair Transplants Starting at $5,500"}
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/free-consultation"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
                >
                  {campaign.primaryCtaLabel ?? "Free Consult"}
                </Link>

                <a
                  href={`tel:${campaign.phoneTel ?? PRACTICE.phoneTel}`}
                  className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                >
                  {campaign.phoneDisplay ?? PRACTICE.phoneDisplay}
                </a>
              </div>

              <h2 className="mt-6 text-xl font-semibold text-white/90 md:text-2xl">
                {campaign.heroSubheadline ?? "Patient Focused. Provider Driven."}
              </h2>
            </div>

            {/* Big logo/proof strip placeholder (swap with real logos later) */}
            <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10">
              <div className="grid grid-cols-2 gap-3 px-5 py-5 md:grid-cols-6 md:px-8">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-10 rounded-xl bg-white/[0.03] ring-1 ring-white/10"
                    aria-label="Proof logo placeholder"
                  />
                ))}
              </div>
            </div>

            <Link
              href="/free-consultation"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 md:w-auto"
            >
              Request a Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* 3 benefit headlines (matches Tampa’s next beats) */}
      <TrustBar
        items={
          campaign.trustBar ?? [
            "No Linear Scar with Permanent Results",
            "No Graft Counting - Focused on Quality",
            "Minimal Downtime with Minimal Discomfort"
          ]
        }
      />

      {/* Before / After */}
      <Section title="Before / After" subtitle="Replace placeholder images in /public/images/before-after/.">
        <BeforeAfterGrid />
      </Section>

      {/* Analysis section (key conversion block on Tampa) */}
      <Section
        title={HOME.sections.analysis.title}
        subtitle="High-intent consult framing (holistic analysis + plan + value)."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-white/70">{HOME.sections.analysis.intro}</p>
            <ul className="mt-4 space-y-2 text-white/80">
              {HOME.sections.analysis.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-white/70">{HOME.sections.analysis.body}</p>

            <ul className="mt-4 space-y-2 text-white/80">
              {HOME.sections.analysis.services.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white/70" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link
                href="/free-consultation"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                {HOME.sections.analysis.ctaLabel}
              </Link>
            </div>
          </div>

          {/* Right-side image pair placeholder (Tampa shows stacked images here) */}
          <div className="grid gap-4">
            <div className="relative h-56 overflow-hidden rounded-2xl bg-white/[0.03] ring-1 ring-white/10 md:h-64">
              <Image
                src="/images/provider/clinic.jpg"
                alt="Clinic"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-56 overflow-hidden rounded-2xl bg-white/[0.03] ring-1 ring-white/10 md:h-64">
              <Image
                src="/images/procedures/neograft.jpg"
                alt="Procedure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Partner / logos section */}
      <Section title="Our Partners" subtitle="Swap these logos in /public/images/logos/.">
        <LogoSlider />
      </Section>

      {/* Credibility / provider block (Tampa has “Board-Certified …” + CTA) */}
      <Section title={HOME.sections.credibility.title} subtitle="Template-driven provider credibility block.">
        <p className="text-white/70">{HOME.sections.credibility.body}</p>

        <div className="mt-6 rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
          <div className="text-white font-semibold">{PRACTICE.providerDisplayName}</div>
          <div className="mt-1 text-sm text-white/60">{PRACTICE.providerTitleLine}</div>
          <div className="mt-4">
            <Link
              href="/free-consultation"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              SCHEDULE A CONSULTATION
            </Link>
          </div>
        </div>
      </Section>

      <CTA
        title="Ready to get your plan?"
        body="Book a free consultation to confirm candidacy, timeline, and pricing."
        primaryLabel="Free Consultation"
        primaryHref="/free-consultation"
      />
    </div>
  );
}
