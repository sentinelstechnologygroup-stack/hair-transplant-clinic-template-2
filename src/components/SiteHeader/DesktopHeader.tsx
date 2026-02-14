import Link from "next/link";
import { PRACTICE } from "@/content/practice.config";

const nav = [
  { href: "/", label: "Home" },
  { href: "/provider", label: "Provider" },
  { href: "/neograft", label: "NeoGraft" },
  { href: "/free-consultation", label: "Free Consultation" }
];

export default function DesktopHeader() {
  return (
    <div className="hidden md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/10" />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-aurora-50">
              {PRACTICE.brandName}
            </div>
            <div className="text-xs text-white/60">{PRACTICE.tagline}</div>
          </div>
        </Link>

        <nav className="flex items-center gap-6 text-sm text-white/80">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="hover:text-white">
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${PRACTICE.phoneTel}`}
            className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/15 hover:bg-white/15"
          >
            {PRACTICE.phoneDisplay}
          </a>
          <Link
            href="/free-consultation"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
          >
            Free Consultation
          </Link>
        </div>
      </div>
      <div className="h-px w-full bg-white/10" />
    </div>
  );
}
