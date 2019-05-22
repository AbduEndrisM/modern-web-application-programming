var http = require("http");
var fs = require("fs");
//HTTP server
/* 
var homeController = function (req, res) {
    fs.readFile('index.html', (err, data) => {
        res.write(data);
        res.end("Done");
    })
}

var loginController = function (req, res) {
    fs.readFile('login.html', (err, data) => {
        res.write(data);
        res.end("Done");
    })
}

var server = http.createServer();
server.on("request", (req, res) => {

    if (req.url == "/") {
        homeController(req, res);
    }
    else if (req.url == "/login") {
        loginController(req, res);
    }
    else
    {
        res.write("ABDU");
    }


});

 */
 

 // Express server
server.listen((4040),  ()=>{
    console.log("Listening...")
    });