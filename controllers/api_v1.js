const express = require("express");
const apiv1 = express.Router();

const dir = require("../scripts/directory");
const { randomName } = require("../scripts/generate")
const gru = require("../scripts/minion");
// const bigGru = require("../scripts/minions");

// Minion Route
apiv1.get("/minion/:userid", (req, res) => {
  let id = req.params.userid;
  dir.checkPublic();
  dir.checkUserFolder(id);
  let name = randomName();
  let minion = gru.createMinion(id, name);
  res.send(minion);
});

// apiv1.get("/minions/:userid/:num", (req, res) => {    
//   let id = req.params.userid;
//   let num = req.params.num;
//   let names = randomNames(num);
//   dir.checkPublic();
//   dir.checkUserFolder(id);
//   let minions = bigGru.createMinions(id, names, num);
//   res.send(minions);
// });

module.exports = apiv1;