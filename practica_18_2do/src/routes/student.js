let express =  require('express');
let router =  express.Router();
// instanciacion del "router" al que asociaremos todas las rutas


router.get('/student', function (req, res)  {
    let t = req.params.id
    res.render('student');
});

router.post('/addStudent', function(req,res){
    res.render('displayData', {
        nombre: req.body.nombre,
        edad: req.body.edad,
        nss: req.body.nss,
        tipoSangre: req.body.tipoSangre});
});

router.get('/',(req,res) => {
    res.send(`<!DOCTYPE html> 
    <html> 
    <head> 
    <link href=assets/style.css type=text/css rel=stylesheet /> 
    </head> 
    <body> 
    <h1>Hello World!</h1> 
    </body> 
    </html>`)
});


module.exports = router;