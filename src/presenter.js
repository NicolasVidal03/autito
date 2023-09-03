import verificarMatriz from "./autito";

const comandos = document.querySelector("#comandos");
const form = document.querySelector("#auto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
var respuesta;

  flag = verificarMatriz(comandos.value)
    if(flag == true)
      respuesta = "Formato correcto";
    else
      respuesta = "Formato incorrecto";
  div.innerHTML = "<p>Tamaño de la matriz: " + comandos.value + " con " + respuesta + "</p>";
});
