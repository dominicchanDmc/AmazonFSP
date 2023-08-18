import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { fetchProduct, getProduct } from "../../store/productsReducer";
import './ProductShowPage.css'

function ProductShowPage() {
    const { productId } = useParams();
    const product = useSelector(getProduct(productId));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [dispatch,productId]);
    let productInfo; 
    if (product){
        productInfo = (<>
            <section id="product-info">
                <div className="item-image-parent">
                    <div className="item-list-vertical">
                        {
                           product.photoUrls && (
                                product.photoUrls.map((url,index) => (
                                    <div key={product.id+"-"+index} className="thumb-box">
                                        <img src={url} alt="thumbnail" />
                                    </div>
                                ))
                            ) 
                        }
                    </div>
                    <div className="item-image-main">
                        {product.photoUrls && (
                            <img src={product.photoUrls[0]} alt="default" />
                        ) }
                    </div>
                </div>

                <div className="item-info-parent">
                    <div className="main-info">
                        <h4>{product.productName}</h4>
                        <div className="star-rating">
                            <span>★★★★</span>★            
                        </div>
                        <p>Price: <span id="price">{product.price}</span></p>
                    </div>

                    <div className="description">
                        {product.productName}
                    </div>

                </div>
            </section>
        </>)
    }
    else
        productInfo=""
    return(
        <>
            {productInfo}
        </>
    )
}

export default ProductShowPage 