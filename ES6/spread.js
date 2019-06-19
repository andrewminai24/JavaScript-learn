//Arrays

//const boxes = document.querySelectorAll('box');

//es5
var boxesarr5 = Array.prototype.slice.call(boxes);
boxesarr5.array.forEach(function(cur){

    cur.style.backgroundColor = 'dodgerblue;';
});

//es6
//What from does is transforms the node list to an array
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(curr =>{
    cur.style.backgroundColor = 'dodgerblue';
});

//es5
for(var i = 0; i < boxesarr5.length;i++){
    //with classname you can retrive the classname
    if(boxesarr5[i].className === 'boxblue'){
        continue;
    }
    boxesArr5[i].textContent = 'i changed to blue';
}
//es6
for(const cur of boxesArr6){
    if(boxesArr6.className === 'box blue'){
        cur.textContent = 'I changed to blue';
    }
}

//es5
var age =[1,23,3,4,3];
var full = ages.map(function(curr){
    return cur >= 18;

});
console.log(full);

//map method creates true or false values