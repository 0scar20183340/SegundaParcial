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

app.get('/person/:id', (req, res) => {
    res.render('person', { ID: req.params.id, Message: req.query.message, Time: req.query.time });
});

app.listen(PORT);