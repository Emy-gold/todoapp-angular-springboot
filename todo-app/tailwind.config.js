/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ee2b8c",
        "primary-hover": "#d41b78",
        "background-light": "#fdf8fa",
      },
      fontFamily: {
        "display": ["Inter"]
      },
    },
    plugins: [

    ],
  }
}
