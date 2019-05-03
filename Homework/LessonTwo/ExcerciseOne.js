const { from } = require('rxjs');
const { filter } = require('rxjs/operators');

Array.prototype.even = function () {
   var evenFunct = function () {
        var evennumbers = [];
        from(this)
            .pipe(
                filter(number => number % 2 == 0)
            )
            .subscribe(
                evenValues => {
                 
                    evennumbers.push(evenValues);
                }
            );
        console.log(evennumbers);
    };
    setTimeout(evenFunct.bind(this), 0);
}

console.log('Start');
[1, 2, 3, 4, 5, 6, 7, 8].even();
// [1, 2, 3, 4, 5, 6, 7, 8].odd();
console.log('End');