import { statSync } from "node:fs";
import { join } from "node:path";

/** Template image slots can contain an empty file until a practice supplies media. */
export function hasLocalMedia(src: string): boolean {
  const file = statSync(join(process.cwd(), "public", src.slice(1)), {
    throwIfNoEntry: false
  });
  return Boolean(file?.isFile() && file.size > 0);
}
