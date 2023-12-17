import * as productApiUtils from '../utils/productApiUtils'
import * as ratingApiApiUtils from '../utils/ratingApiUtils'


// CONSTANTS
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'
const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const POST_RATING = 'POST_RATING';
export const REMOVE_RATING  = 'REMOVE_RATING'

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
export const postRatingRequest = (ratingData) => async (dispatch) => {
  try {
    // const requestData = JSON.stringify({ rating: ratingData });

    const response = await ratingApiApiUtils.fetchPostRating(ratingData.productId, ratingData);

    // if (response.status === 200) {
      dispatch(postRating(ratingData.productId, response));
      return { success: true };
    // } else {
    //   return { success: false, error: response.data.error };
    // }
  } catch (error) {
    return { success: false, error: error.message }; // Return the caught error message
  }
};
// SELECTORS
export const selectAllproducts = state => state.entities.products
 
// export const getProducts = (state) => selectAllproducts(state) ? Object.values(selectAllproducts(state)) : [];

export const getProduct = (productId) => (state) => selectAllproducts(state) ? selectAllproducts(state)[productId] : null;
export const getProductRatings = (productId) => (state) =>{
  const ratings =selectAllproducts(state) ? selectAllproducts(state)[productId]?.ratings : null;
  // console.log(ratings);
  }
     
// REDUCER
const productReducer = (state = {}, action) => {
  // const nextState = { ...state }
 
  switch (action.type) { 
    case RECEIVE_PRODUCT: 
      return {...state, ...action.product} 
    case RECEIVE_PRODUCTS: 
      // return Object.assign(nextState, action.products)
      return action.products;
    case POST_RATING: 
        // Update the product's rating data in your state
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
         nextState[key] = {...state[key],ratings:{...state[key].ratings}}
      })
      const nextStateRatings = nextState[action.productId].ratings;
      delete nextStateRatings[action.ratingId];
      // nextState[action.productId].ratings = nextStateRatings;
      return {...nextState}; 
    default:  
      return state
  }  
}

export default productReducer;