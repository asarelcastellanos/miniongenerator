let names = require("../data/names.json");

module.exports.returnName = function () {
  let randomName = names[Math.floor(Math.random() * names.length)];
  let name = `${randomName.name}`;
  return name;
};
