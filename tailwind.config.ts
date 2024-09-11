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
        black: "#000000",
        white: "#ffffff",
        primary: "#73343A",
        greenOlive: "#808000",
        pinkRose: "#e2c3c4",
        darkBlue: "#55629a",
        gray: "#707070",
        mediumGray: "#c5c2bf",
        lightGray: "#FCFCFC",
      },
    },
  },
  plugins: [],
};
export default config;
