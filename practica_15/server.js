const express = require('express'); //inyecccion de la dependencia
let app = express();
let PORT = process.env.PORT || 3000 // definicion de la ruta
app.use('/assets', express.static(__dirname + '/public')); //contenido estatico

app.use(express.urlencoded({ extended: false })); // permite el parceo de los datos del body del navegador

app.set('view engine', 'ejs');

app.get('/',(req,res) => {
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


app.get('/student', function (req, res)  {
    let t = req.params.id
    res.render('student');
})


// app.post('/addStudent', function(req,res){
//     res.send(`Nombre: ${req.body.nombre}
//     Edad: ${req.body.edad}
//     NSS: ${req.body.nss}
//     Tipo de sangre: ${req.body.tipoSangre}`);
// });

app.post('/addStudent', function(req,res){
    res.render('displayData', {
        nombre: req.body.nombre,
        edad: req.body.edad,
        nss: req.body.nss,
        tipoSangre: req.body.tipoSangre});
});


app.listen(PORT);


//



// Parcear el body del navegador
// Express parcea automaticamente
// express parcea peticiones con urlcoded
// El .body.idhtml Permite el parceo
// si te acompleta es por que express ya parceo

// submit al hacer click va al servidor
// send pintar algo en el webBrowser
// res.render

// debo tener un app.POST con ruta addStudent
// localhost:3000:student peticion por get
