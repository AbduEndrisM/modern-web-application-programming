// import { range } from 'rxjs';
// import { map, filter } from 'rxjs/operators';


const { range } = require("rxjs");
const { map, filter } = require('rxjs/operators');

const x = range(1, 10)
    .pipe(
        filter(x => x % 2 === 1),
        map(x => x + x)
    );
x.subscribe(x => console.log(x));

const name = "Abdu Endris Mohammed";

name
.pipe(
     map(x=>x)
);
console.log(l);



