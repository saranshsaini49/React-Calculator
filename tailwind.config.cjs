/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        platium: "#E0E0E0",
        orange: "#f97316",
      },
    },
  },
  plugins: [],
};
