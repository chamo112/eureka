/** @type {import('tailwindcss').Config} */
import { EuSemanticColor } from './tailwind-color';

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Zen Maru Gothic', 'Raleway', 'sans-serif'],
      },
      fontSize: {
        h1: [
          '1.7rem',
          {
            paddingBottom: '0.2em',
            fontWeight: 700,
            lineHeight: 1.5,
            letterSpacing: '0.1em',
          },
        ],
        h2: [
          '1.5rem',
          {
            paddingBottom: '0.2em',
            fontWeight: 700,
            lineHeight: 1.5,
          },
        ],
        h3: [
          '1.3rem',
          {
            paddingBottom: '0.2em',
            fontWeight: 700,
            lineHeight: 1.5,
          },
        ],
        h4: [
          '1.1rem',
          {
            paddingBottom: '0.2em',
            fontWeight: 700,
            lineHeight: 2.5,
          },
        ],
        h5: [
          '1rem',
          {
            paddingBottom: '0.2em',
            fontWeight: 700,
            lineHeight: 1.5,
          },
        ],
        h6: [
          '.9rem',
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
      colors: EuSemanticColor,
    },
  },
  plugins: [],
};