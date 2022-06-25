const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');

app.get('/', (req, res) => {
  res.send("Running...");
})

app.listen(port, () => {
  console.log(`Node.js listening on port ${port}`);
})