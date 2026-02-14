import Link from "next/link";
import { PRACTICE } from "@/content/practice.config";

export default function SiteFooter() {
  const loc = PRACTICE.locations[0];

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/70">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-white font-semibold">{PRACTICE.brandName}</div>
            <div className="mt-2 text-white/60">{PRACTICE.tagline}</div>

            {/* External action (phone) stays <a> */}
            <a
              className="mt-3 inline-block text-white hover:underline"
              href={`tel:${PRACTICE.phoneTel}`}
            >
              {PRACTICE.phoneDisplay}
            </a>
          </div>

          <div>
            <div className="text-white font-semibold">Location</div>
            <div className="mt-2 text-white/60">
              {loc.addressLine1}
              {loc.addressLine2 ? `, ${loc.addressLine2}` : ""}
              <br />
              {loc.city}, {loc.state} {loc.postalCode}
            </div>
          </div>

          <div>
            <div className="text-white font-semibold">Pages</div>
            <div className="mt-2 flex flex-col gap-2 text-white/70">
              {/* Internal nav uses <Link> */}
              <Link className="hover:text-white" href="/">
                Home
              </Link>
              <Link className="hover:text-white" href="/provider">
                Provider
              </Link>
              <Link className="hover:text-white" href="/neograft">
                NeoGraft
              </Link>
              <Link className="hover:text-white" href="/free-consultation">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-white/40">
          © {new Date().getFullYear()} {PRACTICE.brandName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
