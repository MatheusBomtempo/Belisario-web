module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#FBFBFB",
          200: "#EAEAEA",
          300: "#DFDFDF",
          400: "#999999",
          500: "#7F7F7F",
          600: "#666666",
          700: "#4C4C4C",
          800: "#333333",
          900: "#191919",
        },
        cyan: {
          400: "#22D3EE",
          500: "#06B6D4",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Adiciona a fonte "Inter"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
