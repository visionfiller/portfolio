/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: "#649DAD",
        third: "#66C6BA",
        fourth: "#8BD4CB",
        fifth: "#44B5A7",
        sixth: "#85B2BF"
    }
  },
},
  plugins: [require("daisyui"),]
}

