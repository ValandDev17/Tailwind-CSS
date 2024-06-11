/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors :{
        "primary": "#3238f2",
        "dev": "#01ee91"
      },
      fontFamily:{
        "display": ['poppins', 'sans-serif'],
        "body": ['inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

