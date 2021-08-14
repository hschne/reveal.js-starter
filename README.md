<h1 align="center">Reveal.js Starter</h1> 
<p align="center">A opinionated starter template for <a href="https://github.com/hakimel/reveal.js">Reveal.js</a></p>

<p align="center">
<a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/powered-by-electricity.svg"></a>
<a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/uses-html.svg"></a>
</p>

## Getting Started

This template provides a number of quality of life utilities for writing your slides (Build & Minification, SASS, [LiveReload](https://www.browsersync.io/)...), and comes pre-configured with sane defauls (Markdown Slides, Theming...).

To start creating your own slides execute `bootstrap.sh` and specify a name for your presentation.

```
bash <(wget -qO- https://raw.githubusercontent.com/hschne/reveal.js-starter/master/bootstrap.sh)
```

Alternatively clone this repository and run `npm install`.

```
git clone https://github.com/hschne/reveal.js-starter
npm install && npm run serve
```

Running `npm run serve` will start a local [BrowserSync](https://www.browsersync.io/) and preview your slides. To add new slides modify `index.html` or `index.md`. To add your own styles modify `stylesheets/styles.scss`.

Happy coding!

## License

This project is licensed under the [MIT License](LICENSE)
