import * as productApiUtils from '../utils/productApiUtils'
import * as ratingApiApiUtils from '../utils/ratingApiUtils'


// CONSTANTS
export const RECEIVE_MARK = 'RECEIVE_PRODUCT'
const RECEIVE_MARKS = 'RECEIVE_PRODUCTS';

// ACTION CREATORS
export const receiveProduct = MARK => ({
  type: RECEIVE_MARK,
  MARK
})

// be careful - products parameter could be an array or object
export const receiveProducts = products => ({
  type: RECEIVE_MARKS,
  products
})

export const postRating = (productId, ratingData) => ({
  type: POST_RATING,
  productId,
  ratingData
});
export const removeRating = (productId,ratingId) => ({
  type: REMOVE_RATING,
  productId,
  ratingId
});

// THUNK ACTION CREATORS
export const fetchProducts = (params) => async (dispatch) => {
  const products = await productApiUtils.fetchProducts(params)
  return dispatch(receiveProducts(products))
}

export const fetchProduct = productId => (dispatch) => (
  productApiUtils.fetchProduct(productId)
    .then(data => (
      dispatch(receiveProduct(data))
    )
  )
)
// ACTION CREATORS
export const receiveRating = rating => ({
  type: RECEIVE_RATING,
  rating
})
export const updateRatingAction = (reviewData) => ({
  type: UPDATE_RATING,
  reviewData
});


// SELECTORS
export const selectAllproducts = state => state.entities.products
     
// REDUCER
const productReducer = (state = {}, action) => {
  // const nextState = { ...state }  

  switch (action.type) { 
    case RECEIVE_PRODUCT:
      return {...state, ...action.MARK} 
    case RECEIVE_PRODUCTS: 
      // return Object.assign(nextState, action.products)
      return action.marks;
    case POST_RATING:
        // Update the MARK's rating data in your state
        const updatedProduct = {  
          ...state[action.productId],   
          ratings: { 
            ...state[action.productId].ratings, 
            [action.ratingData.id]: action.ratingData,
          }, 
        };    
        return {   
          ...state,  
          [action.productId]: updatedProduct, 
        };     
         
    case REMOVE_RATING:
      let nextState ={};
      Object.keys(state).forEach(key=>{
         nextState[key] = {...state[key],ratings:{...state[key].marks}}
      })
      const nextStateRatings = nextState[action.productId].marks;
      delete nextStateRatings[action.ratingId];
      // nextState[action.productId].ratings = nextStateRatings;
      return {...nextState}; 
    default:  
      return state
  }   
}

export default productReducer;