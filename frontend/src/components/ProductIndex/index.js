import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, selectAllproducts } from '../../store/productsReducer'
import './ProductIndex.css'
import { useEffect } from 'react'

const ProductIndex = () => {
  const products = useSelector(selectAllproducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch])

  return (
    <>
    <h1> productIndex</h1>
        {Object.values(products).map(product => (
        <ul key={product.id} >
          <li>{product.productName}</li>
          <li>{product.description}</li>
          <li>{product.categories}</li>
          <li>{product.price}</li>
          <li>{product.discount}</li>
          <li key={product.photoUrls[1]}><img src={product.photoUrls[1]} alt="" /></li>
          <li key={product.photoUrls[0]}><img src={product.photoUrls[0]} alt="" /></li>

          {/* {product.photoUrls.map(photoUrl => (
              <li key={photoUrl} ><img src={photoUrl} alt="" /></li>
            ))} */}
        </ul>
      ))}
    </>
  )
}

export default ProductIndex