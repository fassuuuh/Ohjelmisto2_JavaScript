const numbers = [];

for (let i = 1; i <= 5; i++) {
    let num = prompt("Syötä luku:")
        numbers.push(Number(num));
}

console.log("The numbers you entered in reverse order: ")
for (let i= numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
    document.querySelector(".T1").innerHTML += numbers[i] + "<br>";
}