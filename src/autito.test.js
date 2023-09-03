import verificarMatriz from "./autito";


describe("Autito", () => {
  it("Deberia verificar que la matriz es valida", () => {
    expect(verificarMatriz("5,5")).toEqual(true);
  });


});
