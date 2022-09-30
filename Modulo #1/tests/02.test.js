const expect = require("chai").expect;

/* eslint-disable no-undef */
const { secuenciaHenry } = require("../checkpoint.js");

describe("EJERCICIO 2: henryFibonacci", function () {
  it('Debería devolver 6 cuando n es 0 y array = ["Franco", 1, "Henry"]', function () {
    expect(secuenciaHenry(["Franco", 1, "Henry"], 0)).to.equal(6);
  });
  it('Debería devolver 1 cuando n es 1 y array = ["Franco", 1, "Henry"]', function () {
    expect(secuenciaHenry(["Franco", 1, "Henry"], 1)).to.equal(1);
  });
  it('Debería devolver 524 cuando n es 6 y array = ["Franco", 1, "Henry"]', function () {
    expect(secuenciaHenry(["Franco", 1, "Henry"], 6)).to.equal(524);
  });
  it('Debería devolver 756 cuando n es 7 y array = ["Asd", 1, "Hi"]', function () {
    expect(secuenciaHenry(["Asd", 1, "Hi"], 7)).to.equal(756);
  });
  it("Debería devolver false cuando n es negativo", function () {
    expect(secuenciaHenry(["Franco", 1, "Henry"], -3)).to.equal(false);
  });
});
