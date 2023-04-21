const express = require('express'); //inyecccion de la dependencia
const bodyParser = require('body-parser'); // Importa body-parser //POR ESTA MIERDA NO QUERIA AGARRAR EL DISPLAYDATA
const mongoose = require('mongoose'); //inyecccion de la dependencia
require("dotenv").config(); //inyecccion de la dependencia
// const useRoutes = require("./routes/user"); //inyecccion de la dependencia
const studentRoutes = require("./routes/student"); //inyecccion de la dependencia
const personRoutes = require("./routes/person"); //inyecccion de la dependencia

let app = express();
let PORT = process.env.PORT || 3000;

// instale body-perser
//Configure el middleware body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/assets', express.static(__dirname + '/public')); //contenido estatico


mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('DB connected'))
.catch(err => console.error(err))



let personsRoute = require('./routes/person.js');
let studentRoute = require('./routes/student.js')


// Las líneas app.use(personsRoute) y app.use(studentRoute) 
// están definiendo las rutas para las cuales se utilizarán 
// las rutas de los archivos person.js y student.js. Cada vez 
// que se accede a una ruta que comienza con /persons o /students, 
// Express utilizará las rutas definidas en los archivos correspondientes 
// para manejar la solicitud. Por ejemplo, si un usuario accede a la ruta 
// /persons/new, Express utilizará la ruta '/new' definida en el archivo 
// person.js para manejar la solicitud.

app.set('view engine', 'ejs');
app.use(personsRoute);
app.use(studentRoute);


app.listen(PORT, () => {
    console.log('Escuchando en el puerto 3000')
});


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
