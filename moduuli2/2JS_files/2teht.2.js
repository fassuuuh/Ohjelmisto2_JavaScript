'use strict';
const array = []
const participants = prompt("Syötä osallistujien määrä: ")
for (let i=0; i<participants; i++) {
    const name = prompt("Syötä osallistujan nimi: ")
    array.push(name)
}

array.sort();

const ol = document.createElement("ol");
for (let i = 0; i < array.length; i++) {
    const li = document.createElement("li");
    li.textContent = array[i];
    ol.appendChild(li);
}

document.body.appendChild(ol);
