/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Zen Maru Gothic', 'Raleway', 'sans-serif'],
      },
      fontSize: {
        h1: [
          '1.7em',
          {
            paddingBottom: '0.2em',
            fontWeight: 700,
            lineHeight: 1.5,
          },
        ],
        h2: [
          '1.5em',
          {
            paddingBottom: '0.2em',
            fontWeight: 700,
            lineHeight: 1.5,
          },
        ],
        h3: [
          '1.3em',
          {
            paddingBottom: '0.2em',
            fontWeight: 700,
            lineHeight: 1.5,
          },
        ],
        h4: [
          '1.1em',
          {
            paddingBottom: '0.2em',
            fontWeight: 700,
            lineHeight: 1.5,
          },
        ],
        h5: [
          '1em',
          {
            paddingBottom: '0.2em',
            fontWeight: 700,
            lineHeight: 1.5,
          },
        ],
        h6: [
          '.9em',
          {
            paddingBottom: '0.2em',
            fontWeight: 700,
            lineHeight: 1.5,
          },
        ],
      },
      screens: {
        sm: '427px',
        md: '769px',
      },
    },
  },
  plugins: [],
};