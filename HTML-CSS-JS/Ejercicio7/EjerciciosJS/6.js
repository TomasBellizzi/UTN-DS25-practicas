const prompt = require('prompt-sync')();

const array = [];
for (i = 0; i < 10; i++) {
    let num= prompt("Ingresá un número: ");
    array.push(num);
}

let prod = 1;
for (i=0; i < array.length; i++) {
    prod *= array[i];
}
console.log("El producto de los numeros ingresados es: "+ prod);