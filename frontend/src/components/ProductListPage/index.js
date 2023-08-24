import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, selectAllproducts } from '../../store/productsReducer'
import audioIndex from '../../assets/products/audio-index.jpg';
import airConditionersIndex from '../../assets/products/airConditioners-index.jpg';
import alwxaIndex from '../../assets/products/alwxa-index.jpg';
import './ProductListPage.css'
import { useEffect, useState } from 'react'
import ProductListItem from '../ProductListItem';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

const ProductListPage = () => {
  const products = useSelector(selectAllproducts)
  const dispatch = useDispatch()
  const location = useLocation();
  const { pathname, search } = location;
  const [bgImg, setBgImg] = useState(airConditionersIndex);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (search) {
      const searchParams = new URLSearchParams(search);
      const urlCategory = searchParams.get('category');
      const urlSearch = searchParams.get('search');

      const updatedSearchParams = {
        category: urlCategory ? urlCategory : '',
        search: urlSearch ? urlSearch: ''
      };
      if (urlCategory) {
        dispatch(fetchProducts(updatedSearchParams))
        switch (urlCategory){
          case "airConditioners":
            setBgImg(airConditionersIndex);
            break;
          case "alexa":
            setBgImg(alwxaIndex);
            break;
          case "electronic":
            setBgImg(audioIndex);
            break;
          default:
            setBgImg(airConditionersIndex);
        }
      }
    }
  }, [dispatch,search]);

  return (
    <>
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={bgImg}
          alt=""
        />
        <div className="row center">
            {Object.values(products).length > 0 ? (Object.values(products).map(product => (
            <ul key={product.id} >
              <ProductListItem product={product} />
            </ul>
          ))):(<> 
          <p>No results,Try checking your spelling or use more general terms</p> 
          </>)}
        </div>
      </div>
    </div>

    </>
  )
}

export default ProductListPage