

const http = require("http");
const server = http.createServer();
const {fork} = require("child_process");
const childProcess = fork("fileread.js");



server.on(("simple.txt","request"), function(req, res){
    childProcess.send("start");  
    res.writeHead(200, { "Contetn-Type": "text/plain" });
    childProcess.on("message", answer=>{
        res.end("The file is:  "+ answer);
    });
});

server.listen((4040),  ()=>{
console.log("Listening...")
});