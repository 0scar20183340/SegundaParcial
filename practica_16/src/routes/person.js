let express =  require('express');
let router =  express.Router();
// instanciacion del "router" al que asociaremos todas las rutas

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

router.get('/person', (req, res) => {
    res.send(`<!DOCTYPE html> 
    <html> 
    <head> 
    <link href=assets/style.css type=text/css rel=stylesheet /> 
    </head> 
    <body> 
    <h1>has solicitado el listado de personas</h1> 
    </body> 
    </html>`);
});

router.get('/person/:person', (req, res) => {
    res.render('person', { PERSON: req.params.person});
});


module.exports = router;