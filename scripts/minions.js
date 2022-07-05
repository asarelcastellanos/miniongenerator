const gru = require("./minion");

function createMinions(id, num) {
  let minions = [];

  for (let i = 0; i < num; i++) {
    let minion = gru.createMinion(id);
    minions.push(minion);
  }

  return minions;
}

module.exports = { createMinions };
