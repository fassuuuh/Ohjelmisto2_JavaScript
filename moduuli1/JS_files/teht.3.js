'use strict';
let luku1 = prompt("Syötä luku: ");
let luku2 = prompt("Syötä luku: ");
let luku3 = prompt("Syötä luku: ");

luku1 = Number(luku1);
luku2 = Number(luku2);
luku3 = Number(luku3);

const sum = (luku1 + luku2 + luku3);
const product = (luku1 * luku2 * luku3);
const average = (sum / 3);

console.log(sum);
console.log(product);
console.log(average);

document.querySelector(".T3").innerHTML = `The sum is ${sum}<br>
The product is ${product}<br>
The average is ${average}</br>`;