/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#CCF0D8',
          200: '#AAE7C1',
          300: '#88DDAA',
          400: '#66D195',
          500: '#44C77E',  
          600: '#33B56B',
          700: '#2C9B57',
          800: '#267844',
          900: '#1F6133',
        },
        'secondary': {
          100: '#FFE9BF',
          200: '#FFD896',
          300: '#FFC06C',
          400: '#FFA843',
          500: '#FF9220',
          600: '#E67E15',
          700: '#C56B0E',
          800: '#A1570A',
          900: '#834604',
        },
        'neutral': {
          100: '#FFFFFF',
          200: '#F4F4F5',
          300: '#E4E4E7',
          400: '#D4D4D8',
          500: '#A1A1AA',
          600: '#71717A',
          700: '#52525B',
          800: '#34343C',
          900: '#1F1F23',
        },
      },
    },
  },
  plugins: [
  ],
}

