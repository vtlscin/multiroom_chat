module.exports = function(aplication){
	aplication.get('/',function(req,res){
		aplication.app.controllers.index.home(aplication,req,res);
	});
}