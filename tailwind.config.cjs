/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      keyframes: {
        float : {
          '0%' : { transform: 'translateY(0)' },
          '50%' : { transform: 'translateY(2px)' },
          '100%': { transform: 'translateY(0)'},
        },
        float2 : {
          '0%' : { transform: 'translateY(0)' },
          '50%' : { transform: 'translateY(-2px)' },
          '100%': { transform: 'translateY(0)'},
        }
      }
    },
  },
  plugins: [],
};
