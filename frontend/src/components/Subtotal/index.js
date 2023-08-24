import React, { useState } from "react";
import "./Subtotal.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCartItems, selectUserCartItems } from "../../store/cartItemsReducer";

function Subtotal() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectUserCartItems)
  const sessionUser = useSelector(state => state.session.user);

  const handleDeselectClick = () => {
    dispatch(deleteAllCartItems(sessionUser.id));
  };

  let cartItemsCount,cartItemsList;
  if (cartItems && Object.keys(cartItems).length > 0){
    cartItemsList = Object.values(cartItems);
    cartItemsCount = cartItemsList.reduce((total, cartItem) => total + cartItem.quantity, 0);
  }
  
  const [error, setError] = useState('');

  return (
    <div className="subtotal">
      <div className="subtotal-title">
        Subtotal ({!cartItemsCount ? 'empty' : `${cartItemsCount} ${cartItemsCount === 1 ? 'item' : 'items'}` }):&nbsp;
        <strong> $
          {cartItemsList ? (
            parseFloat(
            cartItemsList.reduce((totalPrice, cartItem) => {
              const product = cartItem.products[cartItem.productId];
              const finalPrice = Number(product.price * (100-product.discount)/100).toFixed(2);
              return (totalPrice += parseFloat(finalPrice * cartItem.quantity));
            }, 0)
            ).toFixed(2)
          ) : 0}
        </strong>
      </div>
      {sessionUser ? (
      <button
        className="subtotal-button"
        type="button"
        onClick={handleDeselectClick}
      >
        Proceed to checkout
      </button>):null}

      <div className="subtotal-error">
        {error}
      </div>
    </div>
  );
}

export default Subtotal;
