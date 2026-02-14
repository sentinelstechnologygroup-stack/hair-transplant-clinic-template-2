"use client";

import Link from "next/link";
import { useState } from "react";
import { PRACTICE } from "@/content/practice.config";

const nav = [
  { href: "/", label: "Home" },
  { href: "/provider", label: "Provider" },
  { href: "/neograft", label: "NeoGraft" },
  { href: "/free-consultation", label: "Free Consultation" }
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          {/* white file stack placeholder */}
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
            <div className="h-4 w-4 rounded bg-white" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">{PRACTICE.brandName}</div>
            <div className="text-[11px] text-white/60">{PRACTICE.tagline}</div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${PRACTICE.phoneTel}`}
            className="rounded-full bg-white/10 px-3 py-2 text-xs text-white ring-1 ring-white/15"
          >
            {PRACTICE.phoneDisplay}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl bg-white/10 px-3 py-2 text-xs text-white ring-1 ring-white/15"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#050a14]">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="rounded-xl px-3 py-3 text-sm text-white/90 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {i.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="h-px w-full bg-white/10" />
    </div>
  );
}
