/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#282836',
          200: '#09090a',
          300: '#09090a',
          400: '#565666',
          500: '#17161D',
        },
        grey: {
          100: '#eae9ed',
          200: '#767688',
          300: '#353547',
          400: '#79798B',
          500: '#42424E',
        },
        primary: {
          100: '#621df5',
          200: '#4b09d6',
          300: '#9452f7',
        },
        secondary: {
          100: '#1CA6CE',
        },
        success: {
          100: '#2CC23F',
        },
        error: {
          100: '#AC2E1D',
        },
      },
      screens: {
        xs: '490px',
      },
    },
  },
  plugins: [],
};
