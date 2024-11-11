'use strict';
const year = prompt("Syötä vuosiluku: ")
let result;
    if (year % 400 === 0){
        result = "Vuosi on karkausvuosi";}
    else if (year % 100 === 0){
        result = "Vuosi ei ole karkausvuosi";}
    else if (year % 4 === 0){
        result = "Vuosi on karkausvuosi";}
    else
        result = "Vuosi ei ole karkausvuosi";


document.querySelector(".T5").innerHTML = result;
