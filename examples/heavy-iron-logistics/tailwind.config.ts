import type { Config } from "tailwindcss";

// Palette: ui-ux-pro-max "Construction/Architecture" (steel slate + safety orange),
// adapted to a dark industrial theme. Type: "Bold Statement" (Bebas Neue + Source Sans 3).
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark steel surfaces
        ink: "#0B0F14", // page background (near-black steel)
        surface: "#121922", // cards / panels
        "surface-2": "#1A232E", // raised panels
        steel: {
          DEFAULT: "#64748B",
          dark: "#334155",
          light: "#94A3B8",
        },
        // Safety orange accent
        safety: {
          DEFAULT: "#EA580C",
          hi: "#F97316",
          lo: "#C2410C",
        },
        foreground: "#E6EBF1",
        muted: "#8B97A3",
        line: "#243140", // borders on dark
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        sans: ["var(--font-source)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        display: "0.02em",
      },
      backgroundImage: {
        "hazard": "repeating-linear-gradient(45deg, #EA580C 0 14px, #0B0F14 14px 28px)",
      },
    },
  },
  plugins: [],
};

export default config;
