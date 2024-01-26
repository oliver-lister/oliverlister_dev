import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#343531",
          100: "#0a0b0a",
          200: "#151514",
          300: "#1f201d",
          400: "#2a2a27",
          500: "#343531",
          600: "#5e5f58",
          700: "#878980",
          800: "#afb1aa",
          900: "#d7d8d5",
        },
        secondary: {
          DEFAULT: "#f5f5f5",
          100: "#313131",
          200: "#626262",
          300: "#939393",
          400: "#c4c4c4",
          500: "#f5f5f5",
          600: "#f7f7f7",
          700: "#f9f9f9",
          800: "#fbfbfb",
          900: "#fdfdfd",
        },
      },
    },
    plugins: [],
  },
};
export default config;
