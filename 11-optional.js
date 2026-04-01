"use strict";
// Optional Values in parameter
function generateError(msg) {
    throw new Error(msg);
}
//generateError("An error occured") // Automatic Semicolon Insertion pitfall - add ; to explicitly tell that this is a function
// generateError()
(() => {
    let user = {
        name: 'Caezarie',
        age: 22
    };
    user.name;
    user.age;
    console.log(user.name);
    console.log(user.age);
    // console.log(user.role)
})();
// Nullish Coalescing `??` operator 
let input = '';
const didProvideInput = input ?? false;
console.log(didProvideInput); // this will return empty string because '' is not null or undefined
// try it on browser console log to see results
// update it `??` to `||`
// `||` check for falsy not false - falsy = null, undefined, 0, empty string, etc
// ?? check only if null or undefined
// Use || when you want to fall back on any falsy value.
// Use ?? when you only want to fall back on null or undefined.
