// scripts/scan-inline-hex.js
// Escanea src/ y lista TODAS las apariciones de [#RRGGBB] en el código.
// Reporta: archivo, nº de línea y un contexto a ambos lados.
// Además, muestra un resumen de colores únicos encontrados y su frecuencia.
//
// Uso:
//   node scripts/scan-inline-hex.js
//
// Opciones (env):
//   SCAN_DIR=path/alternativo   -> directorio a escanear (por defecto: src)
//   EXT=js,jsx,ts,tsx           -> extensiones (por defecto: js,jsx,ts,tsx)
//   CONTEXT=48                  -> nº de chars de contexto a cada lado (por defecto: 40)

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, "..");
const SCAN_DIR = path.join(ROOT, process.env.SCAN_DIR || "src");
const exts = new Set(
  (process.env.EXT || "js,jsx,ts,tsx")
    .split(",")
    .map((s) => "." + s.trim())
);
const CTX = parseInt(process.env.CONTEXT || "40", 10);

// 1) Coincide con cualquier clase Tailwind "arbitrary value" con #RRGGBB,
//    incluyendo mayúsculas/minúsculas y posibles sufijos de opacidad (/xx).
//    Ejemplos detectados: text-[#E6EDF4], bg-[color:...#0f1720], border-[#1F2A36]/50
const HEX_IN_BRACKETS = /\[[^[\]]*#[0-9a-fA-F]{6}[^[\]]*\]/g;

// 2) Útil para contar colores únicos (extrae sólo el #RRGGBB)
const PURE_HEX = /#[0-9a-fA-F]{6}/g;

const matches = []; // { file, line, hex, context }
const hexCount = new Map();

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (exts.has(path.extname(entry.name))) scanFile(full);
  }
}

function scanFile(file) {
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Busca cualquier "[ ... #RRGGBB ... ]" en la línea
    const bracketHits = [...line.matchAll(HEX_IN_BRACKETS)];
    if (bracketHits.length) {
      // Dentro de cada "hit", extrae los hex concretos
      for (const hit of bracketHits) {
        const snippet = hit[0];
        const hexes = [...snippet.matchAll(PURE_HEX)].map((m) => m[0]);
        if (hexes.length) {
          // Guarda contexto ampliado a ambos lados
          const start = Math.max(0, hit.index - CTX);
          const end = Math.min(line.length, hit.index + snippet.length + CTX);
          const ctx = line.slice(start, end);

          for (const hx of hexes) {
            matches.push({
              file,
              line: i + 1,
              hex: hx.toLowerCase(),
              context: ctx,
            });
            hexCount.set(hx.toLowerCase(), (hexCount.get(hx.toLowerCase()) || 0) + 1);
          }
        }
      }
    }
  }
}

// Ejecutar
if (!fs.existsSync(SCAN_DIR)) {
  console.error(`ERROR: no existe el directorio a escanear: ${SCAN_DIR}`);
  process.exit(1);
}

walk(SCAN_DIR);

// Reporte
if (matches.length === 0) {
  console.log("OK: No se han encontrado hex inline del tipo [#RRGGBB] en clases/atributos.");
  process.exit(0);
}

console.log(`\nSe han encontrado ${matches.length} apariciones de hex inline en clases/atributos.\n`);
for (const m of matches) {
  console.log(`• ${path.relative(ROOT, m.file)}:${m.line}`);
  console.log(`  HEX: ${m.hex}`);
  console.log(`  Contexto: …${m.context}…\n`);
}

// Resumen de colores únicos
console.log("Resumen de colores únicos encontrados:");
const sorted = [...hexCount.entries()].sort((a, b) => b[1] - a[1]);
for (const [hx, count] of sorted) {
  console.log(`  ${hx}  →  ${count} uso(s)`);
}

// Sugerencias rápidas de mapeo a tokens conocidos:
const suggestions = {
  "#e6edf4": "textc (texto principal)",
  "#9aa8b6": "textc.muted (texto secundario)",
  "#7cc2ff": "accent (links/CTA)",
  "#a6d8ff": "accent.hover (hover links/CTA)",
  "#1f2a36": "divider (separadores)",
  "#0f1720": "bg.DEFAULT (fondo base)",
  "#121b26": "bg.elev (superficies elevadas)",
};

const usedKnown = sorted.filter(([hx]) => suggestions[hx]);
if (usedKnown.length) {
  console.log("\nSugerencias de tokenización (coinciden con tus tokens actuales):");
  for (const [hx] of usedKnown) {
    console.log(`  ${hx}  →  ${suggestions[hx]}`);
  }
}

console.log("\nSugerencia: crea un PR con estos reemplazos o usa el script de migración para automatizarlos.");