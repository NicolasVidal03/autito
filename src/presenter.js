import metodos from "./autito";

const comandos = document.querySelector("#comandos");
const form = document.querySelector("#auto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  var tamaño, posInicial, movimiento, posFinal;
  const flag = metodos.verificarComando(comandos.value);

  if(flag == true) {
    tamaño = metodos.devolverTamaño(comandos.value);
    movimiento = metodos.devolverMovimiento(comandos.value);
    posInicial = metodos.devolverPosIni(comandos.value);
    posFinal = metodos.calcularPosFinal(comandos.value);
  }
  else{
    alert("El formato ingresado es incorrecto");
    return 0;
  }

  div.innerHTML = "<p>Tamaño de tabla: " + tamaño +
  "<br>Posicion Inicial: " + posInicial +
  "<br>Comandos: " + movimiento + 
  "<br>Posicion Final: " + posFinal + "</p>";
});
