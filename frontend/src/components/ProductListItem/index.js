import React from "react";
import "./ProductListItem.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

function ProductItem({ product}) {
  return (

    <div className="productItem-card">
      <Link to="">
        <img className="medium"src={product.photoUrls[0]} alt="product" />
      </Link>
      <div className="productItem-card-body">
        <Link to="" className="a-product-Name">
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
          <small>$</small>
          <strong>{product.price}</strong>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductItem;