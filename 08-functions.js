"use strict";
(() => {
    // Function Return Value Types
    function add(a, b) {
        return a + b;
    }
    console.log(add(5, 10)); //15
    //console.log(add("5", 10)) //510 // this is error. type "5" is not assignable to type "number"
    // Special Type `void` - return nothing
    // Function doesn't return a meaningful value, but it does finish
    function log(message) {
        console.log(message);
    }
    log("Hello, Ebriwan!");
    // Another Special Type `never`
    // Function never finishes normally (throws error, infinite loop)
    function logAndThrow(errorMessage) {
        console.log(errorMessage);
        throw new Error(errorMessage);
    }
    // Function as Types
    // Useful for callback functions
    // () => {} is not same as () => void
    // () => {} - arrow function
    // () => void - function type
    function performJob(cb) {
        // ...
        cb('Job Well Done!');
    }
    let logMsg = (msg) => {
        console.log(msg);
    };
    performJob(logMsg);
    let user = {
        name: "Cella",
        age: 22,
        greet() {
            console.log(`Hello, ${this.name}!`);
            return this.name;
        }
    };
    user.greet();
})();
