function Arbol(altura) {
  let resultado = "Medio Arbol\n";
  for (let i = 1; i <= altura; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
      fila += "* ";
    }
    resultado += fila + "\n";
  }
  return resultado;
}

function generarArbol() {
  const input = document.getElementById("altura").value;
  const output = document.getElementById("output");
  const altura = Number(input);

  if (isNaN(altura) || altura <= 0 || !Number.isInteger(altura)) {
    output.textContent = "⚠️ La altura ingresada no es válida";
    return;
  }
  output.textContent = Arbol(altura);
}


