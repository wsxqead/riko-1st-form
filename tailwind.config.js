/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // ✅ 클래스 기반 다크모드
  theme: {
    extend: {
      colors: {
        riko: "#A6D0A6",
        night: "#1e1e1e",
      },
      fontFamily: {
        serif: ["Cinzel", "serif"],
        sans: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};
