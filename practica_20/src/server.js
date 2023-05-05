const express = require('express'); //inyecta express
const mongoose = require('mongoose'); //inyecta mongoose
const personsRouters = require('./routes/persons'); //inyecta el router de personas
require('dotenv').config(); //inyecta las variables de entorno

mongoose.Promise = global.Promise; //configura mongoose para usar promesas
const app = express(); //crea una instancia de express
const port = process.env.PORT || 3000; //configura el puerto

// Configurar view engine, agregar el router y el urlencoded para 
// parsear el body en las peticiones tipo POST 

app.set('view engine', 'ejs'); // estableve el valor para el motor de vistas
app.use(express.urlencoded({ extended: false })); //parsea el body de las peticiones POST
app.use("/assets", express.static(__dirname + '/../public'));
console.log(__dirname + '/../public');
app.use(personsRouters); //agrega el router de personas


// Conectar a la base de datos y levantar el servidor
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// levanta el servidor
app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));