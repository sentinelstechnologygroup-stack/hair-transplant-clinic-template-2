export default function TrustBar({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10">
      <div className="grid gap-3 px-5 py-4 md:grid-cols-3 md:px-8">
        {items.map((t) => (
          <div key={t} className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-white/70" />
            <div className="text-sm text-white/80">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
