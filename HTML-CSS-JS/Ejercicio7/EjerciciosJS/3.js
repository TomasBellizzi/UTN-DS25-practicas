const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresá un número: ", function(input1) {
    let numero_1 = Number(input1);     
    
    rl.question("Ingresá otro número: ", function(input2) {
    let numero_2 = Number(input2);     
    rl.close();

    if (numero_1 > numero_2) {
        console.log("El numero mas grande es: " + numero_1);
    }
    else if (numero_2 > numero_1) {
        console.log("El numero mas grande es: " + numero_2);
    }
    else {
        console.log("Los nummeros son iguales");   
    }
    }); 
});