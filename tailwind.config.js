/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '320px',
      'xs': '540px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    backgroundImage: {
      'typing': "url('../public/image/background.jpg')",
      // 'gradient': "bg-gradient-to-r from-sky-500 to-indigo-500",
    },
    // extend: {},
  },
  plugins: [],
}

