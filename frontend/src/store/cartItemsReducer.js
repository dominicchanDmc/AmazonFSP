import * as cartItemApiUtils from '../utils/cartItemApiUtils'

// CONSTANTS
export const RECEIVE_CARTITEMS = 'RECEIVE_CARTITEMS'
export const RECEIVE_CARTITEM = 'RECEIVE_CARTITEM'
export const RESET_CARTITEMS  = 'RESET_CARTITEMS'
export const REMOVE_FROM_CART  = 'REMOVE_FROM_CART'
export const ADD_TO_CART  = 'ADD_TO_CART'


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

// export const fetchRemoveFromCart = (cartId) => async (dispatch) => {
//   try {
//     await cartItemApiUtils.fetchRemoveFromCart(cartId);
//     // console.log("fetchRemoveFromCart API call completed");

//     dispatch(removeFromCart(cartId))
//     // console.log("dispatch(removeFromCart) dispatched");

//   } catch (error) {
//   }
// };

// SELECTORS
export const selectUserCartItems = state => state.entities.cartItems

// REDUCER
const cartItemsReducer = (state = {}, action) => {
    const nextState = { ...state }
  
    switch (action.type) {
      // case RECEIVE_CARTITEM:
      //   nextState[action.cartItem.id] = action.cartItem
      //   return {...state, ...action.product}
      case ADD_TO_CART:
        const cartId = action.cartItem.id;
        // const cartItems = { ...state.cartItems };
      
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
      default:
        return state
    }
  }
  
  export default cartItemsReducer;

