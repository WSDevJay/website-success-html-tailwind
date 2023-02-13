/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/marketplace_builder/html/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito Sans'],
      },
      colors: {
        'primary-yellow': '#e8e20c',
      },
    },
  },
  plugins: [],
}
