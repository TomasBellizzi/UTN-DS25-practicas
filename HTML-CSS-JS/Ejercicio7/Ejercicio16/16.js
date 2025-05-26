let pisoInput = '';
let dptoInput = '';

function ingresarNumero(num) {
    const piso = document.getElementById('piso');
    const depto = document.getElementById('depto');

    if (piso.value.length < 2) {
        piso.value += num;
    } else if(depto.value.length < 1){
        depto.value += num;
    }
}

function llamar(){
    const piso= parseInt(document.getElementById('piso').value);
    const depto= parseInt(document.getElementById('depto').value);
    const mensaje = document.getElementById('mensaje');

if ((isNaN(piso) || isNaN(depto)) || (piso <= 1 || piso >= 48) || (depto <= 1 || depto >= 6)) {
        mensaje.textContent = '⚠️Error: Piso o departamento inválido';
    } else {
        mensaje.textContent = "Llamando al piso " + piso + " departamento " + depto; 
    }           
}

function borrar() {
    document.getElementById('piso').value = '';
    document.getElementById('depto').value = '';
    document.getElementById('mensaje').textContent = '';
}
