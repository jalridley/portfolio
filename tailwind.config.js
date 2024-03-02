/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    screens: {
      xs: '390px',
      // => @media (min-width: 390px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }

      '3xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        purple: {
          300: '#B3A5F9',
          400: '#8974ED',
          500: '#6E55E1',
          700: '#4622BB',
          800: '#3702A8',
          DEFAULT: '#583FCF',
        },
      },
      keyframes: {
        'anim-bounce': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        'icon-bounce': 'anim-bounce 2s 1 ease',
      },
      boxShadow: {
        '3xl': '0 0 25px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        belsey: ['Belsey'],
        raleway: ['Raleway'],
      },
    },
  },
  plugins: [],
}
