// Reverse a string without using built-in functions like reverse() or split()

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example usage
const original = "Hello World";
const reversed = reverseString(original);

console.log("Original:", original);
console.log("Reversed:", reversed);
