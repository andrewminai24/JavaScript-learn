//Lecture Classes
class Person6 {
    constructor (name,yearOfBirth,job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge(){
        var age = new Date().getFullYear - 
        this.yearOfBirth;
        console.log(age);
    }
    //Static methods are not inherited
    static greeting(){
        console.log('Hey there');
    }
}
const john6 = new Person6('John',1990,'teacher');
console.log(john6);

Person6.greeting();
