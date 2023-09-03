function verificarMatriz(tamaño) {
  var validacion = true, tieneComa = false;
  for(var i = 0; i < tamaño.length; i++)
  {
    if(tamaño[i] != "0" && tamaño[i] != "1" && tamaño[i] != "2" && tamaño[i] != "3" && tamaño[i] != "4" && tamaño[i] != "5" && tamaño[i] != "6" && tamaño[i] != "7" && tamaño[i] != "8" && tamaño[i] != "9" && tamaño[i] != ",")
      validacion = false
    else if(tamaño[i] == "," && tieneComa == false && i != tamaño.length-1)
      tieneComa = true;
    else if(tamaño[i] == "," && tieneComa == true || tamaño[i] == "," && i == tamaño.length-1 || i == tamaño.length-1 && tieneComa == false)
      validacion = false;
  }
  return validacion;
}

function verificarPosIni(posicion) {
  var validacion = false, tieneComa = false;
  if(posicion[posicion.length-1] == "N" || posicion[posicion.length-1] == "E" || posicion[posicion.length-1] == "S" || posicion[posicion.length-1] == "O")
    validacion = true;
  if(validacion == true) {
    for(var i = 0; i < posicion.length-1; i++)
    {
      if(posicion[i] != "0" && posicion[i] != "1" && posicion[i] != "2" && posicion[i] != "3" && posicion[i] != "4" && posicion[i] != "5" && posicion[i] != "6" && posicion[i] != "7" && posicion[i] != "8" && posicion[i] != "9" && posicion[i] != ",")
        validacion = false
      else if(posicion[i] == "," && tieneComa == false && i != posicion.length-2)
        tieneComa = true;
      else if(posicion[i] == "," && tieneComa == true || posicion[i] == "," && i == posicion.length-2 || i == posicion.length-2 && tieneComa == false)
        validacion = false;
    }
  }
  return validacion;
}

function devolverTamaño(comando) {
  var tamaño = "";
  for(var i = 0; i < comando.length; i++)
  {
    if(comando[i] == "/")
      i = comando.length;
    else
      tamaño += comando[i];
  }
  return tamaño;
}



const metodos = {verificarMatriz, verificarPosIni, devolverTamaño};

export default metodos;