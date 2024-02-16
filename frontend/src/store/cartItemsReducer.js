import * as cartItemApiUtils from '../utils/cartItemApiUtils'

// CONSTANTS
export const RECEIVE_CARTITEMS = 'RECEIVE_CARTITEMS'
export const RECEIVE_CARTITEM = 'RECEIVE_CARTITEM'
export const RESET_CARTITEMS  = 'RESET_CARTITEMS'
export const REMOVE_FROM_CART  = 'REMOVE_FROM_CART'
export const ADD_TO_CART  = 'ADD_TO_CART'
export const UPDATE_CART_ITEM_QUANTITY  = 'UPDATE_CART_ITEM_QUANTITY'

// ACTION CREATORS
export const receiveCartItems = cartItems => ({
    type: RECEIVE_CARTITEMS,
    cartItems  
  })
export const receiveCartItem = cartItem => ({
    type: RECEIVE_CARTITEM,
    cartItem
})
export const resetCartItems = () => ({
type: RESET_CARTITEMS
});
export const removeFromCart = cartId => ({
    type: REMOVE_FROM_CART,
    cartId
}); 
export const addToCart = (cartItem) => ({  
    type: ADD_TO_CART,
    cartItem 
}); 

export const updateCartItemQuantity = (cartItem) => ({
  type: UPDATE_CART_ITEM_QUANTITY,
  cartItem
});

// THUNK ACTION CREATORS
export const fetchCartItemsByUserId = (userId) => async (dispatch) => {
  try {
    const cartItems = await cartItemApiUtils.fetchCartItemsByUserId(userId)
    return dispatch(receiveCartItems(cartItems))
  }catch (error) {

  }
}
export const fetchAddToCart = (productId, quantity) => async (dispatch) => {
  try{
    const cartItem = await cartItemApiUtils.fetchAddToCart(productId,quantity)
    return dispatch(addToCart(cartItem))
  }catch (error) {

  }
}
export const fetchUpdateCartItemQuantity = (cartItemId, newQuantity) => async (dispatch) => {
  try {
    const cartItem = await cartItemApiUtils.fetchUpdateCartItemQuantity(cartItemId, newQuantity); 
    dispatch(updateCartItemQuantity(cartItem)); 
  } catch (error) {
    throw error;
  }
};

export const deleteAllCartItems = (userId) => async (dispatch) => {
  try {
    await cartItemApiUtils.fetchDeleteAllCartItems(userId);
    dispatch(resetCartItems()); 
  } catch (error) {
    // Handle error
  }
};

// SELECTORS
export const selectUserCartItems = state => state.entities.cartItems

// REDUCER
const cartItemsReducer = (state = {}, action) => {
    const nextState = { ...state }
  
    switch (action.type) {
      case ADD_TO_CART:
        const cartId = action.cartItem.id;
        if (nextState[cartId]) {
          nextState[cartId].quantity += action.action.quantity;
        } else {
          nextState[cartId] = action.cartItem;
        }
        return Object.assign(nextState)
    case RECEIVE_CARTITEMS:
        return Object.assign(nextState, action.cartItems)
    case RESET_CARTITEMS:
        return {};
    case REMOVE_FROM_CART:
        const updatedCartItems = { ...nextState };
        delete updatedCartItems[action.cartId];
        return { ...updatedCartItems };
    case UPDATE_CART_ITEM_QUANTITY:
      const cartItemId = action.cartItem.id;

      nextState[cartItemId].quantity = action.cartItem.quantity;
      return nextState;
      default:
        return state
    }
  }
  
  export default cartItemsReducer;

