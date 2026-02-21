/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Si tienes componentes fuera de src, añade sus rutas aquí
  ],
  theme: {
    extend: {
      colors: {
        // Paleta común a Home, Cursos y Detalles
        bg: {
          DEFAULT: "#0f1720", // fondo base
          elev: "#121b26",    // opcional: superficies elevadas
        },
        textc: {
          DEFAULT: "#e6edf4", // texto principal
          muted: "#9aa8b6",   // subtítulos y notas
        },
        accent: {
          DEFAULT: "#7cc2ff", // enlaces/CTA
          hover: "#a6d8ff",   // hover enlaces/CTA
        },
        divider: "#1f2a36",   // separadores
      },
      // Tamaños alineados con el “look & feel” de Home.jsx
      fontSize: {
        h1: ["36px", { lineHeight: "1.25", letterSpacing: "0.2px" }],
        "h1-sm": ["28px", { lineHeight: "1.25", letterSpacing: "0.2px" }],
        h2: ["24px", { lineHeight: "1.3" }],
        "h2-sm": ["22px", { lineHeight: "1.3" }],
        h3: ["20px", { lineHeight: "1.35" }],
        "h3-sm": ["18px", { lineHeight: "1.35" }],
      },
      // Por si quieres un contenedor consistente
      maxWidth: {
        content: "880px",
        shell: "1100px",
      },
    },
  },
  plugins: [
    // Recomendado sólo si rendereas contenido largo (Markdown u otros)
    // require("@tailwindcss/typography"),
  ],
};