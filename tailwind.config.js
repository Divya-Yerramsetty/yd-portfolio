const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        extraLarge: '12rem'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      teal: colors.teal,
      cyan: colors.cyan,
      yellow: colors.yellow,
      orange: colors.orange,
      pink: colors.pink,
      yellow: colors.yellow,
      purple:colors.purple,
      blue:colors.blue,
      green:colors.green,
      indigo:colors.indigo
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

