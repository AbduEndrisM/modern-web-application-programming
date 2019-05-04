const fs = require("fs");
const http = require("http");
const server = http.createServer();

/* 
server.on("request", (req, res)=>{
    res.writeHead(200),
    res.write("Hello World");
    res.end();
 
  });
 server.listen(8000, ()=>{
     console.log("Listening!");
 });

  */
/* 
server.on("request", function (req, res) {
    const file = fs.readFile("adsadas.mp4", function (err, data) {
        if (err) {
            throw err
        }
        file.pipe(res);
        res.end(data);
    });
});
 */

 

