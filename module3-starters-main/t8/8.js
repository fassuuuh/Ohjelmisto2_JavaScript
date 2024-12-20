'use strict';

const num1Input = document.querySelector('#num1');
const num2Input = document.querySelector('#num2');
const operationSelect = document.querySelector('#operation');
const resultParagraph = document.querySelector('#result');
const calculateButton = document.querySelector('#start');

calculateButton.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;

    let result;

    if (isNaN(num1) || isNaN(num2)) {
        resultParagraph.textContent = 'Please enter valid numbers.';
        return;
    }

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'multi':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 === 0) {
                resultParagraph.textContent = 'Cannot divide by zero!';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultParagraph.textContent = 'Please select a valid operation.';
            return;
    }

    resultParagraph.textContent = `Result: ${result}`;
});
