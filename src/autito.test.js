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

});
