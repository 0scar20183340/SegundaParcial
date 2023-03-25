const express = require('express');
const app = express();
let PORT = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));

//para que la app  express utilice ejs como motor de vistas
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html> 
    <html> 
    <head> 
        <link href=assets/style.css type=text/css rel=stylesheet /> 
    </head> 
    <body> 
        <h1>Hello World!</h1> 
    </body> 
    </html>`);
});

// app.get('/person/:id', (req, res) => {
//     res.send(`<!DOCTYPE html> 
//     <html lang="en"> 
//     <head>
//     <link href=assets/style.css type=text/css rel=stylesheet />
//     </head>
//     html>`);
// });

// app.get('/person/:id', (req, res) => {
//     res.render('person', { ID: req.params.id, Qstr: req.query.qrst });
// });


// Llave Qsrt con "req.query"
app.get('/person/:id', (req, res) => {
    res.render('person', { ID: req.params.id, Message: req.query.message, Time: req.query.time });
});

app.listen(PORT);


// Parcear el body del navegador
// Express parcea automaticamente

// debo tener un app.POST con ruta addStudent

// submit al hacer click va al servidor

// send pintar algo en el webBrowser

// El .body.idhtml Permite el parceo
// si te acompleta es por que express ya parceo


// express parcea peticiones con urlcoded

// localhost:3000:student peticion por get

// res.render