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
        let priceSpan;
            if (product.discount){
                let finalPrice = Number(product.price * (100-product.discount)/100).toFixed(2);
                priceSpan =    (<>
                    <span>
                        <span className="colorRed price-fontSize-mid">
                            {"-"+product.discount +"% "}
                        </span>
                        <span className="colorBlack price-fontSize-large">
                            {"$"+ finalPrice}
                        </span>
                    </span>
                    <span className="price-fontSize-samll">Typical price: <s>{"$"+product.price}</s></span>            
                </>)
            }
            else
            {
                priceSpan =  (<>
                {"$"+ product.price}
                </>)
            }

        productInfo = (<>
            <section id="product-info" className="bgcolor-white">
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
                            <small>4 </small><span>★★★★</span>★<small> 10 ratings</small>            
                        </div>
                        <p><span className="showItem-price">{priceSpan}</span></p>
                                
                    </div>

                    <div className="description">
                        <p className="description-fontSize-mid">
                            <b>Product Description</b>
                        </p>
                        <p className="description-fontSize-samll">{product.description}</p>
                    </div>

                </div>
                <div className="item-cart-parent">
                    <div className="form"> 
                    <form>
   
                    <button>Add toCart</button>
                    </form>
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