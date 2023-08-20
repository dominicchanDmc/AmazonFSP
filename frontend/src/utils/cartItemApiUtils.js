export const fetchCartItemsByUserId = async userId => {
  try {
    const res = await fetch(`/api/users/${userId}/cart_items`);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error("Failed to fetch cart items");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
