/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'from-orange-100',
    'from-lime-100',
    'from-red-100',
    'from-amber-100',
    'from-cyan-100',
    'from-teal-100',
    'from-blue-100',
    'bg-orange-50',
    'bg-lime-50',
    'bg-red-50',
    'bg-amber-50',
    'bg-cyan-50',
    'bg-teal-50',
    'bg-blue-50',
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

