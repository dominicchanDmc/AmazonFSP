import React, { useState } from "react";
import "./Subtotal.css";
import { useSelector } from "react-redux";
import { selectUserCartItems } from "../../store/cartItemsReducer";

function Subtotal() {
  const cartItems = useSelector(selectUserCartItems)
  let cartItemsCount,cartItemsList;
  if (cartItems && Object.keys(cartItems).length > 0){
    cartItemsList = Object.values(cartItems);
    cartItemsCount = cartItemsList.length;
  }
  
  const [error, setError] = useState('');

  return (
    <div className="subtotal">
      <div className="subtotal-title">
        Subtotal ({!cartItemsCount ? 'empty' : `${cartItemsCount} ${cartItemsCount === 1 ? 'item' : 'items'}` }):&nbsp;
        <strong> $
          {cartItemsList ? (
            cartItemsList.reduce((totalPrice, cartItem) => {
              const product = cartItem.products[cartItem.productId];
              const finalPrice = Number(product.price * (100-product.discount)/100).toFixed(2);
              return (totalPrice += parseFloat(finalPrice));
            }, 0)
          ) : 0}
        </strong>
      </div>
      <button
        className="subtotal-button"
        type="button"
      >
        Proceed to checkout
      </button>
      <div className="subtotal-error">
        {error}
      </div>
    </div>
  );
}

export default Subtotal;
