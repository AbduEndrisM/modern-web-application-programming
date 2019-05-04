var os = require("os");
const roundTo = require('round-to');
/* 
 
// Total system memory
const ramSize = roundTo(os.totalmem()/(1024*1024*1024),2);
console.log('total memory : ' +  ramSize+ " GB."); */

const si = require('systeminformation');

// const status = si.cpu();


// status
//     .then(data => {
//         console.log(data.brand);
//     })

//     .catch(error => console.error(error));


    

os.totalmem()
.then(data => {
    console.log(roundTo(data/(1024*1024*1024),2));
})

