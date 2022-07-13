const defaultTheme = require('./node_modules/tailwindcss/defaultTheme')

module.exports = {
  content: ["./public/js/compiled/cljs-runtime/playground.*.js",
            "./public/js/compiled/main.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
