/*Regular function call this keyword points
at the global object.(the window object in the browser.)

Method Call in this variable points to the object that is calling the method

The this keyword is not assigned to a value until a function whe is is define is actually called
*/
console.log(this);


var john = {
    name:'JOHN',
    yearOfBirth: 1990,
    calculateAge:function(){
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();


var mike = {
    name:'mike',
    yearOfBirth:1984

};
mike.calculateAge = john.calculateAge;
mike.calculateAge();