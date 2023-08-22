import { Link } from 'react-router-dom/cjs/react-router-dom'
import './SimpleProductList.css'
import PriceSpan from '../PriceSpan'

function SimpleProductList({ product}) {
    return(
        <>
            <div  className="product-detail-card">
                <Link className="product-detail-link" to={`/products/${product.id}`}>    
                    <div className="product-detail-img">
                            <img src={product.photoUrls[0]} alt="product" />  
                    </div>
                
                    {product.productName.length > 50 ? product.productName.slice(0, 50) + "..." : product.productName}
                </Link>
                <p>
                  <PriceSpan product={product}/>
                </p>
            </div>
        </>
    )
}

export default SimpleProductList