/* 

function job(delay) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Resolving', delay);
            resolve('done ' + delay);
        }, delay);
    });
}


var promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

promise.then(function(data) {
    console.log('All done');
    data.forEach(function(text) {
        console.log(text);
    });
});
 */
//promise multiple paramters

function sum(x,y,z){
    return new Promise ((resolve, reject)=>{
        resolve(x+y+z);
        reject("Error");
    });
}

// const promise= (sum(3,4,5));
//promise.then ((answer)=>{
//sum(4,3,3,3,3).then ((answer)=>{
sum(4,3,3).then ((answer)=>{
    console.log("Sum is: "+ answer);
}).catch((err)=>{
    console.error(err);
});

/* 
 function sum (x,y){
     return new Promise ((resolve, reject)=>{
        resolve(x+y);
     });
 }
 const promise = Promise.all([sum(4,4),sum(5,5), sum(8,6)]);

 promise.then((x)=>{
     x.forEach(element => {
        console.log(element); 
     });

 }); */