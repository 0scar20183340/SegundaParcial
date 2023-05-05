const express  = require ('express');
const router   = express.Router();
const mongoose = require('mongoose');
let Person = require('../models/persons');




//Crear la ruta /person
router.get('/persons', async (req, res) => {
    const Persons = await Person.find({});
    if (!Persons) res.status(404).send('No se encontraron personas');
    res.render('persons', { Persons });
});
// Aquí se muestra la ruta addPerson para ver el formulario
router.get('/addPerson', (req, res) => {
    res.render('addPerson');
});

//Enviar datos de la forma POST a la base de datos
router.post('/addPerson', async (req, res) => {
    const newPerson = Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });
    //Guardar en la base de datos con save()
    newPerson.save().then((data) => res.redirect('/persons')).catch((err) => res.json(err));
})

module.exports = router;