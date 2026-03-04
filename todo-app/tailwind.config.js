/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#3A9AFF",
          hover: "#9CD5FF",
        }
      }
    },
  },
  plugins: [

  ],
}

