
const http = require("http");
const server = http.createServer();

server.on("request", function (req, res) {
    res.writeHead(200, { "Contetn-Type": "text/plain" });
    res.write("Hello World! : ")
    res.end();
    
});

server.listen(4040, () => {
    console.log("Listening!");
});