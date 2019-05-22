
var express = require('express');
var cookieParser = require('cookie-parser');
var router = express.Router();
var app = express();


app.use(cookieParser());

app.use('/', router)

router.get('/user', (req, res)=>{
    res.end("Hello One")
});

router.get('/login/:userName/:password', (req, res)=>{
    res.end("Login "+JSON.stringify(req.params.userName))
});


 // Express server
 app.listen((3000),  ()=>{
    console.log("Listening...")
    });