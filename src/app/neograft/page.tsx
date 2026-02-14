import Image from "next/image";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import { NEOGRAFT } from "@/content/pages/neograft";
import { MEDIA } from "@/content/media.manifest";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "NeoGraft",
  description: "NeoGraft/FUE procedure overview and candidacy details."
};

export default function NeograftPage() {
  return (
    <div className="space-y-10 md:space-y-14">
      <div className="rounded-3xl bg-white/[0.03] ring-1 ring-white/10 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-semibold text-white">{NEOGRAFT.h1}</h1>
            <p className="mt-3 text-white/70">{NEOGRAFT.intro}</p>

            <div className="mt-6 grid gap-3">
              {NEOGRAFT.sections.bullets.map((b) => (
                <div key={b} className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 px-5 py-4">
                  <div className="text-sm text-white/85">{b}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[280px] md:min-h-[420px]">
            <Image
              src={MEDIA.procedures.neograft}
              alt="NeoGraft procedure"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <Section title="Details" subtitle="Conversion-safe, short blocks. Keep it skimmable.">
        <div className="grid gap-4 md:grid-cols-2">
          {NEOGRAFT.sections.blocks.map((b) => (
            <div key={b.title} className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
              <div className="text-white font-semibold">{b.title}</div>
              <div className="mt-2 text-sm text-white/70">{b.body}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title={NEOGRAFT.sections.faq.title} subtitle="Edit in src/content/pages/neograft.ts.">
        <div className="grid gap-4 md:grid-cols-2">
          {NEOGRAFT.sections.faq.items.map((f) => (
            <div key={f.q} className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
              <div className="text-white font-semibold">{f.q}</div>
              <div className="mt-2 text-sm text-white/70">{f.a}</div>
            </div>
          ))}
        </div>
      </Section>

      <CTA
        title="Get an exact plan for NeoGraft FUE"
        body="Book a free consultation to review candidacy, timeline, and pricing."
      />
    </div>
  );
}
