

var express = require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var bodyParser = require("body-parser");

var client = new MongoClient("mongodb://localhost:27017");

app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", function (req, res, next) {
    res.send("Hello Abdu");
});

app.get("/users", function (req, res, next) {
    let allUsers=[];
    client.connect(function (err, doc) { 
    const db=doc.db('MUM');
     const cursor =   db.collection("users").find();
            // assert.equal(null, error);
            // cursor.forEach(x=>res.json(x));
            cursor.forEach(function(err, doc){
            //     // assert.equal(doc, err);
                allUsers.push(doc)}, 
                function(){
                    db.close();
            //     res.send("sfdghjklj")    
            });
    // res.send("Hello Abdu");
});
});

app.get("/insert", function (req, res, next) {
    const user = {
        firstName: "Abdu",
        lastName: "Edris",
        Dept: "MSCS"
    };

    client.connect(function(err, doc) {
        // assert.equal(null, err);
        const dbc=doc.db('MUM')
        db.collection("users").insertOne(user, function (err, result) {
            // assert.equal(null, error);
            console.log("User Inserted");
            db.close();
        });
        res.send("Hello Abdu");
    });
});
    // app.post("/delete", function (req, res, next) {
    //     res.send("Hello Abdu");
    // });

    // app.update("/update", function (req, res, next) {
    //     res.send("Hello Abdu");
    // });


    app.get("/search/:q", function (req, res, next) {
        const db= client.db("MUM");
        const coll = db.collection("lectures");
        const cursor = coll.findOne({"name":req.params.q});
        res.json(cursor);

        // res.send("Hello Abdu");
    });


app.listen(3000, ()=>{
    console.log("Listening...");
});