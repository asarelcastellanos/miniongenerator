const express = require('express');
const apiv1 = express.Router();


// Minion Route
apiv1.get('/minion', (req, res) => {
    res.send('one minion made!')
})

apiv1.get('/minions/:num', (req, res) => {
    res.send(`${req.params} minions made!`)
})

module.exports = apiv1