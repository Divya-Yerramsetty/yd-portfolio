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
    keyframes: {
      'fade-in-down': {
        '0%': {opacity: '0', transform: 'translateY(-20px)'},
        '100%': {opacity: '1',transform: 'translateY(0)'},
      },
      'fade-in-right': {
        '0%': {opacity: '0', transform: 'translateX(20px)'},
        '100%': {opacity: '1',transform: 'translateX(0)'},
      },
      'fade-in-up': {
        '0%': {opacity: '0', transform: 'translateY(20px)'},
        '100%': { opacity: '1', transform: 'translateY(0)'},
      },
      'fade-in-left': {
        '0%': { opacity: '0', transform: 'translateX(-20px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' }
      },
      'typing': {
        'from': { width: "0" },
        'to': { width: "14ch" }
      },
      'blink': {
        '0%': { "border-right-color": "transparent" },
        '100%': { "border-right-color": "black" },
      }      
    },
    animation: {
      'fade-in-down': 'fade-in-down 1s ease-out',
      'fade-in-right': 'fade-in-right 1s ease-out',
      'fade-in-up': 'fade-in-up 1s ease-out',
      'fade-in-left': 'fade-in-left 1s ease-out',
      //'typing': 'typing 2s steps(60), blink 0.1s'
      'typing': 'typing 1.5s steps(14)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

