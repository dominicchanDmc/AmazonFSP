export const fetchAllProducts = () => (
  fetch('/api/products')
    .then(res => {
      if(res.ok) {
        return res.json()
      } else {
        // error handling
      }
    })
)

export const fetchProduct = async productId => {
  const res = await fetch(`/api/products/${productId}`)
  if (res.ok) {
    const data = await res.json()
    return data
  } else {
    // error handling
  }
}