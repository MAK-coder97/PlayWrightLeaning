let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("*****************");

/* for (test of tests) {
    console.log(test);

} */

for (x of tests) {
    console.log(x);

}

console.log("*****************");

tests.forEach((test, index) => {
    console.log(test, index);

});

let students = ["aasif", "mohammed", "ajay", "rahul"];
for (let student in students) {
    console.log(student, "->", students[student]);

}