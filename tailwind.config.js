const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  darkMode: "selector",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      teal: {
        light: "#EAF9FB",
        DEFAULT: "#00BCD4",
      },
      purple: {
        light: "#F2E9F4",
        DEFAULT: "#8E44AD",
      },
      navy: "#1C2833",
      gray: {
        light: "#F5F7FA",
        DEFAULT: "#BDC3C7",
        dark: "#889096",
      },
    },
    extend: {
      fontSize: {
        title: [
          "46px",
          {
            lineHeight: "1.2",
            // letterSpacing: '-0.01em',
            fontWeight: "400",
          },
        ],
        titleSm: [
          "34px",
          {
            lineHeight: "1.2",
            // letterSpacing: '-0.01em',
            fontWeight: "400",
          },
        ],
        subtitle: [
          "24px",
          {
            lineHeight: "1.2",
            // letterSpacing: '-0.02em',
            fontWeight: "200",
          },
        ],
        subtitleSm: [
          "21px",
          {
            lineHeight: "1.2",
            // letterSpacing: '-0.02em',
            fontWeight: "200",
          },
        ],
        fine: [
          "14px",
          {
            lineHeight: "20px",
            // letterSpacing: '-0.02em',
            fontWeight: "300",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.45rem",
          },
        ],
      },
    },
  },
  plugins: [`gatsby-plugin-postcss`],
};
