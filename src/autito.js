function verificarMatriz(comando) {
  var validacion = true, tieneComa = false;
  for(var i = 0; i < comando.length; i++)
  {
    if(comando[i] != "0" && comando[i] != "1" && comando[i] != "2" && comando[i] != "3" && comando[i] != "4" && comando[i] != "5" && comando[i] != "6" && comando[i] != "7" && comando[i] != "8" && comando[i] != "9" && comando[i] != ",")
      validacion = false
    else if(comando[i] == "," && tieneComa == false && i != comando.length-1)
      tieneComa = true;
    else if(comando[i] == "," && tieneComa == true || comando[i] == "," && i == comando.length-1 || i == comando.length-1 && tieneComa == false)
      validacion = false;
  }
  return validacion;
}

function verificarPosIni(posicion) {
  return true;
}

const metodos = {verificarMatriz, verificarPosIni};

export default metodos;