import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, selectAllproducts } from '../../store/productsReducer'
import audioIndex from '../../assets/products/audio-index.jpg';
import './ProductListPage.css'
import { useEffect } from 'react'
import ProductListItem from '../ProductListItem';

const ProductListPage = () => {
  const products = useSelector(selectAllproducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch])

  return (
    <>
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={audioIndex}
          alt=""
        />
        <div className="row center">
            {Object.values(products).map(product => (
            <ul key={product.id} >
              <ProductListItem product={product} />
            </ul>
          ))}
        </div>
      </div>
    </div>

    </>
  )
}

export default ProductListPage