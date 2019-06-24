const person = {
    name: "andrew",
    walk() {
        console.log(this);
    }
};

person.walk();

const walk = person.walk.bind(person);
walk();
