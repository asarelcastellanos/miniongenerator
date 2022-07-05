const express = require("express");
const apiv1 = express.Router();

const dir = require("../scripts/directory");
const { randomName } = require("../scripts/generate");
const gru = require("../scripts/minion");

const { rm, existsSync } = require("fs");

// Minion Route
apiv1.get("/minion/:userid", (req, res) => {
  let id = req.params.userid;
  dir.checkPublic();
  dir.checkUserFolder(id);
  let name = randomName();
  let minion = gru.createMinion(id, name);
  res.send(minion);
});

apiv1.delete("/minion", (req, res) => {
  if (existsSync("./public")) {
    rm(`./public`, { recursive: true }, (err) => {
      if (err) {
        // File deletion failed
        console.error(err.message);
        return;
      }
    });
    res.send("public has been deleted");
  } else {
    res.send("public does not exist");
  }
});

module.exports = apiv1;
