// tailwind.config.js
// export default {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./public/index.html",
//   ],
//   theme: {},
//   plugins: [],
// };

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
});