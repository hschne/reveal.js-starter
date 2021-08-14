import "../stylesheets/style.scss";

import Reveal from "reveal.js/dist/reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.js";
import Highlight from "reveal.js/plugin/highlight/highlight.js";
import Notes from "reveal.js/plugin/notes/notes.js";

Reveal.configure({
  transition: "none",
  history: "true",
});
let deck = new Reveal({
  plugins: [Markdown, Highlight, Notes],
  transition: "none",
  history: "true",
});
deck.initialize();
