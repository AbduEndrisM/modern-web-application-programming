//Using promise
const promise= function(input){
   return new Promise((resolve, reject)=>{
    const x =0;   
    if (input%2==0){
            x=input;
       }
       resolve (x);

    });
};
promise([1,2,3,4,4]).then((output)=>{
    console.log(output)
});


// ["This house is nice !"].filterWords(["house","nice"]).then(data=>console.log(data));
