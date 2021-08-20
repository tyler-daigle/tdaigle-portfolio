const defaultTheme = require("tailwindcss/defaultTheme");

// set NODE_ENV to production to purge
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
