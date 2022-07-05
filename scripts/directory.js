const { existsSync, mkdirSync } = require("fs");

function checkPublic() {
  if (!existsSync("./public")) {
    mkdirSync("./public");
    console.log("Created the public folder");
  } else {
    console.log("Public folder already created!");
  }
}

function checkUserFolder(id) {
  if (!existsSync(`./public/${id}`)) {
    mkdirSync(`./public/${id}`);
    console.log(`Just created the ${id} folder.`);
  } else {
    console.log(`${id} folder already created!`);
  }
}

module.exports = { checkPublic, checkUserFolder };
