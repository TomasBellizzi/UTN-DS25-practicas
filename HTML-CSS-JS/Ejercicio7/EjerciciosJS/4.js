const prompt = require('prompt-sync')();


let input = prompt("Ingresá un número del 1 al 10: ");{
    let numero = Number(input);
    switch (true) {
        case (numero >= 1 && numero <= 3):
            console.log("El numero ingresado se encuentra en el grupo 1");
            break;
        case (numero >= 4 && numero <= 6 ):
            console.log("El numero ingresado se encuentra en el grupo 2");
            break;
        case (numero >= 7 && numero <= 10):
            console.log("EL numero ingresado se encuentra en el grupo 3");
            break;
        default:
            console.log("El numero ingresado no se encuentra en ningun grupo");
            break;
    }
}