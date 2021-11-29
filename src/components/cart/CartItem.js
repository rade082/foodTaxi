import { useDispatch } from "react-redux";
import { cartActions } from "../redux/cart-slice";

const CartItem = (props)=>{
    const dispatch = useDispatch();
    const {id,title,price,quantity,total} = props;
    
    const incrementItemHandler = ()=>{
        console.log(id,title,price);
        dispatch(cartActions.addItemToCart({id,title,price}) );
    }

    const decrementItemHandler = ()=>{
        dispatch(cartActions.removeItemFromCart(id));
    }
    return(
        <div className="d-flex flex-row justify-content-evenly mb-2 border border-danger w-25 p-2 ">
            <div>
                <h3 className="fs-3">{title}</h3>
                <h5 className="pt-2"> x{quantity}</h5>
            </div>
            <div>
                <h5 className="pt-2">₹{total.toFixed(2)} (₹{price}/item)</h5>
                <div>
                    <button onClick={incrementItemHandler} className="btn btn-danger m-2">+</button>
                    <button onClick={decrementItemHandler} className="btn btn-danger m-2">-</button>
                </div>
            </div>
        </div>
    )
};

export default CartItem;