/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      /*
      backgroundImage: {
        blur: 'url(./src/assets/blur-background.png)'
      },
      */

      fontFamily: {
        sans: "'Poppins', sans-serif;",
        oleo: "'Oleo Script', cursive;"
      },

      colors: {
        green: {
          300: '#12B37E'
        },
        blue: {
          500: '#81D8F7'
        }
      }
    }
  },
  plugins: []
}
