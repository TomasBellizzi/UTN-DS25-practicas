const prompt = require('prompt-sync')();

function Arbol(altura) {
    for (let i=0; i <= altura; i++){
        let fila = "";
        for (let j = 1; j <= i; j++) {
            fila += "* ";
        }
        console.log(fila);
    }
}

let altura = Number(prompt("Ingresá la altura del árbol: "));
if(altura > 0) {
    Arbol(altura);
} else {
    console.log("La altura ingresada no es válida");
}
