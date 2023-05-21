const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
let Person = require('../models/persons');
const methodOverride = require('method-override');
router.use(methodOverride('_method'));


router.get('/gente', async (req, res) => {
    const persons = await Person.find({});
    res.render('persons', { persons });
});

router.get('/addPerson', (req, res) => {
    res.render('addPerson');
});

router.post('/addPerson', (req, res) => {
    const newPerson = Person({
        name: req.body.name,
        age: req.body.age,
        bloodGroup: req.body.bloodGroup,
        nss: req.body.nss
    });

    newPerson
        .save()
        .then(() => {
            res.redirect('/gente');
        })
        .catch((err) => {
            res.json({ message: err });
        });
});

router.post('/updatePerson', (req, res) => {
    const updatedPerson = {
        name: req.body.name,
        age: req.body.age,
        bloodGroup: req.body.bloodGroup,
        nss: req.body.nss
    };

    Person.findOneAndUpdate({ _id: req.body.objId }, updatedPerson)
        .then(() => {
            res.redirect('/gente');
        })
        .catch((err) => {
            res.json({ message: err });
        });
});

router.get('/findById/:id', (req, res) => {
    Person.findById(req.params.id)
        .then((myPerson) => {
            res.render('personUpdate', { myPerson });
        })
        .catch((err) => {
            res.json({ message: err });
        });
});

router.delete('/gente/:id', (req, res) => {
    Person.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/gente');
        })
        .catch((err) => {
            res.json({ message: err });
        });
});


router.post('/gente/:id', (req, res) => {
    Person.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/gente');
        })
        .catch((err) => {
            res.json({ message: err });
        });
});



router.post('/find', (req, res) => {
    Person.find({ name: {$regex: req.body.criteria, $options: "i"} })
    .then((persons) => {res.render('persons', { persons })})
    .catch((err) => {res.json({ message: err })});
});


module.exports = router;
