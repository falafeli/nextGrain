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
        'nextgrain-black': '#201D2F',
        'nextgrain-primary': '#000000',
        'nextgrain-white': '#FFFFFF',
        'nextgrain-blue': '#90B9DF',
        'nextgrain-gray': '#9E9E9E',
        'nextgrain-light-gray': '#F7F7F7',
      },
      fontFamily: {
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 4px 4px 0px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
} 