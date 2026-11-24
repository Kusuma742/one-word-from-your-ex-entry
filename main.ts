// One Word From Your Ex — writes exactly one word to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "terglincir";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

// Verify the write: the file must hold exactly the word, nothing else.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== WORD || back.length !== 10) {
  throw new Error(`entry.txt must be exactly "${WORD}", got ${JSON.stringify(back)}`);
}
