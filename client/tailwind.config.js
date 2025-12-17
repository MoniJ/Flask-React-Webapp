/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      blur: {
        '3xl': '80px',
      },
      fontFamily: {
        pacifico: ['"Pacifico"', 'cursive'],
      },
    },
  },
  plugins: [],
}


