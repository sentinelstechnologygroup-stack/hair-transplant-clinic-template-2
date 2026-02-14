import Section from "@/components/Section";
import CTA from "@/components/CTA";
import GravityFormEmbed from "@/components/GravityFormEmbed";
import { FREE_CONSULTATION } from "@/content/pages/free-consultation";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Free Consultation",
  description: "Request a free consultation and get a clear plan and pricing."
};

export default function FreeConsultationPage() {
  return (
    <div className="space-y-10 md:space-y-14">
      <div className="rounded-3xl bg-white/[0.03] ring-1 ring-white/10 px-6 py-10 md:px-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">{FREE_CONSULTATION.h1}</h1>
        <p className="mt-3 max-w-3xl text-white/70">{FREE_CONSULTATION.intro}</p>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {FREE_CONSULTATION.sections.bullets.map((b) => (
            <div key={b} className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 px-5 py-4">
              <div className="text-sm text-white/85">{b}</div>
            </div>
          ))}
        </div>
      </div>

      <Section title={FREE_CONSULTATION.form.title} subtitle={FREE_CONSULTATION.form.note}>
        <GravityFormEmbed />
      </Section>

      <CTA
        title="Prefer to call instead?"
        body="Tap to call and we’ll get you scheduled quickly."
        primaryLabel="Call Now"
        primaryHref="tel:+19415550123"
      />
    </div>
  );
}
