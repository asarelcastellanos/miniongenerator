// Some code snippets were taken from: https://github.com/fireship-io/nft-art-generator/blob/main/index.js
// Credit to Jeff Delaney of Fireship.io

const {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync
} = require("fs");
const sharp = require("sharp");

//importing local data
var adjectives = require("../data/adjectives.json");
var names = require("../data/names.json");

module.exports.createMinion = function (id) {
  checkFolder();
  return createImage(id);
};

// The template to create a minion
const template = `
    <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- bg -->
        <!-- body -->
        <!-- mouth -->
        <!-- eyes -->
    </svg>
`;

// Returns a random number based on max
function randInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Returns a randomElement based on array given
function randElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Give the minion a random name from the list.
function getRandomName() {
  const randAdj = randElement(adjectives);
  const randName = randElement(names);
  const name = `${randAdj.name}-${randName.name}`;
  return name;
}

// Gets the specific layer
function getLayer(name) {
  const svg = readFileSync(`./public/assets/${name}.svg`, "utf-8");
  const re = /(?<=\<svg\s*[^>]*>)([\s\S]*?)(?=\<\/svg\>)/g;
  const layer = svg.match(re)[0];
  return layer;
}

// Converts the created SVG to a PNG
async function svgToPng(name) {
  const src = `./public/out/${name}/${name}.svg`;
  const dest = `./public/out/${name}/${name}.png`;

  const img = await sharp(src);
  const resized = await img.resize(1024);
  await resized.toFile(dest);
}

// Creates public/out if it doesn't exist
function checkFolder() {
  if (!existsSync("./public/out")) {
    mkdirSync("./public/out");
    console.log("Just created the out folder.");
  }
  console.log("out folder already created.");
}

// Creates folder for each image
function createNameFolder(name) {
  if (!existsSync(`./public/out/${name}`)) {
    mkdirSync(`./public/out/${name}`);
    console.log(`Just created the ${name} folder.`);
  }
  console.log(`${name} folder already created.`);
}

// Creates Minion
function createImage(id) {
  const bg = randInt(4);
  const eyes = randInt(4);
  const mouth = randInt(4);

  const name = getRandomName();
  createNameFolder(name);
  console.log(name);

  const final = template
    .replace("<!-- bg -->", getLayer(`bg${bg}`))
    .replace("<!-- body -->", getLayer("body0"))
    .replace("<!-- mouth -->", getLayer(`mouth${mouth}`))
    .replace("<!-- eyes -->", getLayer(`eyes${eyes}`))

  const meta = {
    userid: `${id}`,
    name,
    description: `A drawing of ${name.split("-").join(" ")}`,
    image_location: `/${name}/${name}.png`,
  };

  writeFileSync(`./public/out/${name}/${name}.svg`, final);
  svgToPng(name);

  return meta;
}