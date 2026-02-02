/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf9f0',
          100: '#f9f0d9',
          200: '#f2dfb3',
          300: '#e8c87d',
          400: '#dda94a',
          500: '#d4922a',
          600: '#c67820',
          700: '#a45a1d',
          800: '#85481f',
          900: '#6d3c1d',
          950: '#3a1e0d',
        },
        dima: {
          cream: '#faf8f5',
          grey: '#6b7280',
          'grey-light': '#9ca3af',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
