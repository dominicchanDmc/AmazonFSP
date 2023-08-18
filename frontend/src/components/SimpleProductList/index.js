import { Link } from 'react-router-dom/cjs/react-router-dom'
import './SimpleProductList.css'

function SimpleProductList({ product}) {
    let priceSpan;
    if (product && product.discount){
        let finalPrice = Number(product.price * (100-product.discount)/100).toFixed(2);
        priceSpan =    (<>
            <span>
                <span className="colorWhite price-fontSize-samll bgColorRed">
                    {product.discount +"% off"}
                </span>
            </span>
            <span>
                <span className="colorBlack price-fontSize-18">
                    {"$"+ finalPrice}
                </span>
                <span className="price-fontSize-samll colorGray">
                    <s>{"$"+product.price}</s>
                </span>
            </span>            
        </>)
    }
    else
    {
        priceSpan =  (<>
        {"$"+ product.price}
        </>)
    }
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
                    <span className="product-price">{priceSpan}</span>
                </p>
            </div>
        </>
    )
}

export default SimpleProductList