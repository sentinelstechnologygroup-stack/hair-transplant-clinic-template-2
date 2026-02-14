"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { MEDIA } from "@/content/media.manifest";

export default function BeforeAfterGrid({ items = MEDIA.beforeAfter }: { items?: readonly string[] }) {
  const safe = useMemo(() => (items?.length ? [...items] : []), [items]);
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const current = safe[idx];

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {safe.map((src, i) => (
          <button
            key={src}
            className="group relative overflow-hidden rounded-2xl bg-white/[0.03] ring-1 ring-white/10"
            onClick={() => {
              setIdx(i);
              setOpen(true);
            }}
            aria-label={`Open before/after ${i + 1}`}
          >
            <Image
              src={src}
              alt="Before and after hair transplant result"
              width={600}
              height={450}
              className="h-36 w-full object-cover opacity-95 transition group-hover:opacity-100 md:h-44"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </button>
        ))}
      </div>

      {open && current ? (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-4xl overflow-hidden rounded-3xl bg-[#050a14] ring-1 ring-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <div className="text-sm text-white/70">Before / After</div>
              <button
                className="rounded-full bg-white/10 px-3 py-1 text-sm text-white ring-1 ring-white/15"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="relative">
              <Image
                src={current}
                alt="Before and after hair transplant result enlarged"
                width={1200}
                height={900}
                className="h-[60vh] w-full object-contain bg-black/30"
              />
              <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-3">
                <button
                  className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/15"
                  onClick={() => setIdx((v) => (v - 1 + safe.length) % safe.length)}
                >
                  Prev
                </button>
                <button
                  className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/15"
                  onClick={() => setIdx((v) => (v + 1) % safe.length)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
