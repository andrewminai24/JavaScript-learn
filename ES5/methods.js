var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthyear: 1990,
    family: ['Jane','Mark','Bob','emily'],
    job:'teacher',
    isMarried:false,
    calcAge: function(){
        this.age = 2018 - this.birthYear;
    }
};

console.log(john.calcAge());
john.age = john.calcAge()

