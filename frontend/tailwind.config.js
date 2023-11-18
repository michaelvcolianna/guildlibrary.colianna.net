/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-space-grotesk)']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

