/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d8e94',       // MainColor
        background: '#d7f8fa',    // bgColor
        secondary: '#2aada2',     // SubColor
        light: '#52bec4',         // LightColor
        white: '#ffffff',         // White
        grey: '#484848',          // Grey
        'light-grey': '#2b2b2b',  // Light Grey
        black: '#1d1d1d',         // Black
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
