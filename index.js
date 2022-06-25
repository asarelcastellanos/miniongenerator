const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public', 'assets')));

app.get('/', (req, res) => {
  res.send("Running...");
})

app.get('/minion', (req, res) => {
  res.send('Just created ' + minion);
})

app.listen(port, () => {
  console.log(`Node.js listening on port ${port}`);
})