//setInterval has the same behavior as setTimeout but the code is executed multiple times. You have to call clearInterval to kill the timer


// //setInterval - clearInterval - setTimeout
// let counter =1;

// let timer = setInterval (function(){
//     console.log ("Counter: " + counter);
//     counter+=1;
//     if(counter>3){
//         setTimeout(()=>{console.log("Finished")},1000); //display after a second
//         clearInterval(timer);
//     }
// },1000);

// console.log("Set Interval ")



setTimeout(function(){
    console.log("callback1 called");
    console.log("callback1 called too early");

},2000);

let count=0;
let timer = setInterval(function(){
    console.log("callback2 called");
    console.log("callback2 called too early");
count+=1;
if (count>=3){
    clearInterval(timer);
}
},1000);