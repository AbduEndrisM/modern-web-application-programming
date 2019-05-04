var fs = require("fs");
var express = require("express");
var app = express();
// var path = require("path");

app.get("/", (req, res) => {
    res.status(200);
    res.send("Hello Abdu");
    res.write("<html> <body> <h2> Hello World! </h2></body></html>")
    res.end();
});


  app.get("/login", (req, res) => {
    fs.readFile("index.html", (err, data)=>{
        res.write(data);
        res.end();
    });
}); 


app.listen(3000, ()=>{
    console.log("Listening...");
});