import Link from "next/link";

export default function CTA({
  title,
  body,
  primaryLabel = "Free Consultation",
  primaryHref = "/free-consultation"
}: {
  title: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 shadow-[0_25px_80px_-60px_rgba(0,0,0,0.9)]">
      <div className="px-6 py-8 md:px-10 md:py-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <div className="text-2xl md:text-3xl font-semibold text-white">{title}</div>
          <p className="mt-2 text-white/70">{body}</p>
        </div>
        <Link
          href={primaryHref}
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
        >
          {primaryLabel}
        </Link>
      </div>
    </div>
  );
}
