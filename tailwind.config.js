/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '20px',
      xl: '24px',
      xxl: '32px',
      jumbo: '48px',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    colors: {
      ...defaultTheme.colors,
      gradient1: "#FEFAED",
      gradient2: "#CBEFFB",
      blue:{
        50: "#EAF2FD",
        500: "#2F80ED",
        900: "#143664",
        800: "#1A4682",
      },
      white:{
        50: "#FEFEFE",

      },
      gray:{
        500:"#828282",
      }
    }
  },
  plugins: [],
}
