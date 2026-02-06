import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4e51ff",
          50: "#f3f4fc",
          500: "#4e51ff",
          700: "#2d2f99",
        },
        neutral: {
          50: "#f3f4fc",
          900: "#111111",
        },
        accent: {
          orange: "#ff9900",
        },
      },
      fontFamily: {
        sans: ["e-Ukraine", "system-ui", "sans-serif"],
        heading: ["e-UkraineHead", "e-Ukraine", "system-ui"],
      },
      borderRadius: {
        full: "100px",
        card: "16px",
      },
      borderWidth: {
        thin: "0.75px",
      },
    },
  },
  plugins: [],
};
export default config;
