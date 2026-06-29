import type { Config } from "tailwindcss";

// Palette + type scale sourced from ui-ux-pro-max (B2B Service / Modern Professional)
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0F172A", foreground: "#FFFFFF" },
        secondary: { DEFAULT: "#334155", foreground: "#FFFFFF" },
        accent: { DEFAULT: "#0369A1", foreground: "#FFFFFF" },
        background: "#F8FAFC",
        foreground: "#020617",
        card: { DEFAULT: "#FFFFFF", foreground: "#020617" },
        muted: { DEFAULT: "#E8ECF1", foreground: "#64748B" },
        border: "#E2E8F0",
        destructive: { DEFAULT: "#DC2626", foreground: "#FFFFFF" },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-open-sans)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
