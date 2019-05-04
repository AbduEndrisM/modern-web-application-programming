
//Here’s a simple Node web server designed to exclusively serve the big.file:
const fs = require("fs");

/* 
const server = require('http').createServer();

server.on('request', (req, res) => {
    fs.readFile('dsads.jpg', (err, data) => {
        if (err) {
            console.log("Error");
            // throw err;
        }
        res.end(data);

    });
});
 */
/* 

server.on("request", function (req, res) {
    fs.readFile("adsadas.mp4", function (err, data) {
        if (err){
            throw err
        }
        res.end(data);
    });
});

 */

/* 
 // We can pipe that to the response object:
//  readableSrc.pipe(writableDest)  
 server.on ("request", (req, res)=>{
    const src = fs.createReadStream("adasdas.jpg");
    src.pipe(res);
    // readableSrc
    // .pipe(transformStream1)
    // .pipe(transformStream2)
    // .pipe(finalWrtitableDest)
});

 server.listen(8000); */

/* 
 //the syntax
const readable = fs.createReadStream("link.jpg");
const writable = fs.createWritableStream("des.jpg");
readable.pipe(writable);
 */
/* 
//  zip file using stream
const zlib = require("zlib");
const gzip = zlib.createGzip();
const readable = fs.createReadStream("link.jpg");
const writable = fs.createWritableStream("des.jpg.gz"); // compressed
readable.pipe(gzip).pipe(writable);

 */

 