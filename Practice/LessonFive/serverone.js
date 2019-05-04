


var express = require("express");
const app = express();


app.get("*", (req, res) => {
    res.status(200);
    res.write("Hello Abdu");
    // res.write("<html> <body> <h2> Hello World! </h2></body></html>")
    res.end();
});


app.listen(3000, () => {
    console.log("Listening.")
});