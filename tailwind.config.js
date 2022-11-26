/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        resalesUtopia: {
          primary: "#1c40f2",
          secondary: "#0082F8",

          accent: "#ffb800",

          neutral: "#001042",
        },
      },
    ],
  },
  theme: {
    extend: {},
    fontFamily: {
      urbanist: ["Urbanist", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
