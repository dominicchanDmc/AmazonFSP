import { removeFromCart } from "../store/cartItemsReducer";
import csrfFetch from "../store/csrf";

export const fetchCartItemsByUserId = async userId => {
  try {
    const res = await fetch(`/api/users/${userId}/cart_items`);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error("Failed to fetch cart items");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchAddToCart = async(product_id, quantity) => {
  try {
    const response = await csrfFetch(`/api/cart_items`, {
      method: 'POST',
      body: JSON.stringify({ product_id, quantity }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      // Handle error
    }
  } catch (error) {
    // Handle error
  }
};

export const fetchRemoveFromCart = (cartItemId) => async (dispatch) =>{
  try {
    const response = await csrfFetch(`/api/cart_items/${cartItemId}`, {
      method: 'DELETE'
    }); 

    if (response.ok) {
      dispatch(removeFromCart(cartItemId))
    } else {
      throw new Error('Failed to remove item from cart');
    }
  } catch (error) {
    throw error;
  }
};
