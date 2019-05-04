
const fs = require("fs"); 
const http = require("http");
const server = http.createServer();
const filesize = require("filesize");

//call back (err, data)
 server.on("request", function (req, res) {
    res.writeHead(200, { "Contetn-Type": "text/plain" });
    const file = fs.readFile("./note.txt", function (err, data) {
        const size= filesize(file);
    console.log(size);
    if (err){
        console.error(err);
    }
    else{
        if (size<200){
            // console.log("File is large")
        }
        else{
             // res.end(data);
        }
    }
    
    });
});


//no call back
server.on(("request"), function(req, res){
    res.writeHead(200, { "Contetn-Type": "text/plain" });
    // const file = fs.readFileSync("./note.txt");
        // file.pipe(res);    
    // res.end(data);
    });

    
 
server.on(("request"), function(req, res){
    res.writeHead(200, { "Contetn-Type": "text/plain" });
    // const file = fs.createReadStream("./note.txt");
        // file.pipe(res);    
    // res.end(data);
    });
 

    server.on(("request"), function(req, res){
        res.writeHead(200, { "Contetn-Type": "text/plain" });
        // const file = fs.statSync("./note.txt");
            // file.pipe(res);    
        // res.end(data);
        });
 
         
server.listen(4040, () => {
    console.log("Listening!");
}); 
