import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";
import Notes from "reveal.js/plugin/notes/notes.esm.js";

Reveal.configure({
  transition: "none",
  history: "true",
});
let deck = new Reveal({
  plugins: [Markdown, Highlight, Notes],
});
deck.initialize();

import "../stylesheets/style.scss";
