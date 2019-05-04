
const EventEmitter = require("events");

class Gym extends EventEmitter {
   
    Boom(){ 
    setInterval(()=>{
    this.emit("boom", "Athlet is working out");
    },1000);
    }
   }
 
const gym = new Gym();

gym.on("boom",(output)=>{
console.log(  output);
});
gym.Boom(); 