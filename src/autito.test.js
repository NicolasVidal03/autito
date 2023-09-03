import verificarMatriz from "./autito";


describe("Autito", () => {
  it("Deberia verificar que la matriz es valida", () => {
    expect(verificarMatriz("5,5")).toEqual(true);
  });

  it("Deberia verificar que la matriz no es valida", () => {
    expect(verificarMatriz("5/5")).toEqual(false);
  });

  it("Deberia permitir otro tamaño de matrices", () => {
    expect(verificarMatriz("10,7")).toEqual(true);
  });

});
