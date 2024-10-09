/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./static/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#FF5023",
          light: "#f7763d21",
          dark: "#f44317",
        },
      },
    },
  },
  plugins: [],
};
