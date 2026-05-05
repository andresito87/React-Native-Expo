/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#6D28D9',
          400: '#9B87F5',
        },
      },
      borderRadius: {
        app: '16px',
      },
    },
  },
  plugins: [],
}