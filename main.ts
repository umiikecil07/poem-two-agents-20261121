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

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
console.log(`Wrote ${[...poem].length} characters to ${join(outDir, "entry.txt")}`);
