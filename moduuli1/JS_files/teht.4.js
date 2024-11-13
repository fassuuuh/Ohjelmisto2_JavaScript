'use strict';
let studentName;
let house;
function sortStudent() {
    studentName = prompt('What is your name?');
    let houseNumber = Math.floor(Math.random() * 4) + 1;
    switch (houseNumber) {
        case 1:
            house = "Gryffindor"
            break;
        case 2:
            house = "Ravenclaw"
            break;
        case 3:
            house = "Slytherin"
            break;
        case 4:
            house = "Hufflepuff"
            break;
        default:
            house = "Unknown";
            break;
    }
}
sortStudent();
document.querySelector(".T4").innerHTML = `${studentName}, you are a ${house}.`;
