const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./public/*.html", "./src/*.css"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
