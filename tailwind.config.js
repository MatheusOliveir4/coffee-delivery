/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        header: ['Baloo2', 'sans-serif'],
        body: 'Roboto',
      },
    },
  },
  plugins: [],
}
