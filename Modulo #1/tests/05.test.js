const expect = require("chai").expect;

/* eslint-disable no-undef */
const { LinkedList } = require("../checkpoint.js");

describe("LinkedList", function () {
  var linkedList;

  beforeEach(function () {
    linkedList = new LinkedList();
  });

  it("EJERCICIO 5: removeFromPos debe remover un nuevo nodo de la posición correcta", function () {
    expect(linkedList.removeFromPos(2)).to.equal(false);
    linkedList.add(1);
    linkedList.add(2);
    expect(linkedList.removeFromPos(1)).to.equal(2);
    expect(linkedList.head.value).to.equal(1);
    expect(linkedList.head.next).to.equal(null);
    linkedList.add(4);
    linkedList.add(6);
    expect(linkedList.removeFromPos(5)).to.equal(false);
    expect(linkedList.removeFromPos(0)).to.equal(1);
    expect(linkedList.head.value).to.equal(4);
    expect(linkedList.head.next.value).to.equal(6);
  });
});
