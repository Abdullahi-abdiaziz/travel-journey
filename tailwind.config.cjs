/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      darkBlue: "#2B283A",
      grayishBlue: "#918E9B",
      lightOrange: "#F55A5A",
      white: "#FFF",
      lightWhite: "#F5F5F5"
    },
    fontFamily: {
      body: "'Fira Sans', sans-serif"
    },
    fontSize: {
      exs:"0.65rem",
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {},
  },
  plugins: [],
}
