'use strict';
const ulElem = document.querySelector('#target');


let li1Elem = document.createElement('li');
li1Elem.textContent = 'First item';

let li2Elem = document.createElement('li');
li2Elem.textContent = 'Second item';

let li3Elem = document.createElement('li');
li3Elem.textContent = 'Third item';

ulElem.appendChild(li1Elem);
ulElem.appendChild(li2Elem);
ulElem.appendChild(li3Elem);

// lisätään ul-elementille css-määrittely
li2Elem.classList.add('my-item');
