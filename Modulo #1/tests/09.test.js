const expect = require("chai").expect;

/* eslint-disable no-undef */
const { specialSort } = require("../checkpoint.js");

describe("EJERCICIO 9: specialSort", function () {
  var arraySS = [
    { name: "Notebook", price: 1200, review: 8 },
    { name: "Smartphone", price: 300, review: 9 },
    { name: "TV", price: 800, review: 1 },
    { name: "PS5", price: 1200, review: 7 },
  ];
  var arraySSPrice = [
    { name: "Smartphone", price: 300, review: 9 },
    { name: "TV", price: 800, review: 1 },
    { name: "Notebook", price: 1200, review: 8 },
    { name: "PS5", price: 1200, review: 7 },
  ];

  var arraySSPriceReview = [
    { name: "Smartphone", price: 300, review: 9 },
    { name: "TV", price: 800, review: 1 },
    { name: "PS5", price: 1200, review: 7 },
    { name: "Notebook", price: 1200, review: 8 },
  ];

  var arraySSReview = [
    { name: "TV", price: 800, review: 1 },
    { name: "PS5", price: 1200, review: 7 },
    { name: "Notebook", price: 1200, review: 8 },
    { name: "Smartphone", price: 300, review: 9 },
  ];
  it("Debe retornar el arreglo ordenado", function () {
    expect(specialSort(arraySS, "price")).to.deep.equal(arraySSPrice);
    expect(specialSort(arraySS, "review")).to.deep.equal(arraySSReview);
    expect(specialSort(arraySS, "price", "review")).to.deep.equal(
      arraySSPriceReview
    );
  });
});
