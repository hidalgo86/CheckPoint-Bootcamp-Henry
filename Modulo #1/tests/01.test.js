const expect = require("chai").expect;

/* eslint-disable no-undef */
const { objContains } = require("../checkpoint.js");

describe("EJERCICIO 1: objContains", function () {
  const user = {
    id: 6,
    email: "homero@maxpower.com",
    infoPersonal: {
      nombre: "Homero Simpson",
      direccion: {
        calle: "Avenida Siempreviva",
        numero: 742,
        barrio: "Springfield",
        estado: "Massachusetts",
      },
    },
  };
  it("Debería devolver true si encuentra la propiedad y su valor correcto", function () {
    expect(objContains(user, "barrio", "Springfield")).to.equal(true);
  });
  it("Debería devolver false si NO encuentra la propiedad", function () {
    expect(objContains(user, "empleo", "Empleado en planta nuclear")).to.equal(
      false
    );
  });
  it("Debería devolver false si encuentra la propiedad pero su valor es incorrecto", function () {
    expect(objContains(user, "barrio", "Shelbyville")).to.equal(false);
  });
  it("Debería devolver false si encuentra el valor pero no asociado a dicha propiedad", function () {
    expect(objContains(user, "email", "Springfield")).to.equal(false);
  });
});
