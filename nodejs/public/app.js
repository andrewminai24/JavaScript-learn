//When you are imported a variable from another file to app.js
//the app.js is where you export your files to here

//required means we are requiring a file/module
//Whenever you are importing modules you dont include .js because
// a browser does not have access to your file system
//In this case avatar is a public method


//do not include .js extension
//require('./bob');
//require('./andrew');
var fs = require('fs');
//filesystem
fs.writeFileSync("data.txt","corn is good");
console.log(fs.readFileSync("data.txt").toString());
//setInterval set repedately
