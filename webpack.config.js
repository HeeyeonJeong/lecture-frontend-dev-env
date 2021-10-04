const path = require("path");

module.exports = {
  mode: "development",

  //시작점
  entry: {
    main: "./src/app.js",
  },

  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
};
