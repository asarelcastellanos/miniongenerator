let names = require("../data/names.json");
const { readFileSync } = require("fs");
const sharp = require("sharp");

function randomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function randomName() {
  return names[Math.floor(Math.random() * names.length)];
}

function getLayer(name) {
  const svg = readFileSync(`./assets/${name}.svg`, "utf-8");
  const re = /(?<=\<svg\s*[^>]*>)([\s\S]*?)(?=\<\/svg\>)/g;
  const layer = svg.match(re)[0];
  return layer;
}

async function converToPng(id, name) {
  const src = `./public/${id}/${name}.svg`;
  const dest = `./public/${id}/${name}.png`;

  const img = await sharp(src);
  const resized = await img.resize(1024);
  await resized.toFile(dest);
}

module.exports = { randomNumber, randomName, getLayer, converToPng };
