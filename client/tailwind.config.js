/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Croki color pallete
        croki: {
          100: '#A9E2AC',
          200: '#77CC7D',
          300: '#4CAF52',
          400: '#2D9434',
          500: '#15781B'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
