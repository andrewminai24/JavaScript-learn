var names = ['John','Mark','Jane'];
var years = new Array(1990,1969,1948);

console.log(names.length);
console.log(names[2]);

names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John','Smith',1990,'teacher',false];

john.push('blue'); // puts elements on the array
john.unshift('Mr.'); // remove items from the array
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23)); //index of shows the position of the john array

john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
