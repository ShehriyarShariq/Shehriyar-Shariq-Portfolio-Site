/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Orienta", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#05FDD8",
        secondary: "#FD2155",
        secondary_hovered: "#b1153a",
        light_gray: "#ADADAD",
        gray_alt: "#D9D9D9",
        dark_gray: "#484848",
        transparent_gray: "#D9D9D911",
        translucent_gray: "#4D4D4D99",
        black_alt: "#1d1d1d",
      },
    },
  },
  plugins: [],
};
