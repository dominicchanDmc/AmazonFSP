import { Link } from 'react-router-dom/cjs/react-router-dom'
import './SimpleProductList.css'

function SimpleProductList({ product}) {

    return(
        <>
            <div className="product-detail-card">
                <Link className="product-detail-link" to="">    
                    <div className="product-detail-img">
                            <img src={product.photoUrls[0]} alt="product" />  
                    </div>
                
                    {product.productName.length > 50 ? product.productName.slice(0, 50) + "..." : product.productName}
                </Link>
                <p>
                    <strong className="product-price">$ {product.price}</strong>
                </p>
            </div>
        </>
    )
}

export default SimpleProductList