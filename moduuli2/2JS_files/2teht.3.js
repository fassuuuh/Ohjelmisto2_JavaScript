'use strict';
const array = []
for (let i=0; i<6; i++) {
    const name = prompt("Syötä koiran nimi: ")
    array.push(name)
}
array.sort();
array.reverse();

const ul = document.createElement("ul");
for (let i = 0; i < array.length; i++) {
    const li = document.createElement("li");
    li.textContent = array[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);
