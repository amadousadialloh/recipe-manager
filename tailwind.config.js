/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        recipe: {
          beige: "#F5F5DC",
          cream: "#FFF8E7",
          green: "#A8D5BA",
          lightGreen: "#C7E9B0",
          terracotta: "#E07A5F",
          warmTerracotta: "#F4A261",
          pastelYellow: "#FFFACD",
          lightYellow: "#FFE4B5",
        },
      },
    },
  },
  plugins: [],
};
