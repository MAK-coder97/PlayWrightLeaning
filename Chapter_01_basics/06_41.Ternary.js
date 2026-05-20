let statusCode = 404;
let message = (statusCode < 300) ? "Success" :
    (statusCode < 400) ? "Redirection" :
        (statusCode < 500) ? "Client Error" : "Server Error";
console.log(message);