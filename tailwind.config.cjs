module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#002659",
        },
        secondary: {
          DEFAULT: "#46F298",
        },
        info: {
          DEFAULT: "#E4E4E4",
        },
      },
      flex: {
        0: "0 0 auto",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
