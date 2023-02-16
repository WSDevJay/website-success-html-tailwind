/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./marketplace_builder/html/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans"],
      },
      colors: {
        "primary-yellow": "#e8e20c",
        "primary-blue": "#31A7E0",
        "primary-dark": "#313D47",
        "primary-light": "#EBECEC",
      },
      maxWidth: {
        "screen-base": "1320px",
      },
    },
  },
};

/* npx tailwindcss -i ./src/input.css -o ./marketplace_builder/assets/css/output.css --watch */
