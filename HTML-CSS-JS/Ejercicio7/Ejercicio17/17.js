const fila1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const fila2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const fila3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
const funciones = ['Backspace', 'Clear'];
const teclado = [fila1, fila2, fila3, funciones];

const display = document.getElementById('display');
const contenedor = document.getElementById('keyboard');

function entrada(tecla) {
  if (tecla === 'Clear') {
    display.textContent = '';
  } else if (tecla === 'Backspace') {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent += tecla;
  }
}

teclado.forEach(fila => {
  const filaDiv = document.createElement('div');
  filaDiv.classList.add('fila');

  fila.forEach(tecla => {
    const boton = document.createElement('button');
    boton.textContent = tecla;

    if (tecla === 'Backspace' || tecla === 'Clear') {
      boton.classList.add('ancho');
    }

    boton.addEventListener('click', () => entrada(tecla));
    filaDiv.appendChild(boton);
  });

  contenedor.appendChild(filaDiv);
});


