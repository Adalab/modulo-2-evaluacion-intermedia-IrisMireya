'use strict';

const select = document.querySelector('.js-select');
const text = document.querySelector('.js-inputText');
const btn = document.querySelector('.js-btn');
const sum = document.querySelector('.js-inputSum');


btn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log ('¡¡Ha hecho click!!');
    checkNum()
});

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
    function checkNum() {
    const num = parseInt(select.value);
    const numAleat = getRandomNumber(6) ;
    console.log("Input number: " + num);
    console.log("Num comp: " + numAleat);
   
    if(num === numAleat) {
        text.innerHTML = '¡¡¡Has ganado el doble de lo apostado!!!';
    }
    else{
        text.innerHTML = '¡Has perdido lo apostado!';
    }
}