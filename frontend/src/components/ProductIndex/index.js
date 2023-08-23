import CategoryElectronic from '../../assets/CategoryCard_electronic.jpg';
import CategoryAlexa from '../../assets/CategoryCard_Alexa.jpg';
import CategoryAirConditioners from '../../assets/CategoryCard_airConditioners.jpg';

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts, selectAllproducts } from '../../store/productsReducer'
import "./ProductIndex.css";
import SimpleProductList from '../SimpleProductList';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom';

const ProductIndex = () => {
  const products = useSelector(selectAllproducts)
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch])

  const handleCategoryElectronic = (e) => {
    history.push('/products?search=electronic');
  };

  const handleSignInClick = () => {
    history.push('/login');
  };

  return(
    <>
      <section className="section-1">
        <div className="section-1-container">
          <div className="section-1-column">
              <h3>Shop summer deals with Alexa</h3>
              <img src={CategoryAlexa} alt=""/>
              <p>Explore deals on Alexa devices</p>
          </div>
          <div className="section-1-column">
              <h3>Electronic</h3>
              <img className='cursor-pointer' src={CategoryElectronic} alt="" onClick={handleCategoryElectronic}/>
              <p className='cursor-pointer' onClick={handleCategoryElectronic}>Shop electronic products</p>
          </div>
          <div className="section-1-column">
              <h3>Room Air Conditioners</h3>
              <img src={CategoryAirConditioners} alt=""/>
              <p>Shop Air Conditioners</p>
          </div>
            {!sessionUser && (<>
              <div className="section-1-column">
                <h3>Sign in for your best experience</h3>
                <button onClick={handleSignInClick} className='cursor-pointer'>Sign in securely</button>       
              </div>
            </>)}
        </div>
      </section>
      <section className="section-3">
        <section className="section-3-container">
            <h3>Inspired by your browsing history</h3>
            <div className="product-detail-cards">
              {Object.values(products).map((product, index) => (
                index <=5 && (
                  <div key={product.id}>
                    <SimpleProductList product={product} />
                  </div>
                )
              ))}
            </div>
        </section>
      </section>
    </>
  )
}
export default ProductIndex