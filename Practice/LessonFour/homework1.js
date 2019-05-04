const os =require("os");
const rxjs = require("rxjs");



function checkSystem(){
    // const memorySize = os.totalmem();
    console.log(os.hostname());
    console.log(os.totalmem());
    
    console.log(os.totalmem()/(1024 * 1024 * 1024 ) + "GB");
}
 
checkSystem();

 
