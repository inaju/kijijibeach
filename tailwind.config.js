/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brand:'#F4694C'
      },
      // backgroundImage: {
      //   'hero-image': "url('./assets/heroimage.png')",
      // }
    },
  },
  plugins: [],
}