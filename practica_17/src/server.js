const express = require('express'); //inyecccion de la dependencia
const bodyParser = require('body-parser'); // Importa body-parser //POR ESTA MIERDA NO QUERIA AGARRAR EL DISPLAYDATA
let app = express();

// instale body-perser
//Configure el middleware body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let PORT = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public')); //contenido estatico


// Esto sirve para definir las rutas que serán manejadas por el servidor 
// web. En este caso, el código está requiriendo dos archivos JavaScript, 
// person.js y student.js, que se encuentran en la carpeta routes. Estos 
// archivos contienen las rutas que serán utilizadas para manejar las 
// solicitudes HTTP en el servidor.
// Luego, esas rutas son agregadas a la aplicación Express usando el 
// método use(), lo que permite que las solicitudes sean manejadas por el 
// servidor web.

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
