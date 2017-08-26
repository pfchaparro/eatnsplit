var express = require('express');

var app = express();

app.set('view engine', 'pug')

app.get('/', function (req, res) {
	res.render('index');
})

app.listen(7000, function (err) {
	if (err) return console.log('Hubo un error'), process.exit(1);
	console.log('Escuchando en el puerto 7000');
})