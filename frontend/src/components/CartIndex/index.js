import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/sessionReducer';
import { deleteAllCartItems, fetchCartItemsByUserId,resetCartItems, selectUserCartItems} from '../../store/cartItemsReducer'
import './CartIndex.css'
import CartItem from "../CartItem";
import Subtotal from "../Subtotal";

const CartIndex = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectUserCartItems)
  const sessionUser = useSelector(state => state.session.user);
  let cartItemsCount;
  if (cartItems && Object.keys(cartItems).length > 0)
    cartItemsCount = Object.keys(cartItems).length
  
  const handleDeselectClick = () => {
    dispatch(deleteAllCartItems(sessionUser.id));
  };

  return (
    <div className="cartIndex">
      <div className="cartIndex-left">
        <div className="cartIndex-header">
          <h2 className="cartIndex-title">Shopping Cart</h2>
          {sessionUser ? (<button onClick={handleDeselectClick}>Delete all items</button>):
          null}
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