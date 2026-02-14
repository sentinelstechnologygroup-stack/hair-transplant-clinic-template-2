import Link from "next/link";

export default function Hero({
  headline,
  subheadline,
  bullets,
  ctaLabel = "Free Consultation",
  ctaHref = "/free-consultation",
  badge
}: {
  headline: string;
  subheadline: string;
  bullets: string[];
  ctaLabel?: string;
  ctaHref?: string;
  badge?: string | null;
}) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] ring-1 ring-white/10 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)]">
      <div className="px-6 py-10 md:px-10 md:py-14">
        {badge ? (
          <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/15">
            {badge}
          </div>
        ) : null}

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
          {headline}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-white/70 md:text-lg">
          {subheadline}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            {ctaLabel}
          </Link>
          <div className="text-xs text-white/60">
            Fast response • Discreet scheduling • Clear pricing
          </div>
        </div>

        <div className="mt-7 grid gap-3 md:grid-cols-3">
          {bullets.map((b) => (
            <div key={b} className="rounded-2xl bg-white/[0.03] px-5 py-4 ring-1 ring-white/10">
              <div className="text-sm text-white/80">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
