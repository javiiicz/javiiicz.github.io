/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'intro': '1.25fr 1fr',
      },
      dropShadow: {
        'glow': '0 4px 6px rgba(249, 115, 22, 0.8)',
      },
      backgroundImage:{
        'footer': "url('/src/images/Footer-background-2.png')"
      }
    },
  },
  plugins: [],
}

