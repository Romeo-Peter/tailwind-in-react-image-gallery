const tailwindcss = require("tailwindcss");
const autoPrefixer = require("autoprefixer");

module.exports = {
  plugins: [tailwindcss("./tailwind.config.js"), autoPrefixer],
};
