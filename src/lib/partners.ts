import fs from "node:fs";
import path from "node:path";

export type Partner = { name: string; logo: string };

// Reads every logo in /public/partners at build time. Drop a PNG in, it appears.
// Order = filename order, so prefix files like 01-name.png to control sequence.
export function getPartners(): Partner[] {
  try {
    const dir = path.join(process.cwd(), "public", "partners");
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(png|jpe?g|webp|svg)$/i.test(f))
      .sort()
      .map((f) => ({
        logo: f,
        name: f.replace(/\.[^.]+$/, "").replace(/^\d+[-_]/, "").replace(/[-_]+/g, " ").trim(),
      }));
  } catch {
    return [];
  }
}
