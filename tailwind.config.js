/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./static/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#F7763D",
          light: "#f7763d21",
          dark: "#f55a18",
        },
      },
    },
  },
  plugins: [],
};
