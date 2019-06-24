var connect = require('connect');
var http = require('http');

var app = connect();
// code to handle user request is called middleware

function profile(request,response){
    console.log("User requested profile");
}
function forum(request,response){
    console.log("user requested forum");
}





http.createServer(app).listen(8888);
console.log("Server is running....");
