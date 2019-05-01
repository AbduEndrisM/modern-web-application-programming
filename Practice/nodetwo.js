const http = require("http");
http.createServer(function(require, response){
	response.writeHead(2000, {'ContentType': "text/plain"});
	response.end("Hello World!");	
}).listen (1337, ()=> console.log("127.0.0.1"));