'use strict';
let numRolls = parseInt(prompt("Enter the number of dices: "));
let totalSum = 0 ;


for (let i = 0; i < numRolls; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    totalSum += roll;
}
document.querySelector(".T7").innerHTML = totalSum;

