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

  it("Deberia verificar la posicion inicial", () => {
    expect(metodos.verificarPosIni("1,2N")).toEqual(true);
  });

});
