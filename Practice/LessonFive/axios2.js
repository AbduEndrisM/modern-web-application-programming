
var axios = require("axios");
var express = require("express");
var app = express();


//async await
 
async function getInfo() {
    const info = await axios.get("https://randomuser.me/api/?results=10");
    console.log( info.data.results[0].gender);
}
 


//Promise
/*  function getInfo() {
    axios.get("https://api.github.com/users/KrunalLathiya")
        .then((data) => {
            console.log(data.data.name);
        })
        .catch((err) => {
            console.error("Error " + err);
        });
}

  */
 
  getInfo();

app.listen(3000, () => {
    console.log("Listening...");
});


