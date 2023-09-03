import metodos from "./autito";


describe("Autito", () => {
  it("Deberia verificar que la matriz es valida", () => {
    expect(metodos.verificarMatriz("5,5")).toEqual(true);
  });

  it("Deberia verificar que la matriz no es valida", () => {
    expect(metodos.verificarMatriz("5/5")).toEqual(false);
  });

  it("Deberia permitir otro tamaño de matrices", () => {
    expect(metodos.verificarMatriz("10,7")).toEqual(true);
  });

  it("Deberia devolver la posicion inicial de forma correcta", () => {
    expect(metodos.verificarPosIni("1,2N")).toEqual(true);
  });

  it("Deberia detectar un valor incorrecto en la posicion inicial", () => {
    expect(metodos.verificarPosIni("1/2N")).toEqual(false);
  });

  it("Deberia detectar error al ingresar una direccion cardinal invalida", () => {
    expect(metodos.verificarPosIni("1,2W")).toEqual(false);
  });

  it("Deberia detectar error al ingresar formato no valido", () => {
    expect(metodos.verificarPosIni("1,,N")).toEqual(false);
  });

  it("Deberia devolver solo el tamaño", () => {
    expect(metodos.devolverTamaño("5,5/1,2N/IAIAIAIAA")).toEqual("5,5");
  });

  it("Deberia devolver solo la posicion inicial", () => {
    expect(metodos.devolverPosIni("5,5/1,2N/IAIAIAIAA")).toEqual("1,2N");
  });

  it("Debería verificar que los comandos de movimiento esten correcto", () => {
    expect(metodos.verificarMovimiento("I")).toEqual(true);
  });

  it("Debería verificar moviento S no existe", () => {
    expect(metodos.verificarMovimiento("S")).toEqual(false);
  });

  it("Debería verificar moviento D", () => {
    expect(metodos.verificarMovimiento("D")).toEqual(true);
  });

  it("Debería recibir mas de una letra", () => {
    expect(metodos.verificarMovimiento("DAIIA")).toEqual(true);
  });

  it("Deberia devolver solo el comando de movimiento", () => {
    expect(metodos.devolverMovimiento("5,5/1,2N/IAIAIAIAA")).toEqual("IAIAIAIAA");
  });

});
