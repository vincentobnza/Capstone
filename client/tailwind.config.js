/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        border: "border 4s linear infinite",
      },
      keyframes: {
        border: {
          to: { "--border-angle": "360deg" },
        },
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Odibee: ["Odibee Sans", "sans-serif"],
        NotoSans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [nextui()],
};
