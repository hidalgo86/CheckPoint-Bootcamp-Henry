const expect = require("chai").expect;

/* eslint-disable no-undef */
const { binarySearch } = require("../checkpoint.js");

describe("EJERCICIO 8: binarySearch", function () {
  it("Debe devolver 1 para el arreglo [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] si busca el 2", function () {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).to.equal(1);
  });
  it("Debería devolver 4 para el arreglo [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] si busca el 5", function () {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).to.equal(4);
  });

  it("Debería devolver -1 si no encuentra el valor buscado en el arreglo", function () {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).to.equal(-1);
  });
});
