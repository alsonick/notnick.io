module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@headlessui/tailwindcss"),
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
    require("tailwind-scrollbar"),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};
