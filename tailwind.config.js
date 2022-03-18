const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      fontFamily: {
        sans: [
          'Red Hat Text',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
}
