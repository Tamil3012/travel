/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main2":"#343434",
        "main":"#F0A500",
        "mainlight":"#ebbb52",
        'hover-color':'#CF7500',
      },
      backgroundImage: {
        'herobg': "url('./../assets/image/travel3.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

