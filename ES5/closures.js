//lecture closures

function retirement(retirementAge){
    var a = 'years left until retirement';
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}


var retirementUS = retirement(66);
//retirementUS(1990);

//retirement(66)(1990);


//A closure is a function that makes use of variables 
//defined in outer functions that have previously returned

//Like this

function Outer(){
    var great = 'great';
    function inner(){
        var are ='closures are';
        return data + innerData;
    }
}
console.log(Outer);
