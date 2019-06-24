/*We create a new scope when we create a funciton
lexical scope is when a function is within a function
here is an example.

*/
//global scope are not visible to their parent functions
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second(); //local scope

    function second(){
        var c = 'Hey!';
        third()

        
    }
}

function third(){
    var d = 'john';
    console.log(a+d);
}
