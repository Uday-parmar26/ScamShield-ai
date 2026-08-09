/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        cyber: {
          50: "#f0fdf4",
          100: "#dcfce7",
          500: "#10b981",
          600: "#059669",
          900: "#064e3b",
          dark: "#0a0f1d",
          card: "#111827",
          border: "#1f2937",
        },
        risk: {
          critical: "#ef4444",
          high: "#f97316",
          moderate: "#eab308",
          low: "#10b981",
        }
      },
      animation: {
        "pulse-glow": "pulseGlow 2s infinite ease-in-out",
        "scan-line": "scanLine 3s infinite linear",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.02)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        }
      }
    },
  },
  plugins: [],
}
