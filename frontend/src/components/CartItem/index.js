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
            {product.productName.length > 50 ? product.productName.slice(0, 50) + "..." : product.productName}
            </div>
            <div className="cartItem-productPrice">
              <PriceSpan product={product}/>
            </div>
          </div>

          <div className="cartItem-productButtons">
            {/* <button type="button" onClick={handleRemoveClick}>Delete</button> */}

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