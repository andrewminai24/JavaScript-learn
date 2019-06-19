
const second = () => {
    setTimeout(() => {
        console.log('async hey ');
    },2000);
}


const first = () => {
    console.log('hey there');
    second();
    console.log('The end');
}

first();
