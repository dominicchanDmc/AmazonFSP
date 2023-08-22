import * as cartItemApiUtils from '../utils/cartItemApiUtils'

// CONSTANTS
export const RECEIVE_CARTITEMS = 'RECEIVE_CARTITEMS'
export const RECEIVE_CARTITEM = 'RECEIVE_CARTITEM'
export const RESET_CARTITEMS  = 'RESET_CARTITEMS '
export const REMOVE_FROM_CART  = 'REMOVE_FROM_CART '
export const ADD_TO_CART  = 'ADD_TO_CART '


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
export const removeFromCart = (cartId) => ({
    type: REMOVE_FROM_CART,
    cartId
});
export const addToCart = (cartItem) => ({
    type: ADD_TO_CART,
    cartItem
});

// THUNK ACTION CREATORS
export const fetchCartItemsByUserId = (userId) => async (dispatch) => {
    const cartItems = await cartItemApiUtils.fetchCartItemsByUserId(userId)
    return dispatch(receiveCartItems(cartItems))
}
export const fetchAddToCart = (productId, quantity) => async (dispatch) => {
  const cartItem = await cartItemApiUtils.fetchAddToCart(productId,quantity)
  return dispatch(addToCart(cartItem))
}

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
        nextState[cartId].quantity += action.actionquantity;
      } else {
        nextState[cartId] = action.cartItem;
      }

      // return { ...state,  cartItems };
      return Object.assign(nextState)
      // return [...state, action.cartItem];
    case RECEIVE_CARTITEMS:
        return Object.assign(nextState, action.cartItems)
      // return { ...state, ...action.cartItems };
    case RESET_CARTITEMS:
        return {};
      default:
        return state
    }
  }
  
  export default cartItemsReducer;

