const Emitter = require("./emitter");
var emtr = new Emitter();

emtr.on ("greet", function(){
    console.log("Ho from CS572");

});

console.log("Abdu");
emtr.emit("greet");