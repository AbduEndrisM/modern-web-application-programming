const http = require("http");
const server = http.createServer();
const {fork} = require("child_process");
const childProcess = fork("longoperation.js");


server.on("request", (req, res)=>{
childProcess.send("start");  
childProcess.on("message", (sum) =>{    //sum is a return value from child process, message is a listening evetn from child global process object
    res.end("Sum is: ${sum} "+ sum);
});
      
});


server.listen((4040),  ()=>{
console.log("Listening...")
});