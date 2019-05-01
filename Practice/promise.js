

/* 
//Even or Odd
const promise1 = new Promise( function(resolve, reject){
	const x= 32;
	if(x%2==0){
		resolve('Even');
	}
	else{
		reject('Odd');
	}
});

promise1.then((result)=>{
	console.log(result);
}).catch((err)=>{
	console.log(err);
});
 */

/* 
//using =>

const promise2 = new Promise( (resolve, reject)=>{
   const x= 3;
   if(x%2==0){
	   resolve('Even');
   }
   else{
	   reject('Odd');
   }
});

promise2.then((result)=>{
   console.log(result);
}).catch((err)=>{
   console.log(err);
});

*/


/* 
const promise3 = new Promise( function(resolve, reject){
	const x= "This house is nice!";
	const y = x.split(" ");
	y.map()

		if(element=="house"){
			resolve("****");
		}
		else{
			resolve(element);
		}
 
	});
	
});
promise3.then(function(answer){
console.log(answer);
})
.catch(function (answer){
	console.log(answer);
});

   */


/* 
//Promise with timer and multiple callback

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
	  resolve("Hello Abdu");
  //Having multiple resolve = useless
	  // resolve("Hello Abdu 2");
	  // resolve("Hello Abdu 3");
  	
	  reject("Hello World");
  }, 1000);
});

promise4.then((result) => {
  console.log(result + " 1st");
}).catch((err) => {
  console.log(err);
});

promise4.then((result) => {
  console.log(result+ " 2nd");
});
promise4.then((result) => {
  console.log(result+ " 3rd");
});

*/

/* 

let promise5 =  new Promise((resolve, reject)=>{
resolve ("Hello World");
});
promise5.then((result)=>{
	console.log(result);
});


let promise6 = function(){
	return new Promise (function(resolve, reject){
		resolve("Hello Abdu!");
		reject("Hello World!")
	});
};	
promise6().then((result)=>{
	console.log(result);
}); */



//Even - Odd - Not number 

const promise7 = function (number) {
	return new Promise((resolve, reject) => {
		if (isNaN(number)) {
			reject("Not number");
		}
		if (number % 2 == 0) {
			resolve("Even");
		}
		else {
			resolve("Odd");
		}
	});
};

const num = 1232;
promise7(num).then((answer) => {
	console.log(answer);
}).catch((err) => {
	console.error(err);

});
 