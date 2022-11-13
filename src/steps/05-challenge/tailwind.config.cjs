/*
  -----------------------------
  Let's start building a Tailwind CSS plugin!

  For our "Hello World", use the `plugin` function 
  from `tailwindcss/plugin` to create a simple plugin 
  that generates the following CSS:

  ```
  body {
    text-transform: uppercase;
  }
  ```

  Note: You'll need to write your CSS using
  the CSS-in-JS object syntax!

  https://tailwindcss.com/docs/plugins#css-in-js-syntax
  -----------------------------
*/

module.exports = {
  content: {
    relative: true,
    files: ['./index.astro'],
  },
  plugins: [],
}
