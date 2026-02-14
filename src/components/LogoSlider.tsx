import { MEDIA } from "@/content/media.manifest";
import Image from "next/image";

export default function LogoSlider() {
  // Simple static grid (PPC-safe, no JS animation needed). Replace with slider later if desired.
  return (
    <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10">
      <div className="grid grid-cols-2 gap-4 px-5 py-5 md:grid-cols-5 md:px-8">
        {MEDIA.trustLogos.map((src) => (
          <div key={src} className="grid place-items-center rounded-xl bg-white/[0.02] ring-1 ring-white/10 p-3">
            <Image src={src} alt="Trust logo" width={140} height={42} className="h-8 w-auto opacity-90" />
          </div>
        ))}
      </div>
    </div>
  );
}
