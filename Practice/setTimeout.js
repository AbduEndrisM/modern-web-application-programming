/* 

setTimeout(function() {
    console.log('Hello NodeJS  I am an asynchronous message');
}, 1000);


console.log('Hello World! I am a synchronous message');

setTimeout(()=>{
    console.log("Hello Abdu I am an asynchronous message")}, 2000);

    setTimeout(()=>{
        console.log("Hello Abdu I am an asynchronous message with time 0")});
    

    console.log("Test Synch");
    for (let i=0; i<3; i++){
        callFunc(i);
    }

    function callFunc(x) {
        
     console.log( x*x);
    } */

/*   function job1(num) {
      setTimeout(function() {
          num('test 1');
      }, 2000);
  }

  job1((x)=>{
      console.log(x);
  }); */

function job1(callback) {
    setTimeout(function () {
        callback('One');
    }, 4000);
}

function job2(callback) {
    setTimeout(function () {
        callback('Two ');
    }, 1000);
}

//Call job1 and job2 from here - nested
//
job1(function (data) {
    console.log(data + "  first"); //test 1 - job1 excutes first

    job2(function (data) {  // and then job2 
        console.log(data + " first");
    });
});

/* 
//the same here  - indvidual callback
job1(function (data) {
    console.log(data + " second"); //test 1 - job1 excutes first
});
job2(function (data) {  // and then job2 
    console.log(data + " second");
});

//using =>
job1(function (data) {
    console.log(data + " third"); //test 1 - job1 excutes first
});
job2(function (data) {  // and then job2 
    console.log(data + "  third");
});
 */