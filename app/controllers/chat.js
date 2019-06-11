module.exports.chatInit = function(application, req, res){

    var dadosForm = req.body

    req.assert('apelido', 'Nome ou apelido é obrigatorio').notEmpty();
    req.assert('apelido', 'Apelido deve ter no minimo 3 e no maximo 5 caracteres').len(3,5);

    var erros = req.validationErrors()

    if(erros){
        res.render('index', {validacao : erros})
        return;
    }

    application.get('io').emit(
        'msgParaClinte', 
        {apelido: dadosForm.apelido , mensagem: 'acabou de entrar no chat' })

    res.render('chat', { dadosForm: dadosForm })

}