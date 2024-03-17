/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      bgColor: "#D9D9D9",
      primary: "#5534A5",
      primaryDark: "#3f1c92",
      dashboardPrimary: "#6C4AB6",
      dashboardSecondary: "#B9E0FF",
      dashboardNursery: "#8D72E1",
      dashboardPreNursery: "#8D9EFF",
      warning: "#FFB765",
      white: "#fff",
      textColor: "#575757",
      black: colors.black,
      secondary: "#A85CF9",
      red: colors.red,
      zinc: colors.gray,
      purple: colors.purple,
      slate: colors.slate,
      blue: colors.blue,
      gray: colors.gray,
    },
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        josefineSans: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
