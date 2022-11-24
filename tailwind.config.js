/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        resalesUtopia: {
          primary: "#EBA10F",
          secondary: "#666",
          accent: "#1FB2A6",
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
