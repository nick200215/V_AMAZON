/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      minWidth: {
        0: "0",
        60: "60px",

        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        // Add custom minWidth values as needed
      },
      maxWidth: {
        60: "60px",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        // Add custom maxWidth values as needed
      },
      colors: {
        amazon: {
          blue_light: "#232f3e",
          blue_dark: "#131921",
          orange: "#febd69",
          button: "#F7CA00",
          buttonhover: "#f7b900",
          link: "#007185",
          manage: "#E7F4F5",
        },
      },
    },
    screens: {
      xs: { min: "280px", max: "600px" },
      md: { min: "600px" },
      xl: { min: "1280px" },
    },
  },

  plugins: [],
};
