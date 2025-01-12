import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        text: "var(--text)",
        p3green: "var(--p3green)",
      },
      boxShadow: {
        "card": "0px 1px 3px 0px var(--text)",
      },
      gridTemplateColumns: {
        "gallery": "repeat(auto-fit, minmax(200px, 1fr))",
      }
    },
  },
  plugins: [],
} satisfies Config;
