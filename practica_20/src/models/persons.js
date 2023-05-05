// 1.- Inyectar la dependencia de mongoose
// 2.- Instanciar un nuevo Schema de Mongoose, esta definición debe coincidir con la definición de la colección que tenemos en nuestra base de datos de MongoDB
// 3.- Exportar una instancia de un modelos de mongoose

const mongoose = require('mongoose');
let PersonSchema = new mongoose.Schema({
    name: String,
    age: Number,
    bloodGroup: String,
    nss: String,
});

module.exports = mongoose.model('Person', PersonSchema);