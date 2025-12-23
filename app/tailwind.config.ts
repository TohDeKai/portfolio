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
        bg: "#030101",
        secondary: {
          DEFAULT: "#152028",
          light: "#3E5D70",
        },
        primary: {
          DEFAULT: "#E71321",
          light: "#F16F78",
        },
        text: {
          DEFAULT: "#fdf0d5",
          faint: "#524e45",
          secondary: "#A39B8A",
          black: "#000000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
