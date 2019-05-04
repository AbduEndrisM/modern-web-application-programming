// import { from } from "rxjs";
// import { filter } from "rxjs/operators";

const { from } = require('rxjs');
const { filter } = require('rxjs/operators');


Array.prototype.even = ()=> {

    let arr = [];
    from(this)
        .pipe(
            filter(x => x % 2 == 0)
        )
        .subscribe(
            evenValues => {
                arr.push(evenValues);
            }
        );
    console.log(arr);
}

Array.prototype.odd = function () {

    let arr = [];
    from(this)
        .pipe(
            filter(x => x % 2 == 1)
        )
        .subscribe(
            oddValues => {
                arr.push(oddValues);
            }
        );
    console.log(arr);
}


console.log("Start");
[1, 2, 3, 4, 5, 6].even();
[1, 2, 3, 4, 5, 6].odd();
console.log("End")