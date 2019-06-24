function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

//iffe
(function (){
    var score = Math.random() * 10;
    console.log(score >= 5);
})(5);

//you can only call the function once here in the iffe
//You use the iffe to obtain data privacy
//to avoid variables in our global context
