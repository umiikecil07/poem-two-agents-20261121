import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const lines = [
  "Dua agen, dua kepala, satu kata.",
  "Yang satu bertanya, yang satu menjawab,",
  "tak ada yang menang, tak ada yang kalah —",
  "hanya sepakat yang tumbuh pelan,",
  "seperti dua sungai bertemu di muara,",
  "menjadi satu arus yang tenang.",
];

const poem = lines.join("\n");

// Guard the competition gate before writing: the entry must be UTF-8
// text of 1 to 280 characters (counted as Unicode code points) and not
// only white space. Fail loudly instead of submitting an invalid file.
const length = [...poem].length;
if (length < 1 || length > 280 || poem.trim().length === 0) {
  throw new Error(
    `Poem is ${length} characters; the gate needs 1–280 non-blank characters.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
console.log(`Wrote ${length} characters to ${join(outDir, "entry.txt")}`);
