import React from 'react'
import { useDispatch, useSelector, } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { getProductDetail, setProductDetail } from '../../redux/actions';


// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const ProductDetail = (props) => {

    // const { id } = useParams();

    const dispatch = useDispatch()

    const state = useSelector(state => state.productDetail);
    
    React.useEffect(
        () => {
            dispatch(getProductDetail(props.match.params.id));
            return (() => 
                dispatch(setProductDetail())
            )      
        },
        [dispatch, props.match.params.id]
    );

    return (
        <div>
           <div>
                <img src={state.image} alt={state.name}/>
           </div>
            <ul>
                <li>{state.name}</li>
                <li>{state.price}</li>
                <li>{state.stock}</li>
                <li>{state.description}</li>
            </ul>
        </div>
    )
}

export default ProductDetail;

// export const mapStateToProps = (state) => {
//     return {
//         state: state.productDetail,
//     };
//   };
  
//   export const mapDispatchToProps = (dispatch) => {
//     return {
//         getProductDetail: (id) => dispatch(getProductDetail(id)),
//     };
//   };
  
//   export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail)




// const ProductDetail = (props) => {
//     const dispatch = useDispatch();
//     const product = useSelector((state) => state.productDetail);
  
//     React.useEffect(() => {
//       dispatch(getProductDetail(props.match.params.id));
//     },);
  
//     return (
//       <div>
//         Product Detail
//         <h3>{product.name}</h3>
//         <p>{product.price}</p>
//         <p>{product.description}</p>
//         <p>{product.stock}</p>
//       </div>
//     );
//   };
  
//   export default ProductDetail;