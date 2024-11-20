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
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
} satisfies Config;
