class Person6 {
    constructor(name,yearOfBirth,job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new
        Date().getFullYear -
        this.yearOfBirth;
        console.log(age);
    }

}

class Athlete6 extends Person6 {
    constructor(name,yearOfBirth,job,olympicGames,medals){
        super(name,yearOfBirth,job);
        this.olympicGames = olympicGames;
        this.medals =  medals;
    }
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}
const johnAthlete6 = new
Athlete6('john',1990,'runner',3,10)

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
