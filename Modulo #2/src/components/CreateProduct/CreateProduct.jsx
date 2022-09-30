import React from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/actions';

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateProduct = () => {
  
  const dispatch = useDispatch();
   
  const [input, setInput] = React.useState({
    description: "",
    name: "",
    price: 0,
    stock: 0,
  });
   
  const handleOnChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };  

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(input));
    setInput({
      description: "",
      name: "",
      price: 0,
      stock: 0,
    });
  };
 
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label form="name">Name: </label>
        <input onChange={handleOnChange} type="text" name="name" />
        <label form="price">Price: </label>
        <input onChange={handleOnChange} type="number" name="price" />
        <label form="description">Description: </label>
        <textarea onChange={handleOnChange} type="text" name="description" />
        <label form="stock">Stock: </label>
        <input onChange={handleOnChange} type="number" name="stock" />
        <button  type="submit">
          Create Product
        </button>
      </form>
    </div>
  );
};
 
 
 
 export default CreateProduct;