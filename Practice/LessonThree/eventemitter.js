/* var EventEmitter = require("events");
class Compro extends EventEmitter{
    constructor(){
        super();
        
        this.message = 'Compro Student';
    }
    Visit(){
        this.emit("student", "Abdu" , "Edris is ");
        
        console.log("a " + this.message);
    }
}

const student = new Compro();
student.on("student", function(fName, lName){
    console.log("Hello "+ fName+" "+ lName);
});
student.Visit(); */


//similar to Lecure03 -- slide#19 
const EventEmitter = require("events");

class Greeting extends EventEmitter{
    
    Hello(){
        this.emit("greeting");
    }
}

const greeting = new Greeting();
greeting.on("greeting", function(){
    console.log("Hello Abdu");
});

greeting.Hello();