
var axios = require("axios");
var express = require("express");
var app = express();

app.enable("case sensetive routing");
app.enable("trust proxy");
app.enable("strict routing");
app.disable("x-powered-by");
app.disable("etag")

app.get("/", (req, res)=>{
    res.status(200);
    res.write("Hello Abdu");
   res.send( getInfo(req, res));
    // res.json(getInfo());
 res.end();

    
});

async function getInfo(req, res) {
    const info = await axios.get("https://randomuser.me/api/?results=10");
    const data = await info.json();
    // console.log( info.data.results[0].gender);
    // console.log(info.data);
    return data;
}
 



app.listen(3000, () => {
    console.log("Listening...");
});


