import React from "react";
import "./ProductListItem.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

function ProductItem({ product}) {
  let priceSpan;
  if (product && product.discount){
      let finalPrice = Number(product.price * (100-product.discount)/100).toFixed(2);
      priceSpan =    (<>
          <span>
              <span className="colorWhite price-fontSize-18 bgColorRed">
                  {product.discount +"% off"}
              </span>
          </span>
          <span>
              <span className="colorBlack price-fontSize-18">
                  {" $"+ finalPrice}
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
      <span className="colorBlack price-fontSize-18">
        {"$"+ product.price}
      </span>
      </>)
  }

  return (

    <div className="productItem-card">
      <Link to={`/products/${product.id}`}>
        <img className="medium"src={product.photoUrls[0]} alt="product" />
      </Link>
      <div className="productItem-card-body">
        <Link to={`/products/${product.id}`} className="a-product-Name">
             <h2>{product.productName.length > 50 ? product.productName.slice(0, 50) + "..." : product.productName}</h2>
        </Link>
        <div className="rating">
          <span> <i className="fa fa-star"></i> </span>
          <span> <i className="fa fa-star"></i> </span>
          <span> <i className="fa fa-star"></i> </span>
          <span> <i className="fa fa-star"></i> </span>
          <span> <i className="fa fa-star"></i> </span>
        </div>
        <div className="price">
          <span>{priceSpan}</span>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductItem;