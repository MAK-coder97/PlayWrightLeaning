let status = ["Pass", "Fail", "Skip"];
console.log(status[0]);
console.log(status[1]);
console.log(status[2]);

console.log("********************")

console.log(status.at(-1));
console.log(status.at(-2));
console.log(status.at(-3));

let arr = [1, 2, 3];
console.log(arr);

// add to end 
arr.push(4, 5);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.shift(0);
console.log(arr);