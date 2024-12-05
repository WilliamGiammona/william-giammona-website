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
        spinSlow: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        float1: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(10px, 10px)" },
        },
        float2: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(-10px, 10px)" },
        },
        float3: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(10px, -10px)" },
        },
        float4: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(-10px, -10px)" },
        },
        float5: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(15px, 5px)" },
        },
        float6: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(-5px, 15px)" },
        },
        float7: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(5px, -15px)" },
        },
        float8: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(-15px, -5px)" },
        },
        float9: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(8px, 8px)" },
        },
      },
      animation: {
        scroll: "scroll 1s infinite alternate-reverse",
        spinSlow: "spinSlow 2s linear infinite",
        spinSlower: "spinSlow 2s linear infinite",
        spinSlowest: "spinSlow 2s linear infinite",
        float1: "float1 4s ease-in-out infinite",
        float2: "float2 4s ease-in-out infinite",
        float3: "float3 4s ease-in-out infinite",
        float4: "float4 4s ease-in-out infinite",
        float5: "float5 5s ease-in-out infinite",
        float6: "float6 5s ease-in-out infinite",
        float7: "float7 5s ease-in-out infinite",
        float8: "float8 5s ease-in-out infinite",
        float9: "float9 5s ease-in-out infinite",
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
