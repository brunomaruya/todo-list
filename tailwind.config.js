const { colors } = require("./src/styles/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPurple: colors.darkPurple,
        lightPurple: colors.lightPurple,
        green: colors.green,
        bg: colors.bg,
        itemBg: colors.itemBg,
        text: colors.text,
      },
    },
  },
  plugins: [],
};
