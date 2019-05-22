
const axios = require('axios')
const express = require('express');
const app = express();


app.enable("case sensetive routing");
app.enable("trust proxy");
app.enable("strict routing");
app.disable("x-powered-by");
app.disable("etag");



// app.use(function(req, res, next) {   
// res.header("Access-Control-Allow-Origin", "*");   
// res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,PATCH,OPTIONS');   
// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Length");   
// next();
// });


app.get('/users', (request, response) => {
    response.status(200);
    response.set('Content-Type', 'text/html');
    // console.log('init 0');
    (async function () {
        // console.log('init 2')
        let responseObj = await axios.get('https://randomuser.me/api/?results=10');
        // console.log('init 3');

        responseObj.data.results.forEach(element => {
            response.write("Name: " + element.name.title + " " + element.name.first + " " + element.name.last);
            response.write('<br>')
            response.write("Gender: " + element.gender)
            response.write('<br>')
            response.write("Address: " + element.location.street + " " + element.location.city + ", " + element.location.state + ", " + element.location.postcode);
            response.write('<br>')
            response.write("Name: " + element.email);
            response.write('<hr>')
        });
        response.end();
        // console.log('init 4');
    })();
    // console.log('init 5');
})
app.listen(3000, () => console.log('Listening...'));
