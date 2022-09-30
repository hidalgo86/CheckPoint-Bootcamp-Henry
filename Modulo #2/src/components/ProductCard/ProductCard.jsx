import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../redux/actions';

  // FIJENSE DE HACERLO SI O SI CON FUNCTIONAL COMPONENT! SI NO LOS TEST NO PASAN.


const ProductCard = ({id, name, price, stock, image}) => {
  
  const dispatch = useDispatch();
  
  
  return (
    <div>
      <button 
        onClick={() => dispatch(deleteProduct(id))}
       >
        x
      </button>
      <Link to={`/product/${id}`}>
      <h3>{name}</h3>
      </Link>
      <img src={image} alt={name}/>
      <p>Stock: {stock}</p>
      <p>Precio: ${price}</p>
    </div>
  );
};
export default connect(null, { deleteProduct })(ProductCard);