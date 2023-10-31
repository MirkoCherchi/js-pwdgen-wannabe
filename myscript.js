'use strict';

const nameUser = document.getElementById('nome');
const surnameUser = document.getElementById('cognome');
const colorUser = document.getElementById('colore');
const numberUser = document.getElementById('numero');



nameUser.innerHTML = 'Nome: ';
surnameUser.innerHTML = 'Cognome: ';
colorUser.innerHTML = 'Colore preferito: ';
numberUser.innerHTML = 'Numero preferito: ';

const nameInput = prompt('Inserisci il tuo Nome');
const surnameInput = prompt('Inserisci il tuo Cognome');
const colorInput = prompt('Inserisci il tuo colore preferito');
const numberInput = prompt('Inserisci il tuo numero preferito');


nameUser.innerHTML += nameInput
surnameUser.innerHTML += surnameInput
colorUser.innerHTML += colorInput
numberUser.innerHTML += numberInput;

console.log(nameInput);
console.log(surnameInput);
console.log(colorInput);
console.log(parseInt(numberInput));

const password = document.getElementById('password');

password.innerHTML = nameInput + surnameInput + colorInput + numberInput;



