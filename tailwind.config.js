/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.jsx"],
  theme: {
    extend: {
    },
    colors: {
      white: "#ffffff",
      black: {
        primary: "#2d2b28",
        secondary: "#121110",
        100: "#CECECD",
      },
      primary: {
        100: "#C7C5C1",
        200: "#91857E",
        300: "#90847e",
        400: "#E4DDD5",
      },
    },
    fontFamily: {
      sans: ["raleway", "sans-serif"],
      mono: ["\"courier new\"", "courier-ps-w01", "courier-ps-w02", "courier-ps-w10", "monospace"],
    },
  },
  plugins: [],
}

