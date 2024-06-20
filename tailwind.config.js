/** @type {import('tailwindcss').Config} */
const colors = import('tailwindcss/colors')
export default {
  content: ['./src/**/*.{js,vue,ts}'],
  theme: {
    colors: {
      ac: '#FFB765',
      pc: '#A95CF9',
      pc2: '#5634A5',
      sc1: '#4C7CE5',
      sc2: '#70DFDF',
      outline: '#727272',
      bg_color: '#D9D9D9',
      textColor: '#575757',
      ac: '#FFB765',
      bgColor: '#F9F9F9',
      footerBg: '#D9D9D9',
      primary: '#5534A5',
      primaryDark: '#3f1c92',
      dashboardPrimary: '#6C4AB6',
      dashboardSecondary: '#B9E0FF',
      dashboardNursery: '#8D72E1',
      dashboardPreNursery: '#8D9EFF',
      warning: '#FFB765',
      white: '#FFFFFF',
      secondary: '#A85CF9',
      red: colors.red,
      zinc: colors.gray,
      purple: colors.purple,
      slate: colors.slate,
      blue: colors.blue,
      gray: colors.gray,
      black: '#000000'
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        josefineSans: ['Josefin Sans', 'sans-serif'],
        plusJakarta: ['Plus Jakarta Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
