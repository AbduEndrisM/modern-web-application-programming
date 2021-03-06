const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');
var bodyParser = require('body-parser');

var dbo;
var url = 'mongodb://localhost:27017/';

var app = express();
var port = 8888;

//========DB==========
MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    console.log('DB connection success');
     dbo = db.db('library');
})

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.route('/secrete')
                    .get((req,resp)=>{
                        var message = dbo.collection('homework7').findOne({},(err,result)=>{
                            if(err) throw err;
                            var message = result.message;
                            var mykey = crypto.createDecipher('aes256', 'asaadsaad');
                            var mystr = mykey.update(message, 'hex', 'utf8')
                                mystr += mykey.final('utf8');
                            console.log(mystr);
                            resp.end(mystr);
                            //var message = result.message;
                            
                        })
                    });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server started on port: ' + port);

