import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import LogoSlider from "@/components/LogoSlider";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { pickCampaign } from "@/content/campaigns";
import { HOME } from "@/content/pages/home";
import { Metadata } from "next";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  return {
    title: "Hair Transplant Clinic",
    description: "Physician-led hair restoration with natural, permanent results."
  };
}

export default async function HomePage({
  searchParams
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = (await searchParams) ?? {};
  const campaign = pickCampaign(sp);

  return (
    <div className="space-y-10 md:space-y-14">
      <Hero
        headline={campaign.heroHeadline ?? "Physician-Led Hair Transplants"}
        subheadline={campaign.heroSubheadline ?? "Schedule a free consultation."}
        bullets={campaign.trustBar ?? ["Physician-Led", "Natural Results", "Discreet Experience"]}
        ctaLabel={campaign.primaryCtaLabel ?? "Free Consultation"}
        badge={campaign.offerBadge ?? null}
      />

      {/* minimal-scroll straps */}
      <div className="grid gap-4 md:grid-cols-3">
        {HOME.sections.straps.map((s) => (
          <div
            key={s.title}
            className="rounded-3xl bg-white/[0.03] ring-1 ring-white/10 px-6 py-7"
          >
            <div className="text-lg font-semibold text-white">{s.title}</div>
            <p className="mt-2 text-sm text-white/70">{s.body}</p>
          </div>
        ))}
      </div>

      <Section title="Before / After Results" subtitle="Replace these placeholder images in /public/images/before-after/.">
        <BeforeAfterGrid />
      </Section>

      <Section title="Trusted. Discreet. Physician-Led." subtitle="Swap these logos in /public/images/logos/.">
        <LogoSlider />
      </Section>

      <YouTubeEmbed title="See the clinic approach" youtubeUrl={null} />

      <Section title={HOME.sections.process.title} subtitle="Clean, conversion-first flow.">
        <div className="grid gap-4 md:grid-cols-4">
          {HOME.sections.process.steps.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-5">
              <div className="text-white font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-white/70">{s.body}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title={HOME.sections.faq.title} subtitle="Fast-edit FAQs live in src/content/pages/home.ts.">
        <div className="grid gap-4 md:grid-cols-3">
          {HOME.sections.faq.items.map((f) => (
            <div key={f.q} className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-5">
              <div className="text-white font-semibold">{f.q}</div>
              <div className="mt-2 text-sm text-white/70">{f.a}</div>
            </div>
          ))}
        </div>
      </Section>

      <CTA
        title="Ready to get a plan and exact pricing?"
        body="Book a free consultation to confirm candidacy, timeline, and cost."
        primaryLabel={campaign.primaryCtaLabel ?? "Free Consultation"}
      />
    </div>
  );
}
