import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import pkg from "./package.json";

export default {
  input: "index.ts",
  output: {
    name: "josh",
    file: pkg.pathForBuiltOutput,
    format: "umd",
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    // babel({ babelHelpers: "inline" }),
    // commonjs(),
    typescript(),
    // babel({ babelHelpers: "inline" }),
    json(),
  ],
};
