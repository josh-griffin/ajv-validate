module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: "3",
        forceAllTransforms: true,
        spec: true,
      },
    ],
  ],
  exclude: ["core-js"],
};
