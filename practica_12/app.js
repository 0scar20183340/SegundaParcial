const express = require('express');
const app = express();

//mapeamos el nombre de carpeta public a la carpeta virtual assets
// DOBLE GUION BAJO PENDEJO!! --
app.use('/assets',express.static(__dirname + '/public'));

// el .PORT indica que si hay un puerto disponible habra ese puerto, sino que habra el puerto 3000
let port = process.env.PORT || 3000;
app.use('/', function(req, res, next){
    console.log('Request Url:' + req.url);
    next();
})


//especificar que el templade engine sera ejs
app.set('view engine', 'ejs');

// La función app.render() se usa para renderizar HTML de una vista 
// a través de la función de devolución de llamada. 
// Esta función devuelve el html en la función de devolución de llamada.
app.get('/', function(req, res){
  res.render('index');
});

//manda con el formato Json un objeto y no un texto
app.get('/api', function(req, res){
    res.json({firstname: 'Oscar', lastname: 'Heriberto'})
});


//el requ.params utiliza el .id y lo convuerte en una ruta
app.get('/person/:id', function(req, res){
    res.render('person', {ID: req.params.id});
});

app.listen(port);
