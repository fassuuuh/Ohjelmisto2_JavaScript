'use strict';

const ulElem = document.querySelector('#target');

ulElem.innerHTML =
    `
        <li>First Item</li>
        <li>Second Item</li>
        <li>Third Item</li>
    `
// Määritellään tyyliasetus ulElem:lle
ulElem.classList.add('my-list');
