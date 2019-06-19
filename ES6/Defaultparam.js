//Lecture Default parameters

function SmithPerson(firstName,yearOfBirth,lastName,nationality){
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? 
    nationality = 'american' :
    nationality = nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;

}

var john = new SmithPerson('John',1990);
var emily =  new SmithPerson('emily',1934,'Diaz','Spanish');
console.log(emily);
console.log(john);