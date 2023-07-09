/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkBlue: "#121F3A",
        ElectricPink: "#F73CF2",
        SteelBlue: "#46A2DE",
        DodgerBlue: "#4B83F1",
        MustardYellow: "#F5D242",
        NeonGreen: "#0EFF8D",
        RubyRed: "#E32A4F",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
