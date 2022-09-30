const expect = require("chai").expect;

/* eslint-disable no-undef */
const { closureSum } = require("../checkpoint.js");

describe("EJERCICIO 10: closureSum", function () {
  it("La función generada debe sumar 5 al argumento pasado", function () {
    var sumaCinco = closureSum(5);
    var sumaDiez = closureSum(10);
    expect(sumaCinco(2)).to.equal(7);
    expect(sumaCinco(11)).to.equal(16);
    expect(sumaDiez(2)).to.equal(12);
    expect(sumaDiez(11)).to.equal(21);
  });
});
