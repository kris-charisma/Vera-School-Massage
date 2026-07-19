/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#D4AF37',
          500: '#C5A028',
          600: '#B08D22',
        },
        teal: {
          800: '#004d40',
          900: '#00332a',
        },
        emerald: {
          700: '#047857',
        },
        lavender: '#E6E6FA',
        'soft-pink': '#FADADD',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
