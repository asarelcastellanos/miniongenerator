const { existsSync, mkdirSync } = require("fs");

module.exports.createUseFolder = function (id) {
  if (!existsSync(`../public/${id}`)) {
    mkdirSync(`../public/${id}`);
    console.log(`${id} folder created!`);
  } else {
    console.log(`${id} folder already created!`);
  }
};
