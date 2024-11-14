'use strict';
function even(arr) {
    return arr.filter(num => num % 2 === 0);
}
const originalArray = [2, 7, 4, 8, 3, 5, 9];
const evenArray = even(originalArray);

console.log("Original Array:", originalArray);
console.log("Even Numbers Array:", evenArray);

document.querySelector(".T9").innerHTML = "Original Array: " + originalArray.join(", ") + "<br>" + "Even numbers Array: " + evenArray.join(", ");
