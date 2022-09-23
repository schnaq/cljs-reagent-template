# Template to create a ClojureScript + Reagent + shadow-cljs project

This project creates a fully functional ClojureScript project for you, using the
stack of ClojureScript, reagent and shadow-cljs. CSS is built using tailwindcss,
but you can easily replace it if you like.

## Production

Run a production build in one command:

    yarn build

This generates all minified and optimized files in `public` ready to get deployed.

## Development

Create a copy of this project. Then, run the following commands:

```bash
# install dependencies
yarn

# start development server and tailwindcss
yarn dev
```

Open your browser at http://localhost:8000/. You now have a REPL running,
hot-reloading of CSS and your ClojureScript files.

`yarn dev` runs both, shadow-cljs and tailwindcss in a watch-mode so that you
have an interactive development experience. You can, of course, start those jobs
individually or connect to your REPL from your editor.

### Editor

I recommend using VS Code with the Calva plugin. Here is a demo on how to start and connect a REPL with it.

https://user-images.githubusercontent.com/1507474/177212625-af7c0ce5-5c52-48ef-8919-8eadfb3b60d7.mp4

### Outdated dependencies

Check outdated Clojure dependencies with:

    clj -M:outdated

And JavaScript-Dependencies:

    yarn outdated

## License

This project is [MIT licensed](./LICENSE).
