
const express = require('express');
let router = express.Router();
// router.get('/student', function(req, res) {
//     let t = req.params.id;
//     res.render('student');
// });

// Recibir datos de un formulario
router.post('/addStudent', function(req, res) {
    res.render('displayData', {
        nombre: req.body.nombre,
        edad: req.body.edad,
        nss: req.body.nss,
        tipoSangre: req.body.tipoSangre
    });
});

// Recibir un JSON
router.post('/personJson',express.json({type:'*/*'}), function(req, res) {
    console.log(`nombre: ${req.body.nombre}
                apellido: ${req.body.apellido}`);
});

// Enviar un JSON
router.get('/testJson', function(req, res) {
    res.render('testJson');
});



module.exports = router;