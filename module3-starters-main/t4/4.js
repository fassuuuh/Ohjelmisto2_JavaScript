'use strict';

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const targetElem = document.querySelector('#target');

for (let i = 0; i < students.length; i++) {
  const optionElem = document.createElement('option');
  optionElem.value = students[i].id;
  optionElem.textContent = students[i].name;
  targetElem.appendChild(optionElem);
}
