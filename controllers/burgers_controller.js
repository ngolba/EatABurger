const express = require('express');
const router = express.Router();
const burgers = require('../models/burger');

const {all, insert, update} = burgers;

router.get('/', (req, res) => {
    all().then(response => {
        let hbobj = {burgers: response}
        console.log(hbobj)
        res.render('index', hbobj)
    })
})

module.exports = router;