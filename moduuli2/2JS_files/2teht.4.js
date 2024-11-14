'use strict';
const numbers = [];
let num;
while (true) {
    num = Number(prompt("Syötä luku (0 lopettaa): "));
    if (num === 0) break;
    numbers.push(num);
}
numbers.sort((a, b) => b - a);
console.log(numbers);
document.querySelector(".T4").innerHTML = numbers.join(", ") + "<br>";
