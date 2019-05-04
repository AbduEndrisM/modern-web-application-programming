const { Observable } = require('rxjs');

// Create an Observable
var observable = Observable.create((observer) => {
    observer.next('Hello World!');
    observer.next('Hello Again!');
    observer.complete();
    observer.next('Bye'); // this will not be shown
});

// Subscribe to the Observable, and print stream to the console
observable.subscribe(
    (x)     => console.log('next: ' + x),
    (error) => console.log('error: ' + error),
    ()      => console.log('completed')
);