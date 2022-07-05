
const express = require('express');
const app = module.exports = express();
const port = 8080;

const path = require('path');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Home Page
app.get('/', (req, res) => {
  res.render('index');
})

// API v1 Routes
app.use('/api/v1', require('./controllers/api_v1'));

// Listening on port: 8080
app.listen(port, () => {
  console.log(`Minion Meme Generator listening on port:${port}`)
})