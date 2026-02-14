/**
 * Utility: split a concatenated "View Page Source" dump into individual HTML snapshots.
 * Usage:
 *   node tools/extract-wp-snapshots.mjs path/to/dump.txt
 *
 * Output:
 *   src/_wp_snapshots/*.html
 *   src/_wp_snapshots/manifest.json
 */
import fs from "node:fs";
import path from "node:path";

const input = process.argv[2];
if (!input) {
  console.error("Provide path to the concatenated dump file.");
  process.exit(1);
}

const raw = fs.readFileSync(input, "utf8");
const parts = raw.split(/(?=<!doctype html>)/i).filter((p) => p.trim().length);

const outDir = path.join(process.cwd(), "src", "_wp_snapshots");
fs.mkdirSync(outDir, { recursive: true });

const manifest = [];

for (let i = 0; i < parts.length; i++) {
  const html = parts[i];
  const titleMatch = html.match(/<title>\s*([\s\S]*?)\s*<\/title>/i);
  const title = (titleMatch?.[1] ?? `page-${i + 1}`).trim();
  const safe = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const file = `${String(i + 1).padStart(2, "0")}-${safe}.html`;

  fs.writeFileSync(path.join(outDir, file), html, "utf8");
  manifest.push({ index: i + 1, title, file: `src/_wp_snapshots/${file}` });
}

fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log("Wrote", manifest.length, "snapshots to", outDir);
