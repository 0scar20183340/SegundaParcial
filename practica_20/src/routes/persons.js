const express  = require ('express');
const router   = express.Router();
const mongoose = require('mongoose');
let Person = require('../models/persons');

router.get('/gente', async (req,res) => {
    const Persons = await Person.find({});
    res.render('persons', { persons: Persons });
});

router.get('/addPerson',(req,res) => {
    res.render('addPerson');
});

router.post('/addPerson', (req,res) => {
    const newPerson = Person({
        name: req.body.name,
        age: req.body.age,
        bloodGroup: req.body.bloodGroup,
        nss: req.body.nss
    });

    newPerson
    .save()
    .then((data) => {res.redirect('/gente')})
    .catch((err) => {res.json({message: err})});
});

module.exports = router;