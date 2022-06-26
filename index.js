const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');

const gru = require('./scripts/minion');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send("Running...");
})

app.get('/minion', (req, res) => {
  const minion = gru.createMinion();
  res.send(minion);
})

app.listen(port, () => {
  console.log(`Node.js listening on port ${port}`);
})