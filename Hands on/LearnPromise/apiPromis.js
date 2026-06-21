let apiCall = new Promise(function (reslove, reject) {
    //reslove({ Status: 200, body: "user data" });
    reject({ status: 500, body: "failure" });

});

apiCall.then(function (response) {
    console.log(response.status);

}).catch(function (error) {
    console.log(error.status);
});

console.log(typeof (NaN));

console.log('5' - 3);

console.log(0 || 'hello');

console.log(10 % 3);

console.log(Boolean([]));

let day = 3;
switch (day) {
    case 1: console.log("Mon");
    case 2: console.log("Tue");
    case 3: console.log("Wed");
    case 4: console.log("Thu");
    default: console.log("Other");
}