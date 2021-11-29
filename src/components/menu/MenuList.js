import React from "react";
import { useDispatch } from 'react-redux';
import { cartActions} from '../redux/cart-slice';
function MenuList(props) {
  const dispatch = useDispatch();
  const {id,title,url,price,description} = props;
  
  const addToCartHandler = (event) => {
    event.preventDefault();
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price
      })
    );
  };

  return (
    <div className = "col-md-3 mb-4">
      <div className="card h-100 text-centre p-4 border border-danger" >
        <img src={url} className="card-img-top" alt={title}  height="250px"/>
        <div className="card-body">
          <h5 className="card-title mb-0">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">₹ {price}</p>
          <button className="btn btn-danger" onClick={addToCartHandler}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuList;
