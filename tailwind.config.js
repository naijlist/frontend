const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors:{
      primary: '#5534A5',
      white: '#fff',
      black: colors.black,
      secondary: '#A85CF9',
      red: colors.red,
      zinc: colors.gray,
      purple: colors.purple,
      slate: colors.slate,
      blue: colors.blue,
      gray: colors.gray,
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}
