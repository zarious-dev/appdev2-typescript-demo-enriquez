console.log("Hello World!")

let userName: string = "Caezarie";
let userAge: number = 22;

// ...

userAge = 22;

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

function add(a: number, b = 5): number {
    return a + b
}

console.log(add(10)) //add(10)
 // add('10')
console.log(add(10, 6)) //add(10, 6)
 // add(10, '6')
