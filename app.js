/* Importar as configs do servidor */

var app = require('./config/server')

/* parametrizar a porta de escuta */

var server = app.listen(80, function(){
    console.log('Server on')
})

var io =  require('socket.io').listen(server)

app.set('io', io)

io.on('connection', function(socket){
    console.log('usuario is connected')

    socket.on('disconnect',function(socket){
        console.log('user is off')
    })

    socket.on('msgParaServidor', function(data){
            socket.emit('msgParaClinte',
            { apelido: data.apelido, mensagem: data.mensagem  } 
        )

            socket.broadcast.emit('msgParaClinte',
            { apelido: data.apelido, mensagem: data.mensagem  } 
        )
    if(parseInt(data.apelido_atualizado) == 0){    
            socket.emit('participantesParaCliente',
            { apelido: data.apelido } 
        )

            socket.broadcast.emit('participantesParaCliente',
            { apelido: data.apelido } 
        )
    }
        
    })

})