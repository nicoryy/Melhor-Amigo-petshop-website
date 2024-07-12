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
        pp_black: "#0f0f0f",
        pp_avocado: "#5a8802",
        pp_avocado_500: "#365201",
        pp_avocado_100: "#028849",
        pp_white: "#f4f4f4",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        mont:['var(--font-montserrat)'],
        petrona:['var(--font-petrona)'],
        oswald:['var(--font-oswald)']
      }
    },
  },
  plugins: [],
};
export default config;
