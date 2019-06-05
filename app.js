/* Importar as configs do servidor */

var app = require('./config/server')

/* parametrizar a porta de escuta */

app.listen(80, function(){
    console.log('Server on')
})