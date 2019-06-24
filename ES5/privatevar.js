// How do you create a private variable in JavaScript

function secretVariable(){
    var private = "secret code";
    return function(){
        return private
    }
}

var getPrivateVariable = secretVariable()
console.log(getPrivateVariable)
