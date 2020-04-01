const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcssPurgecss = require("@fullhuman/postcss-purgecss");

const isProduction = process.env.NODE_ENV === "production";

const purgecss = postcssPurgecss({
  content: ["./public/**/*.html", "./src/**/*.js"],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [tailwindcss, autoprefixer, ...(isProduction ? [purgecss] : [])]
};
