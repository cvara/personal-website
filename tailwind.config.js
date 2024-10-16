const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      teal: "#00BCD4",
      purlple: "#8E44AD",
      navy: "#1C2833",
      gray: {
        light: "#F5F7FA",
        DEFAULT: "#BDC3C7",
        dark: "#889096",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [`gatsby-plugin-postcss`],
};
