// Importa las action types acá

import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, HOME_PRODUCTS, SET_PRODUCT_DETAIL } from "../actions";

const initialState = {
  products: [],
  productDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (
    action.type
    // Acá va tu código:
  ) {case GET_ALL_PRODUCTS:
    return {
      ...state,
     products: action.payload,
    }

  case HOME_PRODUCTS: 
    return {
      ...state,
      home: {}
    }

  case GET_PRODUCT_DETAIL:
    return {
      ...state,
      productDetail: action.payload
    }

  case SET_PRODUCT_DETAIL:
    return {
      ...state,
      productDetail: {}
    }

  case CREATE_PRODUCT:
    return {
      ...state,
      products: [...state.products, action.payload]
    }
  case DELETE_PRODUCT:
    return {
      ...state,
      products: state.products.filter(product => product.id !== action.payload)
    }
  default:
    return state
 
}
};

export default rootReducer;
