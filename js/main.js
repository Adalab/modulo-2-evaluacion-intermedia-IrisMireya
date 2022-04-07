'use strict';

const select = document.querySelector('.js-select');
const text = document.querySelector('.js-inputText');
const btn = document.querySelector('.js-btn');
const btnreset = document.querySelector('.js-reset');
const amount = document.querySelector('.js-amount');
const blc = document.querySelector('.js-balance');
let money = parseInt(blc.innerText);
let amountUser = parseInt(amount.innerHTML);
const max = 6;
const randomNumber = getRandomNumber(max);
console.log(randomNumber);


    
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
btn.addEventListener('click', handleClickBtn);
btnreset.addEventListener('click', resetGame);
function handleClickBtn(event){
    event.preventDefault();
    checkNum(money, amountUser);
}
function checkNum() {
    const num = parseInt(select.value);
    const numAleat = getRandomNumber(6) ;
   
    if(num === numAleat) {
        text.innerHTML = '¡¡¡Has ganado el doble de lo apostado!!! &#128526';
        money = money + amountUser *2;
        amount.innerHTML = money;
    }
    else{
        text.innerHTML = '¡Has perdido lo apostado! &#128557';
        money = money - amountUser;
        amount.innerHTML = money;
    }
}
function resetGame();
