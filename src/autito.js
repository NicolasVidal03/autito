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
  var validacion = false;
  if(posicion[posicion.length-1] == "N" || posicion[posicion.length-1] == "E" || posicion[posicion.length-1] == "S" || posicion[posicion.length-1] == "O")
    validacion = true;
    for(var i = 0; i < posicion.length-1; i++)
    {
      if(posicion[i] != "0" && posicion[i] != "1" && posicion[i] != "2" && posicion[i] != "3" && posicion[i] != "4" && posicion[i] != "5" && posicion[i] != "6" && posicion[i] != "7" && posicion[i] != "8" && posicion[i] != "9" && posicion[i] != ",")
        validacion = false
    }
  return validacion;
}

const metodos = {verificarMatriz, verificarPosIni};

export default metodos;