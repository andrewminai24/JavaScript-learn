var andrew = {
  printfirstname:function(){
      console.log("andy");
      console.log(this === andrew);
  }

};
andrew.printfirstname();

function doSomething(){
    console.log("worthless");
    console.log(this === global);
}
doSomething();

var http = require('http');
var fs = require('fs');

//404 response
function server404Response(response){
    response.writeHead(404,{"context-Type": "text/plain" });
    response.write("Error 404: Page not found");
    response.end();
}



function onRequest (request,response){

    if(request.method == 'GET' && request.url == '/'){
        response.writeHead(200,{"context-Type": "text/html" });
        fs.createReadStream("./index.html").pipe(response);


    } else {
        server404Response(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("server is running...");
