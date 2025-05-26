const prompt = require('prompt-sync')();

function cadena(){
    let cad1 = prompt("Ingresá una cadena de texto: ");
    let cad2 = prompt("Ingresá otra cadena de texto: ");

    return cad1 + " " + cad2;
}

let resultado = cadena();
console.log("La cadena de texto resultante es: " + resultado);