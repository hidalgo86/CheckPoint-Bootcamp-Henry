import React, { Component } from 'react';
import {connect} from 'react-redux'
import ProductCard from '../ProductCard/ProductCard';
import { getAllProducts } from '../../redux/actions';
import mainImage from '../../img-cp2/main-image-cp2.jpg'


// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  
  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    return (
      <div>

        <h1>Henry Commerce</h1>
        <img src={mainImage} alt="main-img" />
        <h3>Products</h3>
        <ul>
          {this.props.products?.map((e) => (
            <li key={e.id}>
              <ProductCard
                id={e.id}
                price={e.price}
                name={e.name}
                stock={e.stock}
                // image={e.image}
                />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: (product) => dispatch(getAllProducts(product)),
    
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home)