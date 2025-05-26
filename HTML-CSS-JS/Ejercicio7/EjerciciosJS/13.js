const prompt = require('prompt-sync')();

function diaSemana(dia) {
    switch (dia) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Fin de Semana");
            break;           
        default:
            Error = prompt("El número ingresado no es válido");
            console.log(Error);
            break; 
    }
}

let dia = Number(prompt("Ingresá un número del 1 al 7: "));
diaSemana(dia);