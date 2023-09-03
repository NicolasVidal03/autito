import metodos from "./autito";

const comandos = document.querySelector("#comandos");
const form = document.querySelector("#auto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  var respuesta, posFinal = "";
  const flag = metodos.verificarComando(comandos.value);

  if(flag == true) {
    respuesta = " VALIDO";
    posFinal = metodos.calcularPosFinal(comandos.value);
  }
  else
  respuesta = " INVALIDO";


  div.innerHTML = "<p>Comando: " + comandos.value + respuesta + 
  "<br>Posicion Final: " + posFinal + "</p>";
});
