const prompt = require('prompt-sync')();

function mayorOmenor() {
    let num1 = Number(prompt("Ingresá un número: "));
    let num2 = Number(prompt("Ingresá otro número: "));

    if (num1 > num2) {
        console.log("El número más grande es: " + num1);
    }
    else if (num2 > num1) {
        console.log("El numero mas grande es: " + num2);
    }
    else {
        console.log("Los números son iguales");
    }
}

mayorOmenor();