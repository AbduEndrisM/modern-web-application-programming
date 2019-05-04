/* 

function job(){
    return new Promise ((resolve, reject)=>{
       setTimeout(resolve, 1000, "Hello World!");
    });
}

async function test(){
    const val = await job();
    console.log(val);
    return "Hello Abdu";
}

test().then((output)=>{
    console.log(output);
}).catch((err)=>{
    console.error(err);
});

 */


// const promise1 = new Promise((resolve, reject) => {
//     resolve("Hello World!");
// });


// /* const promise2 = */ async function test() {
//     const x = await promise1;
//     console.log(x);
//     return "Hello Abdu";
// }

// /* promise2() */test().then ((output)=>{
//     console.log(output);
// });



//errror handling in asynch await - when promise rejected


/* 
function job() {
    return new Promise(function(resolve, reject) {
         reject ('Error happened');
    });
}

async function test() {
    try {
        let message = await job();
        console.log(message);

        return 'Hello world';
        //Only try catch stmt excute
    } catch (error) {
       console.error(error);

        return 'Error happened during test';
    }
}


test().then(function(message) {
    console.log(message);
}); */



//await can only be used in an async function


async function job() {
    return 'test';
}

async function main() {
    console.log("Message from asynch method: " +await job());
}

// Don't forget to call your main
main();