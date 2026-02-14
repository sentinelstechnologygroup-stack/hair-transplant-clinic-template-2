/**
 * Gravity Forms embed placeholder.
 *
 * Replace the contents of this component with your Gravity Forms embed snippet
 * (script+iframe) for each practice.
 *
 * IMPORTANT: For PPC/SEO templates, prefer the official embed provided by Gravity.
 * If you later switch form providers, replace this component only (no page changes).
 */
export default function GravityFormEmbed() {
  return (
    <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6 text-white/70">
      <div className="text-white font-semibold">Gravity Form Placeholder</div>
      <p className="mt-2 text-sm">
        Paste your Gravity Forms embed code into <code className="rounded bg-black/40 px-1">src/components/GravityFormEmbed.tsx</code>.
      </p>

      <div className="mt-4 rounded-xl bg-black/30 p-4 text-xs text-white/60">
        Example (do not use as-is): <br />
        {"<iframe src='https://your-site.com/gravityforms?...'></iframe>"}
      </div>
    </div>
  );
}
