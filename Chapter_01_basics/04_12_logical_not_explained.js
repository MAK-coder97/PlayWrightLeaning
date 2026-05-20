// 04_12_logical_not_explained.js
// Explains the Logical NOT (!) operator in JavaScript

// ============================================
// What is console.log(!a); ?
// ============================================
//
// The "!" symbol is the LOGICAL NOT operator.
// It does TWO things:
//   1. Converts the value to a boolean (true/false)
//   2. Flips it to the OPPOSITE
//
// Think of it like a light switch:
//   true  → !true  → false (switch OFF)
//   false → !false → true  (switch ON)


// ============================================
// Basic Example with a boolean variable
// ============================================

let a = true;
console.log(!a);   // false  ← true flipped to false

let b = false;
console.log(!b);   // true   ← false flipped to true


// ============================================
// But wait — JavaScript converts EVERY value first!
// ============================================
//
// Before flipping, JavaScript asks:
//   "Is this value truthy or falsy?"
//
// FALSY values (become false):  false, 0, "", null, undefined, NaN
// TRUTHY values (become true):  everything else (even [] and {})


// Falsy examples
let emptyString = "";
console.log(!emptyString);     // true   ← "" is falsy → flipped to true

let zero = 0;
console.log(!zero);            // true   ← 0 is falsy → flipped to true

let nothing = null;
console.log(!nothing);         // true   ← null is falsy → flipped to true

let notDefined;
console.log(!notDefined);      // true   ← undefined is falsy → flipped to true


// Truthy examples
let message = "hello";
console.log(!message);         // false  ← "hello" is truthy → flipped to false

let count = 42;
console.log(!count);           // false  ← 42 is truthy → flipped to false

let emptyArray = [];
console.log(!emptyArray);      // false  ← [] is TRUTHY (weird JS!) → flipped to false

let emptyObject = {};
console.log(!emptyObject);     // false  ← {} is TRUTHY (weird JS!) → flipped to false


// ============================================
// Double NOT (!!) — force to real boolean
// ============================================
//
// !! flips TWICE, giving you the actual boolean value

let score = 100;
console.log(!!score);          // true   ← 100 is truthy

let username = "";
console.log(!!username);       // false  ← "" is falsy


// ============================================
// Common real-world use case
// ============================================
//
// Check if something is "missing" or "empty"

let userInput = "";

if (!userInput) {
    console.log("Input is empty! Please type something.");
}
// Output: "Input is empty! Please type something."
// Because "" is falsy, !"" becomes true, so the if-block runs


let isLoggedIn = true;

if (!isLoggedIn) {
    console.log("Please log in first.");
} else {
    console.log("Welcome back!");
}
// Output: "Welcome back!"
// Because isLoggedIn is true, !true becomes false, so the else-block runs


// ============================================
// Quick Reference Table
// ============================================
//
// | Value         | !Value  | Reason                    |
// |---------------|---------|---------------------------|
// | true          | false   | direct flip               |
// | false         | true    | direct flip               |
// | ""            | true    | empty string is falsy     |
// | "hello"       | false   | non-empty string is truthy|
// | 0             | true    | zero is falsy             |
// | 42            | false   | non-zero number is truthy |
// | []            | false   | empty array is truthy     |
// | {}            | false   | empty object is truthy    |
// | null          | true    | null is falsy             |
// | undefined     | true    | undefined is falsy        |


// ============================================
// ⚠️ Important Warning
// ============================================
//
// If "a" is NOT declared at all, you get an ERROR:
//
//   console.log(!someRandomVar);
//   // ❌ ReferenceError: someRandomVar is not defined
//
// Always declare your variables first!
