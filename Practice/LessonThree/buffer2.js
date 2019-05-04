/* 
const a = new Buffer(20);

for (var i = 0 ; i < 26 ; i++) {
  a[i] = i + 97;
}
console.log(a);
console.log( a.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( a.toString('ascii',0,5));   // outputs: abcde
console.log( a.toString('utf8',0,5));    // outputs: abcde
console.log( a.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

 */
/* 
var b = new Buffer('Simply Easy Learning');
var json = b.toJSON(b);

console.log(json);

 */

 /* 
// Concatenate Buffers
var c = new Buffer("Hello Abdu! ");
var d = new Buffer("Hello World!");
var e = Buffer.concat([c,d]);
console.log(e.toString()); */

/* 
//Compare Buffers
// buf.compare(otherBuffer);

const f = new Buffer("Abdu");
const g = new Buffer("AbduE");
const h = f.compare(g);
if (h>0){
    console.log(f+" is greater");
}
else if(h<0){
    console.log(g+" is greater")
}
else
console.log(f+ " and "+ g+ " are Equal");

 */
/* 
// Copy Buffer
// buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])

const i = new Buffer("Abdu");
const j = new Buffer(10);
     i.copy(j);
console.log(i.toString());


//copy a buffer

var buffer1 = new Buffer('Abdu Edris Mohammed');
var buffer2 = new Buffer(100);
// buffer1.copy(buffer2, 0, 4);
buffer1.copy(buffer2, 0, 4, 10);
console.log("buffer2 content: " + buffer2.toString()); 
*/


/* // Slice Buffer - the method to get a sub-buffer of a node buffer
// buf.slice([start][, end])

const k =  Buffer.from("Hello Abdu");
const l = k.slice(0,5);
console.log(l.toString());

const m = Buffer.from("Hello Abdu, Hello World!");
console.log(m.slice(6).toString())
 */

var buffer = new Buffer('TutorialsPoint');
console.log(buffer.length);