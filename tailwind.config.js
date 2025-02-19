/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '350px',
      'md': '620px',
      'lg': '1440px',
    },
    extend: {},
  },
  plugins: [],
}