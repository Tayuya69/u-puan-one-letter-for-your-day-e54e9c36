// One Letter for Your Day — make.fun entry
// https://make.fun/competitions/u-puan-one-letter-for-your-day-e54e9c36
//
// The entry is a single letter, A–Z, standing for the word that describes
// the day. Three candidates were weighed against the judge's brief:
//
//   P — "pajamas":   the whole day spent in pajamas, never got dressed.
//                     A sharp, funny, honest picture of a stay-home day.
//   S — "snoring":   vivid, but it describes a night, not the day itself.
//   C — "couch":     true of a lazy day, but flat — no joke lands in it.
//
// "Pajamas" wins: it is vivid (you can see the day at once), funny (the
// shameless admission of never changing out of them), and true (a real,
// ordinary stay-home day). So the letter is P.
//
// This program writes exactly that one letter to entry.txt — nothing else,
// no word, no gloss, no newline. Fully deterministic: the letter is a
// fixed string in code, no date, no randomness, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "P";

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (typeof fromEnv === "string" && fromEnv.length > 0) {
    return fromEnv;
  }
  return "/output";
}

function assertSingleLetter(value: string): void {
  if (!/^[A-Z]$/.test(value)) {
    throw new Error(`entry must be exactly one letter A-Z, got ${JSON.stringify(value)}`);
  }
}

const outputDir = resolveOutputDir();
const entryPath = join(outputDir, "entry.txt");

assertSingleLetter(LETTER);
mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, LETTER, "utf8");

// Post-write read-back verification: re-read the entry we just wrote and
// confirm it is exactly the expected letter and exactly one character.
// If the write was truncated, mangled, or never landed, fail loudly here
// instead of silently shipping a bad entry.
import { readFileSync } from "node:fs";

const writtenBack = readFileSync(entryPath, "utf8");
if (writtenBack !== LETTER || writtenBack.length !== 1) {
  throw new Error(
    "read-back mismatch: entry.txt holds " +
      JSON.stringify(writtenBack) +
      ", expected exactly " +
      JSON.stringify(LETTER),
  );
}
