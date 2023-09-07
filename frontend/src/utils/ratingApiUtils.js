import csrfFetch from "../store/csrf";

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