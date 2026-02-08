import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "text-yellow-400",
  ],
  theme: {
    extend: {
      colors: {

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.7',
            transform: 'scale(1) translateX(0)',
            boxShadow: '0 0 0px rgba(234, 179, 8, 0)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.08) translateX(-8px)',
            boxShadow: '0 0 25px rgba(234, 179, 8, 0.7)',
          },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 1.2s ease-in-out 2',
      },
    },
  },
  plugins: [],
} satisfies Config;
