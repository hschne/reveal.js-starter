import babel from "@rollup/plugin-babel";
import eslint from "@rollup/plugin-eslint";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import scss from "rollup-plugin-scss";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

import pkg from "./package.json";

const banner = `/*
 * Reveal.js Starter
 * ${pkg.description}
 * ${pkg.repository.url}
 * v${pkg.version}
 * ${pkg.license} License
 */
`;

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
    sourceMap: "inline",
    minimize: false,
  }),
  serve(),
  livereload(),
];

const input = "js/revealjs-starter";

export default [
  {
    input: input,
    output: {
      file: "out/revealjs-starter.js",
      format: "umd",
      name: "Reveal.js Starter",
      sourcemap: true,
      banner: banner,
    },
    plugins: plugins,
  },
];
