function verificarMatriz(tamaño) {
  var validacion = false, tieneComa = false;
  if(tamaño.length != 0) {
    validacion = true;
    for(var i = 0; i < tamaño.length; i++)
    {
      if(tamaño[i] != "0" && tamaño[i] != "1" && tamaño[i] != "2" && tamaño[i] != "3" && tamaño[i] != "4" && tamaño[i] != "5" && tamaño[i] != "6" && tamaño[i] != "7" && tamaño[i] != "8" && tamaño[i] != "9" && tamaño[i] != ",")
        validacion = false
      else if(tamaño[i] == "," && tieneComa == false && i != tamaño.length-1)
        tieneComa = true;
      else if(tamaño[i] == "," && tieneComa == true || tamaño[i] == "," && i == tamaño.length-1 || i == tamaño.length-1 && tieneComa == false)
        validacion = false;
    }
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

function verificarMovimiento(comando) {
  var validacion = false;
  if(comando.length != 0) {
    validacion = true;
    for(var i = 0; i < comando.length; i++) {
      if(comando[i] != "I" && comando[i] != "D" & comando[i] != "A")
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

function devolverPosIni(comando) {
  var posIni = "";
  var flag = 0;
  for(var i = 0; i < comando.length; i++)
  {
    if(flag == 1 && comando[i] != "/")
      posIni += comando[i];
    if(comando[i] == "/")
      flag++;
  }
  return posIni;
}

function devolverMovimiento(comando) {
  var movimiento = "";
  var flag = 0;
  for(var i = 0; i < comando.length; i++)
  {
    if(flag == 2)
      movimiento += comando[i];
    if(comando[i] == "/")
      flag++;
  }
  return movimiento;
}

function verificarComando(comando) {
  var validacion = false;
  const boolTam = verificarMatriz(devolverTamaño(comando));
  const boolPosIni = verificarPosIni(devolverPosIni(comando));
  const boolMov = verificarMovimiento(devolverMovimiento(comando));
  if(boolTam && boolPosIni && boolMov)
    validacion = true;
  return validacion;
}

function calcularPosFinal(comando) {
  const moviento = devolverMovimiento(comando);
  const posicionInicial = devolverPosIni(comando);
  var x="",  y="", coma = false;
  for(var i = 0; i < posicionInicial.length - 1; i++)
  {
    if(posicionInicial[i] == ",")
      coma = true;
    if(!coma && posicionInicial[i] != ",")
      x += posicionInicial[i];
    else if(coma && posicionInicial[i] != ",")
      y += posicionInicial[i];
  }
  const tamaño = devolverTamaño(comando);
  var tamX = "", tamY = "", comaTam = false;
  for(var i = 0; i < tamaño.length; i++)
  {
    if(tamaño[i] == ",")
      comaTam = true;
    if(!comaTam && tamaño[i] != ",")
      tamX += tamaño[i];
    else if(comaTam && tamaño[i] != ",")
      tamY += tamaño[i];
  }

  var numberX = Number.parseInt(x);
  var numberY = Number.parseInt(y);
  const numberTamX = Number.parseInt(tamX);
  const numberTamY = Number.parseInt(tamY);
  var nseo = posicionInicial[posicionInicial.length-1];
  for(var i = 0; i < moviento.length; i++)
  {
    if(nseo == "N") {
      switch(moviento[i]){
        case "I":
          nseo = "O";
          break;
        case "D":
          nseo = "E"
          break;
        case "A":
          if(numberY != numberTamY)
            numberY++;
      }
    } else if(nseo == "O") {
      switch(moviento[i]){
        case "I":
          nseo = "S";
          break;
        case "D":
          nseo = "N"
          break;
        case "A":
          if(numberX != 0)
            numberX--;
      }
    } else if(nseo == "S") {
      switch(moviento[i]){
        case "I":
          nseo = "E";
          break;
        case "D":
          nseo = "O"
          break;
        case "A":
          if(numberY != 0)
            numberY--;
      }
      
    } else if(nseo == "E") {
      switch(moviento[i]){
        case "I":
          nseo = "N";
          break;
        case "D":
          nseo = "S"
          break;
        case "A":
          if(numberX != numberTamX)
            numberX++;
      }
      
    }
  }
  return numberX.toString() + "," + numberY.toString() + nseo;
}

const metodos = {verificarMatriz, verificarPosIni, verificarMovimiento, devolverTamaño, devolverPosIni, devolverMovimiento, verificarComando, calcularPosFinal};

export default metodos;