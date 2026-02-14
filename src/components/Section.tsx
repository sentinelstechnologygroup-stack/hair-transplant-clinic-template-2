import { ReactNode } from "react";

export default function Section({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl bg-white/[0.03] ring-1 ring-white/10">
      <div className="px-5 py-8 md:px-10 md:py-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">{title}</h2>
          {subtitle ? (
            <p className="mt-2 text-white/70">{subtitle}</p>
          ) : null}
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
