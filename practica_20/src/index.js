const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require("./routes/user");
//Usar dotenv para cargar las variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//Variables de entorno
const { MONGODB_URI } = process.env;
// Connection to MongoDB
//Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//Middleware
app.use(express.json());
app.use('/api', userRoutes);

mongoose.connect(MONGODB_URI).then(() => { console.log(`Connected to MongoDB: Welcome ${process.env.MONGODB_DB}`) }).catch((err) => { console.log(err) });

app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`) });