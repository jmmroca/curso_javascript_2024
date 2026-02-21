// scripts/migrate-tailwind-tokens.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");
const exts = new Set([".js", ".jsx", ".ts", ".tsx"]);

const REPLACEMENTS = [
  { from: /\btext-\[#e6edf4\]\b/g, to: "text-textc" },                // texto principal
  { from: /\btext-\[#9aa8b6\]\b/g, to: "text-textc-muted" },          // texto muted
  { from: /\btext-\[#7cc2ff\]\b/g, to: "text-accent" },               // enlaces/CTA
  { from: /\bhover:text-\[#a6d8ff\]\b/g, to: "hover:text-accent-hover" },
  { from: /\bdivide-\[#1f2a36\]\b/g, to: "divide-divider" },          // separadores
  {
    // fondo radial: ancla el color final al token bg.DEFAULT
    from: /bg-\[radial-gradient\(1200px_700px_at_15%_0%,#0e1620_0%,#0f1720_60%\)\]/g,
    to: "bg-[radial-gradient(1200px_700px_at_15%_0%,#0e1620_0%,theme(colors.bg.DEFAULT)_60%)]",
  },
];

let scanned = 0, changed = 0, files = [];

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (exts.has(path.extname(e.name))) processFile(full);
  }
}
function processFile(file) {
  let src = fs.readFileSync(file, "utf8");
  scanned++;
  let out = src;
  for (const { from, to } of REPLACEMENTS) out = out.replace(from, to);
  if (out !== src) {
    fs.writeFileSync(file, out, "utf8");
    changed++; files.push(file);
  }
}

walk(SRC);
console.log(`OK: escaneados ${scanned} archivos; modificados ${changed}.`);
files.forEach(f => console.log(" -", path.relative(ROOT, f)));