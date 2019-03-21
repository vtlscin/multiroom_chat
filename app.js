// importar as configurações do servidor
var app = require('./config/server.js');

//parametrizar a porta de escuta
var server = app.listen(80,function(){
	console.log('Servidor Online');
})

var io = require('socket.io').listen(server);

app.set('io',io);//cria variavel global ('varivael','valor')

// criar a conexão por websocket
io.on('connection',function(socket){//escutando eventos de conexão 
	console.log('Usuario conectou');

	socket.on('disconnect',function(){
		console.log('Usuario desconectou');
	});

	/* dialogo */
	socket.on('msgParaServidor', function(data){
		//mensagem para aparecer na tela do cliente
		socket.emit(
			'msgParaCliente', 
			{apelido: data.apelido, mensagem: data.mensagem}
		);
		//repetindo mensagem pois broadcast envia mensagens para todos
		//clientes menos para o que enviou
		socket.broadcast.emit(
			'msgParaCliente', 
			{apelido: data.apelido, mensagem: data.mensagem}
		);
	/* dialogo */

	/* participantes */
		if(parseInt(data.apelido_atualizado_nos_clientes) == 0) {
			socket.emit(
				'participantesParaCliente', 
				{apelido: data.apelido}
			);
			
			socket.broadcast.emit(
				'participantesParaCliente', 
				{apelido: data.apelido}
			);
		}
	/* participantes */	

	});


});