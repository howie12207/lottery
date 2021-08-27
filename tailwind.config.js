module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "10xl": "36rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
