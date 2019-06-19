// Lecture Maps
//With maps when can use any primitive value as keys
//even functions and objects

const question = new Map();
//This is how you define a key value pair
question.set('question','What is the official name of the latest major JavaScript version?');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('correct',3);
question.set(true,'Correct answer');
question.set(false,'Wrong,please try again');
console.log(question);

console.log(question.get('question'));
console.log(question.size);

if(question.has(4)){
    question.delete(4);
    //console.log('Answer 4 is here');
}

//question.clear();
//question.forEach((value,key) =>
//console.log(`This is a ${key}, and its set to ${value}`));

for (let [key,value] of 
    question.entries()){
        if(typeof(key) === 'number'){
            console.log(`Answer ${key}: ${value}`);
        }
}
