const prompt = require('prompt-sync')();

function calculoDescuento(precio, tipoPago) {
    if(precio < 200){
        return precio;
    }
    else if (precio >= 200 && precio <= 400){
        if(tipoPago == 'efectivo'){
            return precio - precio * 0.3;
        }
        else if(tipoPago == 'debito'){
            return precio - precio * 0.2;
        }
        else {
            return precio - precio * 0.1;
        }
    }
    else if(precio > 400) {
        return precio - precio * 0.4;
    }
    else {
        let problem = prompt("El precio ingresado no es valido");
        return problem;
    }
}

let precio = Number(prompt("Ingresá el precio del producto: "));
let tipoPago = prompt("Ingresá el tipo de pago (efectivo, debito, credito): ").toLowerCase();
let precioFinal = calculoDescuento(precio, tipoPago);
console.log("El precio final es: " + precioFinal);