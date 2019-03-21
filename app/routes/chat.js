module.exports = function(aplication){
	aplication.post('/chat',function(req,res){
		aplication.app.controllers.chat.iniciaChat(aplication,req,res);
	});
	aplication.get('/chat',function(req,res){
		aplication.app.controllers.chat.iniciaChat(aplication,req,res);
	});
}