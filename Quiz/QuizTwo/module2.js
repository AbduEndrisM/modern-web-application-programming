// module2.js
const obj = require('./module1');
obj.incr();
console.log(obj.count);

/* 
//Q#2
// module2.js
const module1 = require('./module1');
module1.first = 'HI';
console.log(require('./module1')); */

//HI world because change the refernce for HI so the valuse changes 
// so wherever we chage the value it changes the the value because it refercs the memory location



/* 
//Q#3
const myEmitter = new EventEmitter();
myEmitter.emit('event');
myEmitter.on('event', () => {
 console.log('an event occurred!');
});
 */

