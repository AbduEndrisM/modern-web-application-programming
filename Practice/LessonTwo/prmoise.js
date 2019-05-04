/* 

//Even or Odd
const promise1 =  (num) => {
    return new Promise((resolve, reject) => {
        if (num%2 == 0) {
            resolve("Even");
        }
        else if (num%2==1){
            resolve("Odd");
        }
        else{
            reject("Not a number");
        }
    });
};

promise1('ee').then(result => {
    console.log("The number is " + result);
}).catch(err => {
    console.log("Error.... " + err)
});


 */


/* 
//asynch awit I

function promise2(num1, num2) {
    return new Promise((resolve, reject) => {
        const sum = num1 + num2;
        resolve(sum);
        reject("a Error on the given numbers");
    });
}

async function test(num1, num2){
    try{
        const answer = await promise2(num1, num2);
        // console.log(num1 + " "+ num2)
        return answer;
    }
    catch{
        return "Error..."
    }
    
}

test(4, 5).then(result => {
    console.log("Sum is: " + result);
}).catch(err => {
    console.log(err)
})
 */


 //asynch awit II

function promise3(num1, num2) {
    return new Promise((resolve, reject) => {
        const sum = num1 + num2;
        
        resolve(sum);
        reject("a Error on the given numbers");
        console.log("Inside promise + synch ---- first"); // not asynch but return with promise
    });
}

async function test(num1, num2){
    console.log("First")
    try{
        const answer = await promise3(num1, num2);
         console.log("Sum is: "+ answer);
         console.log("Inside async but before all asynch calls")
    }
    catch{
        console.log("Error...")
    }
    
}

test(43, 5);
console.log("Finish")