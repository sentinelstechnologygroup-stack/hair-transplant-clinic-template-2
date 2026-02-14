import Image from "next/image";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import { PRACTICE } from "@/content/practice.config";
import { PROVIDER } from "@/content/pages/provider";
import { MEDIA } from "@/content/media.manifest";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Provider",
  description: "Meet the provider and learn the physician-led approach."
};

export default function ProviderPage() {
  return (
    <div className="space-y-10 md:space-y-14">
      <div className="rounded-3xl bg-white/[0.03] ring-1 ring-white/10 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-6 md:p-10">
            <div className="text-sm text-white/60">{PRACTICE.providerTitleLine}</div>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">
              {PROVIDER.h1}
            </h1>
            <div className="mt-3 text-white/70">{PROVIDER.intro}</div>

            <div className="mt-6 grid gap-3">
              {PROVIDER.sections.highlights.map((h) => (
                <div key={h} className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 px-5 py-4">
                  <div className="text-sm text-white/85">{h}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[280px] md:min-h-[420px]">
            <Image
              src={MEDIA.provider.portrait}
              alt="Provider portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <Section title="Provider Approach" subtitle="Edit these blocks in src/content/pages/provider.ts.">
        <div className="grid gap-4 md:grid-cols-2">
          {PROVIDER.sections.bioBlocks.map((b) => (
            <div key={b.title} className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
              <div className="text-white font-semibold">{b.title}</div>
              <div className="mt-2 text-sm text-white/70">{b.body}</div>
            </div>
          ))}
        </div>
      </Section>

      <CTA
        title="Want a candidacy check and a real plan?"
        body="Schedule a free consultation. Fast follow-up and clear pricing."
      />
    </div>
  );
}
