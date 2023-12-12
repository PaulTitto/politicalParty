/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue, js, ts, jsx, tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'gray': '#B8B8B8'
      }
    },
  },
  plugins: [],
}

