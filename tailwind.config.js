module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    display: ["Poppins", "system-ui", "sans-serif"],
    body: ["Poppins", "system-ui", "sans-serif"],
    extend: {
      colors: {
        brand: {
          black: "var(--black-color)",
        },
        basket_blue: {
          50: "#e9f7ff",
          100: "#ceedff",
          200: "#a7e1ff",
          300: "#6bd2ff",
          400: "#26b6ff",
          500: "#008bff",
          600: "#0061ff",
          700: "#0046ff",
          800: "#003be6",
          900: "#001f4b",
          950: "#000c24",
        },
        basket_orange: {
          50: "#fff6ed",
          100: "#ffead4",
          200: "#ffd1a8",
          300: "#ffb070",
          400: "#ff8337",
          500: "#ff6617",
          600: "#f04606",
          700: "#c73207",
          800: "#9e280e",
          900: "#7f240f",
          950: "#450f05",
        },
      },
      backgroundColor: {
        primary: "#000d2c",
        secondary: "var(--bg-secondary)",
      },
      textColor: {
        primary: "#FFFFFF",
        secondary: "#A9A8B0",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          xl: "0rem",
        },
      },
    },
  },
  plugins: [],
};
