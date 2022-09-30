const expect = require("chai").expect;

/* eslint-disable no-undef */
const { LinkedList } = require("../checkpoint.js");

describe("LinkedList", function () {
  var linkedList;

  beforeEach(function () {
    linkedList = new LinkedList();
  });

  it("EJERCICIO 3: size debe devolver el tamaño actual de la lista", function () {
    expect(linkedList.size()).to.equal(0);
    linkedList.add(1);
    linkedList.add(2);
    expect(linkedList.size()).to.equal(2);
    linkedList.add(3);
    expect(linkedList.size()).to.equal(3);
  });
});
