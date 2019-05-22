

var express = require("express");
var app = express();
var morgan = require('morgan');

var router= express.Router();

// var favicon = require("serve-favicon");
// app.use(favicon(path.join(__dirname, 'public','favicon.ico' )))

const grades = {
            "id" : "1", 
            "name" : "Abdu",
            "course" :"CS572"
        }
 

app.use(express.json());


app.get("/", (req, res)=>{
res.send({type:"GET"})
 
res.end(grades);
});

app.post("/login", (req, res)=>{
    res.send({type:"POST"})
    res.end();
});

app.put("/login/:id", (req, res)=>{
    res.send({type:"PUT"})
});

app.delete("/login/:id", (req, res)=>{
    res.send({type:"DELETE"})
});

app.listen(3000, ()=>{
    console.log("Listening...")
});
// module.exports = router;