const prompt = require('prompt-sync')();

function prod() {
    num1 = prompt("Ingresá un número: ");
    num2 = prompt("Ingresá otro número: ");

    return num1 * num2;
}

let result = prod();
console.log("El producto de los numeros ingresados es: " + result);
