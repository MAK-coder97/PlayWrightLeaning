/* Promise.allSettled([
    Promise.reslove("Test Apassed"),

]) */

let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.resolve("Search: PASS");
let t3 = Promise.resolve("Logout: PASS");

Promise.all([t1, t2, t3]).then(function (results) {
    console.log(results);
});

Promise.allSettled([
    Promise.resolve("Api 500"),
    Promise.reject("Api 500"),
    Promise.resolve("Api-200")
]).then(function (results) {
    results.forEach(function (r) {
        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + "-> " + val);
    });

});
