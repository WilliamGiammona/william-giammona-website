import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "rgb(36,36,36)",
        background: "rgb(245,245,245)",
        orange: "rgb(240, 100, 73)",
        photobg: "rgb(28, 29, 37)",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(3px)" },
          "100%": { transform: "translateY(-3px)" },
        },
      },
      animation: {
        scroll: "scroll 1s infinite alternate-reverse",
      },
      scale: {
        "108": "1.08",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
} satisfies Config;
