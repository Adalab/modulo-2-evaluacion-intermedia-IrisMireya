'use strict';

const select = document.querySelector('.js-select');
const number = document.querySelector('.js-inputNumber');
const btn = document.querySelector('.js-btn');
const sum = document.querySelector('.js-inputSum');


btn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log ('holiss');
});

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    
    if(numAleact % 2 === 0) {
        mainElement.classList.add('Has ganado el doble de lo apostado  ');
        mainElement.classList.remove('Has perdido lo apostado');
    }
    else{
        mainElement.classList.add('Has perdido lo apostado');
        mainElement.classList.remove('Has ganado el doble de lo apostado ');
    }
  }
