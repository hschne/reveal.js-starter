import autoprefixer from "autoprefixer";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
import eslint from "@rollup/plugin-eslint";
import livereload from "rollup-plugin-livereload";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import scss from "rollup-plugin-scss";
import serve from "rollup-plugin-serve";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
import { visualizer } from "rollup-plugin-visualizer";

import pkg from "./package.json";

const banner = `/*
 * Reveal.js Starter
 * ${pkg.description}
 * ${pkg.repository.url}
 * v${pkg.version}
 * ${pkg.license} License
 */
`;

const copyTargets = ["league-gothic", "source-sans-pro"].flatMap((font) => {
  return [
    {
      src: `./node_modules/reveal.js/dist/theme/fonts/${font}/*.css`,
      dest: `out/fonts/${font}`,
    },
    {
      src: `./node_modules/reveal.js/dist/theme/fonts/${font}/*.woff`,
      dest: `out/fonts/${font}`,
    },
  ];
});

const plugins = [
  resolve(),
  commonjs(),
  eslint({
    fix: true,
    exclude: ["./node_modules/**", "./stylesheets/**"],
  }),
  babel({
    exclude: "node_modules/**",
    babelHelpers: "bundled",
  }),
  terser(),
  scss(),
  postcss({
    plugins: [autoprefixer()],
    inject: false,
    extract: true,
    sourceMap: false,
    minimize: true,
  }),
  copy({
    targets: copyTargets,
  }),
  serve(),
  livereload(),
  filesize(),
  visualizer(),
];

export default [
  {
    input: "js/revealjs-starter",
    output: {
      file: "out/revealjs-starter.js",
      format: "esm",
      name: "Reveal.js Starter",
      sourcemap: false,
      banner: banner,
    },
    plugins: plugins,
  },
];
