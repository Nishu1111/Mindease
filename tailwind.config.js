/** @type {import('tailwindcss').Config} 
export default {
  content: [
    "./index.html",
    "./src/**//***.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
*/
// tailwind.config.js


// tailwind.config.js
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
  animation: {
    blob: "blob 7s infinite",
    'fade-in': 'fadeIn 0.8s ease-out forwards',
  },
  keyframes: {
    blob: {
      '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
      '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
      '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
    },
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
      },
     },
  },
  },
  plugins: [],
};


