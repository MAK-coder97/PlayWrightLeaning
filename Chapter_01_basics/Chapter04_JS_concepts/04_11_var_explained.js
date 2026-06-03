var a = 10;
console.log(a); // Output: 10

function pritngtHello() {
    console.log("Hello, World!");
    console.log("Value of a inside function: " + a); // Output: 10
}
pritngtHello();
//
//console.log("Value of x outside function: " + x); // Output: 10
//console.log(typeof x); // Output: 10
//const x = 20;// 

console.log("Value of y outside function: " + y); // Output: 20
var y = 30;

sayHello();
const sayHello = function () {
    console.log("Hello, World!");
}

console.log(testName);
let testName = "Login Test";

let count = count + 1; // ReferenceError: Cannot access 'count' before initialization