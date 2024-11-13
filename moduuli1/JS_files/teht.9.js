number = +prompt("Enter a number:")

function checkPrime(number) {
    if (number <= 1 ) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}
const result = checkPrime(number) ? `${number} is a prime number.` : `${number} is not a prime number.`;
document.querySelector(".T9").innerHTML = result;

