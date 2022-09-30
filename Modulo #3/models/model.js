/// =========================================================================== ///
/// =============================== HENRY-FLIX ================================ ///
/// =========================================================================== ///

"use strict";

const { use } = require("chai");

const categories = ["regular", "premium"];

let users = [];
let series = [];

module.exports = {
  reset: function () {
    // No es necesario modificar esta función. La usamos para "limpiar" los arreglos entre test y test.

    users = [];
    series = [];
  },

  // ==== COMPLETAR LAS SIGUIENTES FUNCIONES (vean los test de `model.js`) =====

  //*************************  TEST 01  *************************/
  addUser: function (email, name) {
    // Agrega un nuevo usuario, verificando que no exista anteriormente en base a su email.
    // En caso de existir, no se agrega y debe arrojar el Error ('El usuario ya existe') >> ver JS throw Error
    // Debe tener una propiedad <plan> que inicialmente debe ser 'regular'.
    // Debe tener una propiedad <watched> que inicialmente es un array vacío.
    // El usuario debe guardarse como un objeto con el siguiente formato:
    // {  email: email, name: name,  plan: 'regular' , watched: []}
    // En caso exitoso debe retornar el string 'Usuario <email_del_usuario> creado correctamente'.

    const user = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (!user) {
      users.push({
        email,
        name,
        plan: categories[0],
        watched: [],
      });
      return `Usuario ${email} creado correctamente`;
    }

    throw new Error("El usuario ya existe");
  },

  listUsers: function (plan) {
    // Si no recibe parámetro, devuelve un arreglo con todos los usuarios.
    // En caso de recibir el parámetro <plan>, devuelve sólo los usuarios correspondientes a dicho plan ('regular' o 'premium').

    if (plan === categories[0]) {
      return users.filter((user) => user.plan === categories[0]);
    } else if (plan === categories[1]) {
      return users.filter((user) => user.plan === categories[1]);
    }
    return users;
  },

  //*************************  TEST 02  *************************/
  switchPlan: function (email) {
    // Alterna el plan del usuario: si es 'regular' lo convierte a 'premium' y viceversa.
    // Retorna el mensaje '<Nombre_de_usuario>, ahora tienes el plan <nuevo_plan>'
    // Ej: 'Martu, ahora tienes el plan premium'
    // Si el usuario no existe, arroja el Error ('Usuario inexistente')

    const user = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (!user) throw new Error("Usuario inexistente");

    if (user.plan === categories[0]) {
      user.plan = categories[1];
      return `${user.name}, ahora tienes el plan ${user.plan}`;
    } else {
      user.plan = categories[0];
      return `${user.name}, ahora tienes el plan ${user.plan}`;
    }
  },

  //*************************  TEST 03  *************************/
  addSerie: function (name, seasons, categoryNew, year) {
    // Agrega una nueva serie al catálogo.
    // Si la serie ya existe, no la agrega y arroja un Error ('La serie <nombre_de_la_serie> ya existe')
    // Si la categoría no existe, arroja un Error ('La categoría <nombre_de_la_categoría> no existe') y no agrega la serie.
    // Debe devolver el mensaje 'La serie <nombre de la serie> fue agregada correctamente'
    // Debe guardar la propiedad <category> de la serie (regular o premium)
    // Debe guardar la propiedade <rating> inicializada 0
    // Debe guardar la propiedade <reviews> que incialmente es un array vacío.

    const serie = series.find((serie) => serie.name === name);
    if (serie) throw new Error(`La serie ${name} ya existe`);

    const category = categories.find((category) => category === categoryNew);
    if (!category) throw new Error(`La categoría ${categoryNew} no existe`);

    series.push({
      category,
      name,
      seasons,
      year,
      rating: 0,
      reviews: [],
    });
    return `La serie ${name} fue agregada correctamente`;
  },

  listSeries: function (categoryNew) {
    // Devuelve un arreglo con todas las series.
    // Si recibe una categoría como parámetro, debe filtrar sólo las series pertenecientes a la misma (regular o premium).
    // Si la categoría no existe, arroja un Error ('La categoría <nombre_de_la_categoría> no existe') y no agrega la serie.

    if (!categoryNew) return series;

    const category = categories.find((category) => category === categoryNew);
    if (!category) throw new Error(`La categoría ${categoryNew} no existe`);

    if (category === categories[0]) {
      return series.filter((serie) => serie.category === categories[0]);
    } else {
      return series.filter((serie) => serie.category === categories[1]);
    }
  },

  play: function (nameSerie, email) {
    // Con esta función, se emula que el usuario comienza a reproducir una serie.
    // Si el usuario no existe, arroja el Error ('Usuario inexistente')
    // Si la serie no existe, arroja el Error ('Serie inexistente')
    // Debe validar que la serie esté disponible según su plan. Usuarios con plan regular sólo pueden reproducir series de dicha categoría, usuario premium puede reproducir todo.
    // En caso de contrario arrojar el Error ('Contenido no disponible, contrata ahora HenryFlix Premium!')
    // En caso exitoso, añadir el nombre (solo el nombre) de la serie a la propiedad <watched> del usuario.
    // Devuelve un mensaje con el formato: 'Reproduciendo <nombre de serie>'

    const user = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    if (!user) throw new Error("Usuario inexistente");

    const serie = series.find((serie) => serie.name === nameSerie);
    if (!serie) throw new Error("Serie inexistente");

    if (user.plan === categories[1]) {
      user.watched.push(serie.name);
      return `Reproduciendo ${serie.name}`;
    } else if (user.plan === serie.category) {
      user.watched.push(serie.name);
      return `Reproduciendo ${serie.name}`;
    }
    throw new Error(
      `Contenido no disponible, contrata ahora HenryFlix Premium!`
    );
  },

  watchAgain: function (email) {
    // Devuelve sólo las series ya vistas por el usuario
    // Si el usuario no existe, arroja el Error ('Usuario inexistente')
    const user = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    if (!user) throw new Error("Usuario inexistente");

    return user.watched;
  },

  rateSerie: function (nameSerie, email, score) {
    // Asigna un puntaje de un usuario para una serie:
    // Actualiza la propiedad <reviews> de la serie, guardando en dicho arreglo un objeto con el formato { email : email, score : score } (ver examples.json)
    // Actualiza la propiedad <rating> de la serie, que debe ser un promedio de todos los puntajes recibidos.
    // Devuelve el mensaje 'Le has dado <puntaje> puntos a la serie <nombre_de_la_serie>'
    // Si el usuario no existe, arroja el Error ('Usuario inexistente') y no actualiza el puntaje.
    // Si la serie no existe, arroja el Error ('Serie inexistente') y no actualiza el puntaje.
    // Debe recibir un puntaje entre 1 y 5 inclusive. En caso contrario arroja el Error ('Puntaje inválido') y no actualiza el puntaje.
    // Si el usuario no reprodujo la serie, arroja el Error ('Debes reproducir el contenido para poder puntuarlo') y no actualiza el puntaje. >> Hint: pueden usar la función anterior

    const user = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    if (!user) throw new Error("Usuario inexistente");

    const serie = series.find((serie) => serie.name === nameSerie);
    if (!serie) throw new Error("Serie inexistente");

    if (score < 1 || score > 5) throw new Error("Puntaje inválido");

    if (!user.watched.find((watched) => watched === nameSerie))
      throw new Error("Debes reproducir el contenido para poder puntuarlo");

    serie.reviews.push({
      email,
      score,
    });

    serie.rating =
      serie.reviews.reduce((acc, review) => acc + review.score, 0) /
      serie.reviews.length;

    return `Le has dado ${score} puntos a la serie ${nameSerie}`;
  },
};
