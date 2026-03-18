/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './data/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#F5F0EB',
          100: '#EAE0D0',
          200: '#D8C8B0',
          300: '#C4A880',
          400: '#B09060',
          500: '#7A5C30',
          600: '#6A4C24',
          700: '#5A3C1C',
          800: '#4A3418',
          900: '#362610',
          950: '#281C08',
        },
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
