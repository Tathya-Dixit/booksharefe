/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('./src/assets/mainbg.png')",
        'lib-bg' : "url('./src/assets/lib.jpg')"
      },
      fontFamily : {
       Abril : ["Abril Fatface", "serif"],
       Cou  : ["Courgette", "cursive"]
      }
    },
  },
  plugins: [],
}