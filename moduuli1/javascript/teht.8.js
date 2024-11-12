'use strict';
const alkuvuosi = +prompt("Anna aloitusvuosi: ")
const loppuvuosi = +prompt("Anna loppuvuosi: ")

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
const leapYearList = document.querySelector(".T8");

for (let year = alkuvuosi; year <= loppuvuosi; year++) {
    if (isLeapYear(year)) {
        const listItem = document.createElement("li");
        listItem.textContent = year;
        leapYearList.appendChild(listItem);
    }
}


