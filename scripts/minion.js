// Some code snippets were taken from: https://github.com/fireship-io/nft-art-generator/blob/main/index.js
// Credit to Jeff Delaney of Fireship.io

const { writeFileSync } = require("fs");
const { randomNumber, getLayer, converToPng } = require("./generate");

// The template to create a minion
const template = `
    <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- bg -->
        <!-- body -->
        <!-- mouth -->
        <!-- eyes -->
    </svg>
`;

function createMinion(id, name) {
  const bg = randomNumber(4);
  const eyes = randomNumber(4);
  const mouth = randomNumber(4);

  const final = template
    .replace("<!-- bg -->", getLayer(`bg${bg}`))
    .replace("<!-- body -->", getLayer("body0"))
    .replace("<!-- mouth -->", getLayer(`mouth${mouth}`))
    .replace("<!-- eyes -->", getLayer(`eyes${eyes}`));

  const meta = {
    name,
    description: `A drawing of ${name}`,
    image_location: `https://minion-generator.herokuapp.com/${id}/${name}.png`,
  };

  writeFileSync(`./public/${id}/${name}.svg`, final);
  converToPng(id, name);

  return meta;
}

module.exports = { createMinion };
