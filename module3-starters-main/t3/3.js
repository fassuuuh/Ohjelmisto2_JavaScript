'use strict';
const names = ['John', 'Paul', 'Jones'];
const ulElem = document.querySelector('#target');

let listItemsHTML = '';

for (let i = 0; i < names.length; i++) {
    listItemsHTML += `<li>${names[i]}</li>`;
}

ulElem.innerHTML = listItemsHTML;
