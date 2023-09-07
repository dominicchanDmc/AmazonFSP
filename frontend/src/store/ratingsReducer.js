import * as productApiUtils from '../utils/productApiUtils'
import * as ratingApiApiUtils from '../utils/ratingApiUtils'


// CONSTANTS
export const RECEIVE_RATING = 'RECEIVE_RATING'
export const UPDATE_RATING  = 'UPDATE_RATING'

// ACTION CREATORS
export const receiveRating = rating => ({
  type: RECEIVE_RATING,
  rating
})
export const updateRatingAction = (reviewData) => ({
  type: UPDATE_RATING,
  reviewData
});

// THUNK ACTION CREATORS
export const fetchRating = ratingId => (dispatch) => (
  ratingApiApiUtils.fetchRating(ratingId)
    .then(data => (
      dispatch(receiveRating(data))
    )
  )
)

export const updateRating = (reviewData) => async (dispatch) => {
  try {
    const response = await ratingApiApiUtils.fetchUpdateRating(reviewData);
    dispatch(updateRatingAction(response));
    return { success: true };
  } catch (error) {
  console.error('Error updating rating:', error);
  }
};

// REDUCER
const ratingReducer = (state = {}, action) => {
  // const nextState = { ...state }

  switch (action.type) {
    case RECEIVE_RATING:
      return {...state, [action.rating.id]: action.rating}
    default:
      return state
  }
}

export default ratingReducer;