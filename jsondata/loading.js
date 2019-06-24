localStorage.setItem('hero','thor');
localStorage.setItem('todo','Buy Ice tea');
var myHero = localStorage.getItem('hero');
console.log(myHero);


console.log(localStorage.getItem('todo'));

localStorage.setItem('todo','Record Youtube video');
console.log(localStorage.getItem('todo'));

localStorage.clear()

myHero = localStorage.getItem('hero');
console.log(myHero);