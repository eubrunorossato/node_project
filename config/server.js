/* importar o modulo do framework express */

var express = require('express');
var consign = require('consign');
var bodyparser = require('body-parser');
var expressValidator = require('express-validator');

/* iniciar o projeto do express */ 

var app = express()

/* configurar o ejs */

app.set('view engine', 'ejs')
app.set('views', './app/views')

/* configurar o middlaware */

app.use(express.static('./app/public'));
app.use(bodyparser.urlencoded({extended: true}))
app.use(expressValidator())

consign()
    .include('./app/views')
    .include('./app/controllers')
    .include('./app/routes')
    .include('./app/public')
    .include('./app/models')
    .into(app)

/* exportar o objeto app */
module.exports = app;