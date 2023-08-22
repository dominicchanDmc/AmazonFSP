import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/sessionReducer';
import { fetchCartItemsByUserId,resetCartItems, selectUserCartItems} from '../../store/cartItemsReducer'
import './CartIndex.css'
import CartItem from "../CartItem";
import Subtotal from "../Subtotal";

const CartIndex = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectUserCartItems)
  let cartItemsCount;
  if (cartItems && Object.keys(cartItems).length > 0)
    cartItemsCount = Object.keys(cartItems).length
  
  const handleDeselectClick = () => {
    dispatch(resetCartItems());
  };

  return (
    <div className="cartIndex">
      <div className="cartIndex-left">
        <div className="cartIndex-header">
          <h2 className="cartIndex-title">Shopping Cart</h2>
          <button onClick={handleDeselectClick}>Deselect all items</button>
        </div>

        <div className="cartIndex-products">
          {cartItems ? (Object.values(cartItems).map(item => 
              <div key={item.id}>
                <CartItem item={item}/>
              </div>
          )):null}
        </div>
      </div>

      <div className="cartIndex-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default CartIndex;