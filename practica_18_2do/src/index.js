const express = require('express'); //inyecccion de la dependencia
const mongoose = require('mongoose'); //inyecccion de la dependencia
require("dotenv").config(); //inyecccion de la dependencia
const useRoutes = require("./routes/user"); //inyecccion de la dependencia


const app = express();
const port = process.env.PORT || 3000;


//rutas
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//middleware
app.use('/api', useRoutes);

// mongoose db conection   
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('DB connected'))
.catch(err => console.error(err))


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});