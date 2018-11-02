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

router.post('/api/burgers', (req, res) =>{
    console.log('request: ',req)
    insert(req.body.name, req.body.devoured).then(response => {
        console.log('response: ',response);
    })
})

module.exports = router;