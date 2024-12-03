import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "rgb(36,36,36)",
        background: "hsl(var(--background))",
        orange: "hsl(var(--orange))",
        orangeForeground: "hsl(var(--orange-foreground))",
        photobg: "rgb(28, 29, 37)",
        border: "hsl(var(--border))",
        success: "rgb(75, 181, 67)",
        foreground: "hsl(var(--foreground))",
        mailButtonBg: "hsl(var(--mail-button-bg))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateY(3px)",
          },
          "100%": {
            transform: "translateY(-3px)",
          },
        },
      },
      animation: {
        scroll: "scroll 1s infinite alternate-reverse",
      },
      scale: {
        "108": "1.08",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [animatePlugin],
} satisfies Config;
