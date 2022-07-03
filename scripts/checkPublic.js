const { existsSync, mkdirSync } = require("fs");

module.exports.checkPublic = function () {
  if (!existsSync("../public")) {
    mkdirSync("../public");
    console.log("public folder just created!");
  } else {
    console.log("public folder already created!");
  }
};
