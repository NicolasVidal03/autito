import calcularTamañoMatriz from "./autito";

const comandos = document.querySelector("#comandos");
const form = document.querySelector("#auto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>Tamaño de la matriz: " + comandos.value + "</p>";
});
