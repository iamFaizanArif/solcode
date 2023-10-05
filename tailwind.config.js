import tailwindcss_animated from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#E4E4E4",
        "secondary":"#18893E",
        "basic":"#191A1C",
      }
    },
  },
  plugins: [
    tailwindcss_animated
  ],
}