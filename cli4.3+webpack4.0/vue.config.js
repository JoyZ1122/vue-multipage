module.exports = {
  pages: {
    first: {
      entry: "src/pages/first/first.js",
      template: "public/first.html",
      filename: "index.html",
      title: "firstPage",
    },
    second: {
      template: "public/second.html",
      entry: "src/pages/second/second.js",
      filename: "second.html",
      title: "secondPage",
    },
  },
};
