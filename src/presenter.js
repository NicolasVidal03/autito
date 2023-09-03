import metodos from "./autito";

const comandos = document.querySelector("#comandos");
const form = document.querySelector("#auto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  var respTam, respPos;
  const tamaño = metodos.devolverTamaño(comandos.value);
  const posicionInicial = metodos.devolverPosIni(comandos.value);
  const tamFlag = metodos.verificarMatriz(tamaño);
  const posFlag = metodos.verificarPosIni(posicionInicial);

  if(tamFlag == true)
    respTam = " VALIDO";
  else
    respTam = " INVALIDO";
  if(posFlag == true)
    respPos = " VALIDO";
  else
    respPos = " INVALIDO";

  div.innerHTML = "<p>Tamaño: " + tamaño + respTam +
  "<br>Posicion inicial: " + posicionInicial + respPos + "</p>";
});
