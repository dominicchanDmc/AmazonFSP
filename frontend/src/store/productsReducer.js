import * as productApiUtils from '../utils/productApiUtils'

// CONSTANTS
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'
const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

// ACTION CREATORS
export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
})

// be careful - products parameter could be an array or object
export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
})

// THUNK ACTION CREATORS
export const fetchProducts = () => async (dispatch) => {
  const products = await productApiUtils.fetchAllProducts()
  return dispatch(receiveProducts(products))
}

export const fetchProduct = productId => (dispatch) => (
  productApiUtils.fetchProduct(productId)
    .then(data => (
      dispatch(receiveProduct(data))
    )
  )
)

// SELECTORS
export const selectAllproducts = state => state.entities.products

export const getProducts = (state) => selectAllproducts(state) ? Object.values(selectAllproducts(state)) : [];

export const getProduct = (productId) => (state) => selectAllproducts(state) ? selectAllproducts(state)[productId] : null;
// REDUCER
const productReducer = (state = {}, action) => {
  const nextState = { ...state }

  switch (action.type) {
    case RECEIVE_PRODUCT:
      nextState[action.product.id] = action.product
      return nextState
    case RECEIVE_PRODUCTS:
      return Object.assign(nextState, action.products)
    default:
      return state
  }
}

export default productReducer;