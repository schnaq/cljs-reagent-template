# Template to create a ClojureScript + Reagent + shadow-cljs project

This project creates a fully functional ClojureScript project for you, using the
stack of ClojureScript, reagent and shadow-cljs. CSS is built using tailwindcss.

## Installation

Create a copy of this project. Then, run the following commands:

```bash
# install dependencies
yarn

# start development server and tailwindcss
yarn dev
```

Open your browser at http://localhost:8000/. You now have a REPL running,
hot-reloading of CSS and your ClojureScript files.

## Development

I recommend connecting your editor with the REPL or directly start it inside
your editor. Then you can manually start tailwind to check css changes. See
[package.json](./package.json) for available scripts.

## License

This project is [MIT licensed](./LICENSE).
