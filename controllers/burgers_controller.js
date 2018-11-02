const express = require('express');
const router = express.Router();
const burgers = require('../models/burger');

const {
    all,
    insert,
    update
} = burgers;

const updateDisplay =  (res) => all().then(response => res.render('index', {burgers: response}))

router.get('/', (req, res) => updateDisplay(res))

router.post('/api/burgers', (req, res) => insert([req.body.burger_name, req.body.devoured]).then(() => updateDisplay(res)))

module.exports = router;