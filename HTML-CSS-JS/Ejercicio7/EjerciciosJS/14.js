const prompt = require('prompt-sync')();

function promedio(){
    let tam = Number(prompt("Ingresá la cantidad de números a promediar: "));
    let suma = 0;
    for (let i=0; i < tam; i++){
        let num= Number(prompt("Ingrese un numero: "));
        suma += num;
    }
    let promedio = suma / tam;
    return promedio;
}
let result = promedio();
console.log("El promedio es: " + result);
