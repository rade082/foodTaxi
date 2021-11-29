import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItemsArray = useSelector((state) => state.cart.item);
  const totalPayable = useSelector(state => state.cart.totalPayable)
  return (
    <div className=" container text-center ">
      <h1 className="m-4">Your Cart</h1>
      <hr />
      <div className="d-flex flex-column align-items-center">
        { cartItemsArray.map((item) => (
          <CartItem
            key={Math.random()}
            id={item.id}
            title={item.name}
            price={item.price}
            total={item.totalPrice}
            quantity={item.quantity}
          />
        ))}
      </div>
         <h4>Total Price : ₹ {totalPayable.toFixed(2)}</h4>
     
    </div>
  );
};
export default Cart;
