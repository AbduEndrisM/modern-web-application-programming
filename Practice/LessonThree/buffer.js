
/* Creating Buffers */
// create an uninitiated Buffer of 10 octets 
// var buf = new Buffer.alloc(10);

// create a Buffer from a given array −
//var buf = new Buffer([10,20,30,40]);

// create a Buffer from a given string 
//var buf = new Buffer("Simply Easy Learning");

// create a Buffer from a given string and optionally encoding type − "ascii", "utf8", "utf16le", "ucs2", "base64" or "hex".

//var buf = new Buffer("Simply Easy Learning", "utf-8");





/* Writing to Buffers */

// syntax of the method to write into a Node Buffer −

// buf.write(string[, offset][, length][, encoding])

/* Return Value */

const buffer = new Buffer.alloc(256);
const len = buffer.write("Simply Easy Learning Abdu");
console.log("Octets written : "+  len);


const a = Buffer.allocUnsafe(8);
console.log(a);

const c =  Buffer.allocUnsafe(8).fill();
console.log(c);

const b =  Buffer.alloc(8);
console.log(b);

const d = Buffer.from("Hello");
console.log(d);

const e = Buffer.from("Hello Abdu", "utf8");
console.log(e);
console.log(e.toString());



