const returnName = require("./returnName");
const { returnNumber } = require("./returnNumber");
const { checkPublic } = require("./checkPublic");
const { createUseFolder } = require("./createUserFolder");
const { getLayer } = require("./getLayer");
const { converToPng } = require("./convertToPng");

// The template to create a minion
const template = `
    <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- bg -->
        <!-- body -->
        <!-- mouth -->
        <!-- eyes -->
    </svg>
`;

const name = returnName.returnName();

module.exports.createMinion = function () {

  checkPublic();  

  const bg = returnNumber(4);
  const mouth = returnNumber(4);
  const eyes = returnNumber(4);

  createUseFolder(name);

  const final = template
    .replace("<!-- bg -->", getLayer(`bg${bg}`))
    .replace("<!-- body -->", getLayer("body0"))
    .replace("<!-- mouth -->", getLayer(`mouth${mouth}`))
    .replace("<!-- eyes -->", getLayer(`eyes${eyes}`));

  const meta = {
    name,
    description: `A drawing of ${name}`,
    image: `https://minion-generator.herokuapp.com/${name}/${name}.png`,
  };

  writeFileSync(`./public/${name}/${name}.svg`, final);
  converToPng(name, name);

  return meta;
};
