


const { Observable } = require("rxjs");

/* 
// Observavle #1


const obs = Observable.create(function (observer) {
    observer.next("Hello Abdu");
    observer.error();
    observer.complete();


});

const observer = obs.subscribe(
    function (x) {
        console.log("Value: " + x)
    },
    function (err) {
        console.error("Error: " + err)
    }, 
    function () {
        console.info("Done!")
    });


 */

//Observaer #2
/* 
const obs = Observable.create((observer) => {
    observer.next("Hello World");
    // observer.error();
    // observer.complete();

});

const subscriber = obs.subscribe(
    (output) => {
        console.log(output);
    },
    (err) => {
        console.error("Error " + err);
    },
    () => {
        console.error("Done");
    }
); */

/* const obs3 = Observable.create((observable) => {
    observable.next("ABDU!");
    observable.complete();
});

const subscribe3 = obs3.subscribe(
    (output) => {
        console.log(output);
    },
    (error) => {
        console.error(error);
    },
    () => {
        console.log("Done!");
    });
 */

//Error
 const {of} = require("rxjs");
 const{map, filter} =require(rxjs.operatros);

 const x = of(1,2,3)
 .pipe(
     map(n=>n*2),
     filter(n=>(n>10))    
 )
 x.subscribe(
     (ok)=>{
         console.log(ok);
     },
     (err)=>{
         console.error("Error" + err)
     },
     ()=>{
         console.log("Done");
     }
 )
