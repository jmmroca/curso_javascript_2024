// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0f1720", // ya lo tienes
          elev: "#121b26",    // ya lo tienes (si lo dejaste)
          backdrop: "#0e1620" // ← nuevo token para el 0%
        },
        textc: { DEFAULT: "#e6edf4", muted: "#9aa8b6" },
        accent: { DEFAULT: "#7cc2ff", hover: "#a6d8ff" },
        divider: "#1f2a36",
      },
      fontSize: {
        h1: ["36px", { lineHeight: "1.25", letterSpacing: "0.2px" }],
        "h1-sm": ["28px", { lineHeight: "1.25", letterSpacing: "0.2px" }],
        h2: ["24px", { lineHeight: "1.3" }],
        "h2-sm": ["22px", { lineHeight: "1.3" }],
        h3: ["20px", { lineHeight: "1.35" }],
        "h3-sm": ["18px", { lineHeight: "1.35" }],
      },
      maxWidth: { content: "880px", shell: "1100px" },
    },
  },
  plugins: [],
};