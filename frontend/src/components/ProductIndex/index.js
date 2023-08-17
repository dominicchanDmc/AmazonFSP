import CategoryStanley from '../../assets/CategoryCard_Stanley.jpg';
import CategoryElectronic from '../../assets/CategoryCard_electronic.jpg';
import CategoryTools from '../../assets/CategoryCard_tools.jpg';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts, selectAllproducts } from '../../store/productsReducer'
import "./ProductIndex.css";
import SimpleProductList from '../SimpleProductList';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const ProductIndex = () => {
  const products = useSelector(selectAllproducts)
  const dispatch = useDispatch()
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch])

  const handleCategoryElectronic = (e) => {
    history.push('/productList');
  };

  const handleSignInClick = () => {
    history.push('/login');
  };

  return(
    <>
      <section className="section-1">
        <div className="section-1-container">
          <div className="section-1-column">
              <h3>Ready for anything</h3>
              <img src={CategoryStanley} alt=""/>
              <p>Shop Stanley drinkware</p>
          </div>
          <div className="section-1-column">
              <h3>Gadget galore</h3>
              <img className='cursor-pointer' src={CategoryElectronic} alt="" onClick={handleCategoryElectronic}/>
              <p className='cursor-pointer' onClick={handleCategoryElectronic}>Shop electronic products</p>
          </div>
          <div className="section-1-column">
              <h3>Home repair products</h3>
              <img src={CategoryTools} alt=""/>
              <p>Shop tools, lighting & more</p>
          </div>
          <div className="section-1-column">
              <h3>Sign in for your best experience</h3>
              <button onClick={handleSignInClick} className='cursor-pointer'>Sign in securely</button>
          </div>
        </div>
      </section>
      <section class="section-3">
        <section class="section-3-container">
            <h3>Inspired by your browsing history</h3>
            <div class="product-detail-cards">
              {Object.values(products).map((product, index) => (
                index <=5 && (
                  <SimpleProductList product={product} />
                )
              ))}
            </div>
        </section>
      </section>
    </>
  )
}
export default ProductIndex