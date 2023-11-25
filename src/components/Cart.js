import { useSelector } from "react-redux";
import FoodCard from "./FoodCard";
import { useDispatch } from "react-redux";
import { clearItems } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItems())
  }
  return (
    <div>
      <h1>Cart Items</h1>
      <button onClick={() => handleClearCart()}>Clear Cart</button>
      <div>
      {cartItems.map((item) => (
        <FoodCard key={item.id} {...item}/>
      ))}
      </div>
    </div>
  );
};

export default Cart;
