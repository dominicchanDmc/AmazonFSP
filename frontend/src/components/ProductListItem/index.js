import React, { useState } from "react";
import "./ProductListItem.css";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import { fetchAddToCart, fetchUpdateCartItemQuantity, selectUserCartItems } from "../../store/cartItemsReducer";
import { useDispatch, useSelector } from "react-redux";
import RatingPart from "../RatingPart";
import { getRatingInfo } from "../../utils/ratingUtils";

function ProductItem({ product}) {
  const [message, setMessage] = useState({ content: '', visible: false });
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectUserCartItems);
  const sessionUser = useSelector(state => state.session.user);
  const ratingInfo = getRatingInfo(product);

  const handleAddToCart = () => {
    if (sessionUser){
        const existingCartItem = Object.values(cartItems) ? 
        Object.values(cartItems).find(item => item.productId === product.id):0;
        if (existingCartItem) {
            const updatedQuantity = existingCartItem.quantity + 1;
            dispatch(fetchUpdateCartItemQuantity(existingCartItem.id, updatedQuantity));
        } else {
            dispatch(fetchAddToCart(product.id, 1));
        }
        setMessage({ content: 'Item Added to Cart', visible: true });
        setTimeout(() => {
          setMessage({ ...message, visible: false });
        }, 2000);
    }
    else {
      history.push('/login');
    }
};

  let priceSpan;
  if (product && product.discount){
      let finalPrice = Number(product.price * (100-product.discount)/100).toFixed(2);
      priceSpan =    (<>
          <span>
              <span className="colorWhite price-fontSize-18 bgColor-BloodRed">
                  {product.discount +"% off"}
              </span>
          </span>
          <span>
              <span className="colorBlack price-fontSize-18">
                  {" $"+ finalPrice}
              </span>
              <span className="price-fontSize-samll colorGray">
                  <s>{"$"+product.price}</s>
              </span>
          </span>            
      </>)
  }
  else
  {
      priceSpan =  (<>
      <span className="colorBlack price-fontSize-18">
        {"$"+ product.price}
      </span>
      </>)
  }

  return (

    <div className="productItem-card">
      <Link to={`/products/${product.id}`}>
        <img className="medium"src={product.photoUrls[0]} alt="product" />
      </Link>
      <div className="productItem-card-body">
        <Link to={`/products/${product.id}`} className="a-product-Name">
             <h2>{product.productName.length > 50 ? product.productName.slice(0, 50) + "..." : product.productName}</h2>
        </Link>
        {/* <div className="rating">
          <span> <i className="fa fa-star"></i> </span>
          <span> <i className="fa fa-star"></i> </span>
          <span> <i className="fa fa-star"></i> </span>
          <span> <i className="fa fa-star"></i> </span>
          <span> <i className="fa fa-star"></i> </span>
        </div> */}
        <div className='listItem-star-container'>
            <div className='listItem-star-widget'>
                <RatingPart averageRating={ratingInfo.averageRating} 
                caller={"listItem"} callerId={product.id}/>
            </div>
        </div>
        <div className="price">
          <span>{priceSpan}</span>
        </div>
        <button onClick={handleAddToCart}>Add toCart</button>
          {message.visible && (
              <div className="list-message">
              <b>{message.content}</b>
              </div>
          )}
      </div>
    </div>
  );
}

export default ProductItem;