/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        resalesUtopia: {
          primary: "#3749BB",
          // secondary: "#1c40f2",
          secondary: "#081621",
          accent: "#ef4a23",
          neutral: "#001042",
          info: "#EFEDF7",
          "base-100": "#F8F8F8",
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
