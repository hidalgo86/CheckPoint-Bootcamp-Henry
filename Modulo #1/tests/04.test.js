const expect = require("chai").expect;

/* eslint-disable no-undef */
const { LinkedList } = require("../checkpoint.js");

describe("LinkedList", function () {
  var linkedList;

  beforeEach(function () {
    linkedList = new LinkedList();
  });

  it("EJERCICIO 4: addInPos debe agregar un nuevo nodo en la posición correcta", function () {
    expect(linkedList.addInPos(2, 2)).to.equal(false);
    linkedList.add(1);
    linkedList.add(2);
    expect(linkedList.addInPos(2, 3)).to.equal(true);
    expect(linkedList.head.next.next.value).to.equal(3);
    expect(linkedList.head.next.next.next).to.equal(null);
    linkedList.add(4);
    linkedList.add(6);
    expect(linkedList.addInPos(4, 5)).to.equal(true);
    expect(linkedList.head.next.next.next.next.value).to.equal(5);
    expect(linkedList.head.next.next.next.next.next.value).to.equal(6);
  });
});
