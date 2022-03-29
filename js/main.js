'use strict';

const select = document.querySelector('.js-select');
const number = document.querySelector('.js-inputNumber');
const btn = document.querySelector('.js-btn');
const sum = document.querySelector('.js-inputSum');


btn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log ('¡¡Ha hecho click!!');
});

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    const numAleact = document.querySelector('.js-play');

    if(numAleact % 2 === 0) {
        numAleact.classList.add('¡¡¡Has ganado el doble de lo apostado!!!');
        numAleact.classList.remove('¡Has perdido lo apostado!');
    }
    else{
        numAleact.classList.add('¡Has perdido lo apostado!');
        numAleact.classList.remove('¡¡¡Has ganado el doble de lo apostado!!!');
    }
  }
