/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
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
        accent: {
          DEFAULT: "#B965FB",
          100: "#e6ccff",
          200: "#d9b0ff",
          300: "#cc94ff",
          400: "#bf78ff",
          500: "#b965fb",
          600: "#a85aec",
          700: "#9750d2",
          800: "#8645b7",
          900: "#733a9d",
        },
      },
      backgroundImage: {
        "gradient-dark":
          "radial-gradient(76.33% 76.59% at 50.15% 6.06%, #343531 0%, rgba(26, 26, 26, 0.38) 100%)",
        "gradient-light":
          "radial-gradient(76.33% 76.59% at 50.15% 6.06%, #f5f5f5 0%, rgba(26, 26, 26, 0.38) 100%)",
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
    plugins: [],
  },
};
