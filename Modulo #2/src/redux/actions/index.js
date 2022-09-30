// import axios from 'axios';

// Recuerden inicializar la variable de idProduct.
let idProduct = 5;
// Aca deben declarar las variables donde tengan el action types.
// Esten atentos a que los nombres de las variables coincidan.

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const SET_PRODUCT_DETAIL = 'SET_PRODUCT_DETAIL';
export const HOME_PRODUCTS = 'HOME_PRODUCTS';

// Fijarse que la sintaxis de nuestra Action creator es distinta a lo que venimos haciendo. Esto es
// debido al uso del middleware "thunk", el cual nos permite trabajar con acciones asincrónicas.
// Necesitamos hacer uso de este middleware ya que nuestras peticiones al back siempre son asincrónicas,
// por lo tanto, necesitamos ese "delay" para despachar nuestra action hasta que la data nos llegue.
// Vas a tener que usar la funcion "dispatch" recibida en la funcion interna para despachar la action que
// va a llegar a nuestro reducer.
// Acá pueden ver un poco mejor la explicación y algunos ejemplos: https://github.com/reduxjs/redux-thunk

export const getAllProducts = () => {
  return async function (dispatch) {
    // Aca debes hacer la petición a la ruta del back http://localhost:3001/products
    // Pueden hacer la peticion con fetch o axios (documentación de axios: https://axios-http.com/docs/example)
    // Aclaración: todas las peticiones al back son asíncronas.
    return fetch('http://localhost:3001/products')
    .then(respuesta => respuesta.json())
    .then(products =>
      dispatch({type: GET_ALL_PRODUCTS, payload: products}))
  };
};

export const getProductDetail = (id) => {
  return async (dispatch) => {
    // Aca debes hacer la petición a la ruta del back http://localhost:3001/products/:id
    return fetch(`http://localhost:3001/products/${id}`)
    .then(respuesta => respuesta.json())
    .then(data =>
      dispatch({type: GET_PRODUCT_DETAIL, payload: data}))
  };
};

// Desde el componente correspondiente ejecutamos esta action creator, pasandole por params las values que vamos a usar para
export const createProduct = (valor) =>{
  idProduct++
  return{
    type: CREATE_PRODUCT,
    payload:{
      id: idProduct,
      name: valor.name,
      description: valor.description,
      price: valor.price,
      image: valor.image,
      stock: valor.stock
    } 
  }
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id
  }
};

export const setProductDetail = () => {
  return {
    type:  SET_PRODUCT_DETAIL
  }
};

export const homeProducts = () => {
  return {
    type: HOME_PRODUCTS
  }
}
