const dns = require('dns');

 dns.resolve4('www.sakarya.edu.tr', (err, addresses) => {
    if (err)
        console.log(err);
    else
        console.log(addresses);
}); 

 
const promise1 = new Promise((resolve, reject) => {
    dns.resolve4('www.sakarya.edu.tr', (err, addresses) => {
        if (err)
            reject(err);
        else
            resolve(addresses);
    });
    });

promise1.then((x) => {
    console.log(x);
}).catch((err)=>{
    console.error("Error: "+err);
});

 


const ipAddress = ()=> {
    return new Promise((resolve, reject) => {
        dns.resolve4('www.sakarya.edu.tr', (err, addresses) => {
            if (addresses)
                resolve(addresses);
            else
                reject(err);
        });
    });
}

async function test() {
    try{
        const val = await ipAddress();
          console.log(val);
    }
    catch{
        reject("Error "+ err);
    }  
} 
test();