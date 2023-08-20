import * as cartItemApiUtils from '../utils/cartItemApiUtils'

// CONSTANTS
export const RECEIVE_CARTITEMS = 'RECEIVE_CARTITEMS'
export const RESET_CARTITEMS  = 'RESET_CARTITEMS '

// ACTION CREATORS
export const receiveCartItems = cartItems => ({
    type: RECEIVE_CARTITEMS,
    cartItems
  })
export const resetCartItems = () => ({
type: RESET_CARTITEMS
});
// THUNK ACTION CREATORS
export const fetchCartItemsByUserId = (userId) => async (dispatch) => {
    const cartItems = await cartItemApiUtils.fetchCartItemsByUserId(userId)
    return dispatch(receiveCartItems(cartItems))
}

// SELECTORS
export const selectUserCartItems = state => state.entities.cartItems

// REDUCER
const cartItemsReducer = (state = {}, action) => {
    const nextState = { ...state }
  
    switch (action.type) {
    //   case RECEIVE_PRODUCT:
        // nextState[action.product.id] = action.product
        // return {...state, ...action.product}
      case RECEIVE_CARTITEMS:
        return Object.assign(nextState, action.cartItems)
    case RESET_CARTITEMS:
        return {};
      default:
        return state
    }
  }
  
  export default cartItemsReducer;

