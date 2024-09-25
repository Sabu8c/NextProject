/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          10: '#ff7428',
          30: '#ff6628',
          50: '#ff5829',
          70: '#cc4620',
          90: '#993418',
        },
        secondary:{
          10: '#0aa0b1',
          30: '#087E8B',
          50: '#10527a',
          70: '#0B3954',
          90: '#051e2d',
        },
        gray: {
          90: '#0a0b0d',
          80: '#15161a',
          50: '#1f2026',
          40: '#2a2d33',
          30: '#40444d',
          20: '#565b66',
          15: '#6c7380',
          10: '#adb9cc',
          5: '#c3d0e6',
        },
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
    },
  },
  plugins: [],
};