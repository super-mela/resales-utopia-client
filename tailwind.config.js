/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        resalesUtopia: {
          primary: "#EBA10F",
          secondary: "#333333",
          accent: "#001042",
          "resales-bg-primary": "#f6f6f6",
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
