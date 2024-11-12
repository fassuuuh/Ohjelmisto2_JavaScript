'use strict';

const answer = confirm('Should I calculate the square root?');
let result;

if (answer === true) {
    const number = (prompt("Enter a number: "));

    if (number < 0) {
        result = "The square root of a negative number is not defined";
    } else (number > 0)
    {
        result = "The square root is " + Math.sqrt(number);
    }}
else{
    result = "The square root is not calculated."
    }
document.querySelector(".T6").innerHTML = result;
