/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'intro': '1.25fr 1fr',
      },
      dropShadow: {
        'glow': '0 4px 12px rgba(249, 115, 22, 0.8)',
      },
      backgroundImage:{
        'footer': "url('/src/images/Footer-background-2.png')",
        'GitHub': "url('/src/images/Github-Circle.svg')"
      },
      width: {
        'ducky': '430px',
      },
      boxShadow: {
        'glass': '0 0 5px 2px rgba(0, 0, 0, .2)',
      },
    },
  },
  plugins: [],
}

