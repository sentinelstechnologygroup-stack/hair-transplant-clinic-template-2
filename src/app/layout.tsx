import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SEO } from "@/content/seo.config";
import { PRACTICE } from "@/content/practice.config";
import Script from "next/script";
import { localBusinessJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: {
    default: SEO.defaultTitle,
    template: `%s | ${SEO.siteName}`
  },
  description: SEO.defaultDescription
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-aurora-950 text-aurora-50">
        {/* Soft bands to break up black (luxury look) */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute top-[35%] left-[-180px] h-[520px] w-[520px] rounded-full bg-white/4 blur-3xl" />
          <div className="absolute top-[70%] right-[-220px] h-[520px] w-[520px] rounded-full bg-white/4 blur-3xl" />
        </div>

        {/* JSON-LD */}
        <Script
          id="jsonld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />

        <SiteHeader />

        <main className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}
