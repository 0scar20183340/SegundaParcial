const express = require('express');
const app = express();

app.use('/assets',express.static(__dirname + '/public'));

let port = process.env.PORT || 3000;
app.use('/', function(req, res, next){
    console.log('Request Url:' + req.url);
    next();
})


app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/api', function(req, res){
    res.json({firstname: 'Oscar', lastname: 'Heriberto'})
});

app.get('/person/:id', function(req, res){
    res.render('person', {ID: req.params.id});
});

let data = [
    {id: 1, nombre: "Hugo", apellido: "Estrada Ramirez", edad: 19},
    {id: 2, nombre: "Oscar", apellido: "Gonzalez Alvarez", edad: 20}
    ]
    
app.get('/personas', function(req, res){
    res.render('personas', {data});
});


app.listen(port);
