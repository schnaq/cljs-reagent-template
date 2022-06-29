const defaultTheme = require('./resources/public/node_modules/tailwindcss/defaultTheme')

module.exports = {
  content: ["./resources/public/js/compiled/cljs-runtime/playground.*.js",
            "./resources/public/js/compiled/main.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
