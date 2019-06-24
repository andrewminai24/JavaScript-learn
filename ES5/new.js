function Person(name){
    this.name = name;

}
//ES5
Person.prototype.myFriends5 = 
function(friends){

    var arr = friends.map(function(el){


        return this.name + ' is friends  with' + el;
    }.bind(this));
    
    //the bind method creates a copy of this method
    console.log(arr);


}
var friends = ['bob','jane','mark'];
new
Person('John').myFriends5(friends);

function Person(name){
    this.name = name;

}
//ES6
Person.prototype.myFriends5 = 
function(friends){

    var arr = friends.map(el =>
        `${this.name} is friends with ${el}`);

        console.log(arr);
    }
    new 
    Person('Mike').myFriends6(friends);

}
    
    //the bind method creates a copy of this method





