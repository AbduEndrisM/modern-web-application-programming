
var express = require('express');
var cookieParser = require('cookie-parser');
// var router = express.Router();
var app = express();


app.use(cookieParser());


app.get('/', (req, res)=>{
    res.end("Hello One")
});

app.get('/login', (req, res)=>{
    res.end("Hello Two")
});


 // Express server
 app.listen((3000),  ()=>{
    console.log("Listening...")
    });