// One Word for the Boss — make.fun entry (program/v1, Node 22, stdlib only).
//
// The entry is a single constant word. No network, no Date, no randomness,
// no environment reads: the program is fully deterministic and writes the
// exact same bytes on every run.
//
// Entry word: "arsonist"
// Why this word: the boss who starts the fire, then plays the hero who puts
// it out — manufactured urgency, every week, in every workplace. It is a
// real word a person would actually use about the boss they report to, it
// lands on its own with no caption, it names a specific true habit (create
// the crisis, then take the credit for solving it), it is not the first word
// anyone reaches for (micromanager / tyrant / bossy), and it travels —
// kitchens, warehouses and offices all have fires, literal and otherwise.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry text. Exactly one word, 8 code points, 8 bytes UTF-8.
const ENTRY = "arsonist";

// Gate (competition RULES.txt): /output/entry.txt must be UTF-8 text of
// 1 to 30 characters, not only white space, and a single word (no spaces).
function selfCheck(text: string): void {
  const codePoints = [...text];
  if (codePoints.length < 1 || codePoints.length > 30) {
    throw new Error(
      `gate failed: entry must be 1-30 characters, got ${codePoints.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("gate failed: entry must not be only white space");
  }
  if (/\s/.test(text)) {
    throw new Error("gate failed: entry must be exactly one word (no spaces)");
  }
  if (text !== text.trim()) {
    throw new Error("gate failed: entry must not have leading/trailing space");
  }
}

selfCheck(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
