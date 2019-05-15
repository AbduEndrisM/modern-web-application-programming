

//conversion to pure JS after compilation
var hello = (()=>{
     "Hello Wolrd";
});

 
var world = function(){
    return "Hello Abdu"
}


//declaration 
let a:number=3;
let b:number=4;
let c:boolean=false;
let d:string="abdu";

//
()=>{
    a+b;
}
console.log(a+" "+b+" "+ " "+ c +" "+d);

//null  undefined
let x:undefined;
let y=undefined;
let xx:null;
let yy:null;


//Array
let myArr=[3,4,5,6];

let myArray:number[];
myArray=[1,2,3];
myArray=[];
myArray=[];
myArray.push(1,2,3);
myArray.push(1); 

// b=myArray.pop();


//Tuples
let arr:[number, string, boolean]= [2,"Abdu", true];
//arr=[3];


//function

//any
let abc:any;
abc=3;
abc="Abdu";
abc=true;

//union
let bcd:number|boolean;
// bcd="abdu";
bcd=true;
bcd=4;

let cde:number|boolean|string;
 cde="abdu";






