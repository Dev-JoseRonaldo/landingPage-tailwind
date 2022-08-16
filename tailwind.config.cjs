/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      /*
      backgroundImage: {
        blur: 'url(./src/assets/blur-background.png)'
      },
      */

      screens: {
        '2xs': '320px',
        'xs': '480px',
        ...defaultTheme.screens
      },
      /*
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },*/

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
