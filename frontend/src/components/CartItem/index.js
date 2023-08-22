import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/sessionReducer';
import {selectUserCartItems,fetchAddToCart, fetchUpdateCartItemQuantity, updateCartItemQuantity}
 from '../../store/cartItemsReducer'
import './CartItem.css'
import PriceSpan from "../PriceSpan";
import { fetchRemoveFromCart } from "../../utils/cartItemApiUtils";
import { useState } from "react";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const cartItems = useSelector(selectUserCartItems)
  const [quantity, setQuantity] = useState(1); 

  const handleRemoveClick = () => {
    dispatch(fetchRemoveFromCart(props.item.id));
  };

  // const handleQuantityChange = async (event) => {
    // const newQuantity = parseInt(event.target.value);
    // setQuantity(newQuantity);
    // try {
    //   await dispatch(fetchUpdateCartItemQuantity(props.item.id, newQuantity));
    //   setMessage({ content: 'Quantity updated', visible: true });
    //   setTimeout(() => {
    //     setMessage({ ...message, visible: false });
    //   }, 2000);
    // } catch (error) {
    //   // Handle error
    // }
    const handleQuantityChange =  (event) => {
      const newQuantity = parseInt(event.target.value);
      if (newQuantity >= 0) {
        // const updatedCartItem = await fetchUpdateCartItemQuantity(props.item.id, newQuantity);
        dispatch(fetchUpdateCartItemQuantity(props.item.id,newQuantity));
      }

    };

let itemInfo;
if (props.item){
  const product = props.item.products[props.item.productId]; 
  console.log(props.item);
  itemInfo = (
    <div key={product.id} className="cartItem-product">
        <div className="cartItem-productImg">
          <img src={product.photoUrls[0]} alt="product" />  
        </div>

        <div className="cartItem-productInfo">
          <div className="cartItem-productTitlePrice">
            <div className="cartItem-productTitle">
            {product.productName.length > 150 ? product.productName.slice(0, 150) + "..." : product.productName}
            </div>
            <div className="cartItem-productPrice">
              <PriceSpan product={product}/>
            </div>
            <span className="colorGreen price-fontSize-samll">In Stock</span>
          </div>
          <div className="cartItem-quantity-productButtons">
            <label htmlFor="quantity">Qty: </label>
            <select id="quantity" name="quantity" className="showQuantitySelect"
            value={props.item.quantity} onChange={handleQuantityChange}>
                <option key="0" value="0">0 (Delete)</option>
                {Array.from({ length: 15 }, (_, index) => index + 1).map((qty) => (
                    <option key={qty} value={qty}>
                        {qty}
                    </option>
                ))}
            </select>
            <div className="cartItem-productButtons">
              <button type="button" onClick={handleRemoveClick}> Delete</button>
            </div>
          </div>

        </div>
      </div>
  )
}else
{
  itemInfo = ""
}
  return (<>
    {itemInfo}
  </>
  )
}

export default CartItem;