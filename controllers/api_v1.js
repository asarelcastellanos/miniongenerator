const express = require('express');
const apiv1 = express.Router();

// Minion Route
apiv1.get('/minion', (req, res) => {
    res.send('Minion route works!')
})

apiv1.get('/minion/:num', (req, res) => {
    res.send(req.params)
})

module.exports = apiv1