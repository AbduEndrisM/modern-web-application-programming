var EventEmitter = require("events");

class Button extends EventEmitter{
        constructor(){
            super()
        this.label = 'Enter your name: ';
}
    Click(){
        // this.emit("click", this.label, "page-x: 100", " page-y: 100");
        this.emit("click", {"label": this.label, "page-x": "100", " page-y": "100"});
    }
}

const button = new Button(); 
button.on("click", (message )=>{ //message = event
    console.log(message );
    // console.log(y );
    // console.log(y );
})
button.Click();


