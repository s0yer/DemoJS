

process.title = 'DemoJsServer';
var args = process.argv, 
	port = args[2] || 7853, 
	webServer = require('./server');
            
webServer.listen(port, function(){
	console.log('Server started at port ' + port);
})