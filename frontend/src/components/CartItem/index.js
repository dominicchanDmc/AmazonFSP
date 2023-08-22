import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/sessionReducer';
import { fetchCartItemsByUserId,resetCartItems, selectUserCartItems} from '../../store/cartItemsReducer'
import './CartItem.css'
import PriceSpan from "../PriceSpan";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const cartItems = useSelector(selectUserCartItems)

  const handleDeselectClick = () => {
    dispatch(resetCartItems());
  };
let itemInfo;
if (props.item){
  const product = props.item.products[props.item.productId]; 

  itemInfo = (<>
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
            <select id="quantity" name="quantity" className="showQuantitySelect">
                <option key="0" value="0">0 (Delete)</option>
                <option key="1" value="1" selected>1 </option>
                {Array.from({ length: 14 }, (_, index) => index + 2).map((qty) => (
                    <option key={qty} value={qty}>
                        {qty}
                    </option>
                ))}
            </select>
            <div className="cartItem-productButtons">
              <button type="button">Delete</button>
            </div>
          </div>

        </div>
      </div>
    </>
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