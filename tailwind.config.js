/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#fc5571',    // สีประจำตัวของคุณ
        'josie-blue': '#1a1a7e', // สีน้ำเงินหลักจากเว็บ Josie
        'josie-bg': '#fbf8f3',   // สีพื้นครีมจากเว็บ Josie
        'josie-yellow': '#fbf579',
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'hard': '6px 6px 0px 0px rgba(26, 26, 126, 1)',
      }
    },
  },
  plugins: [],
}