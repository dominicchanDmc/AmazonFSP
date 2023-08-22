import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { fetchProduct, getProduct } from "../../store/productsReducer";
import './ProductShowPage.css'
import { fetchAddToCart } from "../../store/cartItemsReducer";

function ProductShowPage() {
    const { productId } = useParams();
    const product = useSelector(getProduct(productId));
    const [quantity, setQuantity] = useState(1); 
    const [message, setMessage] = useState({ content: '', visible: false });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [dispatch,productId]);

    const handleAddToCart = () => {
        dispatch(fetchAddToCart(product.id,quantity));
        setMessage({ content: 'Item Added to Cart', visible: true });
        setTimeout(() => {
          setMessage({ ...message, visible: false });
        }, 2000);
    };

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
    };

    let productInfo; 
    if (product){
        let finalPrice = product.price;
        let priceSpan;
            if (product.discount){
                finalPrice = Number(product.price * (100-product.discount)/100).toFixed(2);
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
                priceSpan =  (
                <span className="colorBlack price-fontSize-large">
                    {"$"+ product.price}
                </span>
                )
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
                    <div className="item-cart-form"> 
                        <span className="colorBlack price-fontSize-large">
                            {"$"+ finalPrice}
                        </span>                        
                        <span className="colorGrayBlue price-fontSize-14">FREE Returns</span>
                        <span className="colorGrayBlue price-fontSize-14">FREE delivery <strong className="colorBlack">Wednesday, August 23</strong></span>
                        <span className=" price-fontSize-14">Or fastest delivery <strong className="colorBlack">Tomorrow, August 19.</strong></span>
                        <span className="colorGreen price-fontSize-18">In Stock</span>
                        <div>
                            <label htmlFor="quantity">Qty: </label>
                            <select id="quantity" onChange={handleQuantityChange}
                             name="quantity" className="showQuantitySelect" defaultValue={"1"}>
                                <option key="0" value="0">0 (Delete)</option>
                                <option key="1" value="1">1 </option>
                                {Array.from({ length: 14 }, (_, index) => index + 2).map((qty) => (
                                    <option key={qty} value={qty}>
                                        {qty}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button onClick={handleAddToCart}>Add toCart</button>
                        {message.visible && (
                            <div className="cart-message">
                            <b>{message.content}</b>
                            </div>
                        )}
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