const { readFileSync } = require("fs");

module.exports.getLayer = function (name) {
  const svg = readFileSync(`../assets/${name}.svg`, "utf-8");
  const re = /(?<=\<svg\s*[^>]*>)([\s\S]*?)(?=\<\/svg\>)/g;
  const layer = svg.match(re)[0];
  return layer;
};
