const express = require('express');
const gru = require('../scripts/createMinion');
const apiv1 = express.Router();


// Minion Route
apiv1.get('/minion', (req, res) => {
    let minion = gru.createMinion();
    res.send(minion);
})

apiv1.get('/minion/:num', (req, res) => {
    res.send(req.params)
})

module.exports = apiv1