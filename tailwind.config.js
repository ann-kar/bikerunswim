module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "mobile-sm": "300px",
        "mobile-md": "450px",
        "mobile-lg": "520px",
      },
    },
    plugins: [],
  },
};
