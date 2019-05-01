// import { resolve } from "dns";
// import { rejects } from "assert";

// console.log('Start');


// setTimeout(() => console.log('Timeout'), 1000);
// setImmediate(() => console.log('Immediate'));
// console.log("Done");
// process.nextTick(() => console.log('NextTick'));


console.log("Start");
// [1,2,3,4,5,6,7,8].even();
// [1,2,3,4,5,6,7,8].odd();

// console.log("End");
even([6,8]).then(x=>{
    console.log(x);
    // return x;
}).catch (x=>{
    // return x;
    console.log(x);
});

function even(params[]) {
    let nums=[];
    return new Promise ((resolve, reject)=>{
    // console.log("Abdu");
        if (params%2==0){
            nums=params;
        }
            resolve(nums);  }
        );
        }
 