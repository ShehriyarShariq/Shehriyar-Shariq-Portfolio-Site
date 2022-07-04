/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#05FDD8",
        secondary: "#FD2155",
        secondary_hovered: "#b1153a",
        transparent_gray: "#D9D9D911",
      },
    },
  },
  plugins: [],
};
