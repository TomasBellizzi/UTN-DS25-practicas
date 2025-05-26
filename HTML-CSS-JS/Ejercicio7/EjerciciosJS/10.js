const prompt = require('prompt-sync')();

function asterisco(numero) {
    let result = "";
    for (let i = 0; i < numero; i++) {
        result += "*";
    }
    return result;
}

let numero = Number(prompt("Ingresá un número: "));
console.log(asterisco(numero));
