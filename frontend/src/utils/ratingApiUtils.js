import csrfFetch from "../store/csrf";
import { removeRating } from "../store/productsReducer";

export const fetchRating = async ratingId => {
  const res = await fetch(`/api/ratings/${ratingId}`)
  if (res.ok) {
    const data = await res.json()
    return data
  } else {
    // error handling
  }
}

export const fetchPostRating = async (productId, ratingData) => {
  try {
    const res = await csrfFetch(`/api/products/${productId}/ratings`, {
      method: 'POST',
      body: JSON.stringify(ratingData),
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      // Handle errors or validation failures here
      const errorData = await res.json();
      throw new Error(errorData.error);
    }
  } catch (error) {
    // Handle network errors or other exceptions here
    throw new Error('An error occurred while posting the rating.');
  }
};

export const fetchUpdateRating = async (ratingData) => {
  try {
    const res = await csrfFetch(`/api/ratings/${ratingData.reviewId}`, {
      method: 'PUT',
      body: JSON.stringify(ratingData),
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      // Handle errors or validation failures here
      const errorData = await res.json();
      throw new Error(errorData.error);
    }
  } catch (error) {
    // Handle network errors or other exceptions here
    throw new Error('An error occurred while posting the rating.');
  }
};

export const fetchRemoveReview = (productId,review_Id) => async (dispatch) =>{
  try {
    const response = await csrfFetch(`/api/ratings/${review_Id}`, {
      method: 'DELETE'
    }); 

    if (response.ok) {
      dispatch(removeRating(productId,review_Id));
    } else {
      throw new Error('Failed to remove review');
    }
  } catch (error) {
    throw error;
  }
};