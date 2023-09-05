import { useDispatch } from "react-redux";
import {fetchUpdateCartItemQuantity}from '../../store/cartItemsReducer'
import './CartItem.css'
import PriceSpan from "../PriceSpan";
import { fetchRemoveFromCart } from "../../utils/cartItemApiUtils";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const handleRemoveClick = () => {
    dispatch(fetchRemoveFromCart(props.item.id));
  };
    const handleQuantityChange =  (event) => {
      const newQuantity = parseInt(event.target.value);
      if (newQuantity > 0) {
        dispatch(fetchUpdateCartItemQuantity(props.item.id,newQuantity));
      }
      else
        dispatch(fetchRemoveFromCart(props.item.id));
    };

let itemInfo;
if (props.item){
  const product = props.item.products[props.item.productId]; 
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
                {Array.from({ length: 30 }, (_, index) => index + 1).map((qty) => (
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