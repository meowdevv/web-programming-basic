/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./learn/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        "ornament-box-type-1": "url('../images/ornament-box-type-1.png')",
        "card-banner": "url('../images/card-banner.png')",
        "primary-500":
          "linear-gradient(125deg, rgba(56, 198, 130, 1),rgba(56, 198, 130, 1))",
        "primary-400":
          "linear-gradient(125deg, rgba(56, 198, 130, 0.8),rgba(56, 198, 130, 0.8))",
        "primary-300":
          "linear-gradient(125deg, rgba(56, 198, 130, 0.6),rgba(56, 198, 130, 0.6))",
        "primary-200":
          "linear-gradient(125deg, rgba(56, 198, 130, 0.4),rgba(56, 198, 130, 0.4))",
        "primary-100":
          "linear-gradient(125deg, rgba(56, 198, 130, 0.2),rgba(56, 198, 130, 0.2))",
        "primary-50":
          "linear-gradient(125deg, rgba(56, 198, 130, 0.1),rgba(56, 198, 130, 0.1))",
        "learning-path-outline":
          "linear-gradient(100deg, rgba(255, 255, 255, 1),rgba(255, 255, 255, 0.1))",
      },
    },
  },
  plugins: [],
};
