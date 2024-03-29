const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      bg: '#151c2c',
      active: '#2e374a',
      bgSoft: '#182237',
      text: colors.white,
      textSoft: '#b7bac1',
      black: colors.black,
      white: colors.white,
      gray: {
        300: '#d9dae8',
        500: '#999AA5',
        600: '#66676E',
        700: '#39393f',
        800: '#242529',
        900: '#191B1F',
        950: '#101215'
      },
      transparent: colors.transparent,
      yellow: {
        700: '#F5C521'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
