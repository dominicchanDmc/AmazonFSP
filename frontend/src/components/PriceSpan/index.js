function PriceSpan({ product}) {
    let priceSpan;
    if (product && product.discount){
        let finalPrice = Number(product.price * (100-product.discount)/100).toFixed(2);
        priceSpan =    (<>
            <span>
                <span className="colorWhite price-fontSize-samll bgColor-BloodRed">
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
    return (
        <span className="product-price">{priceSpan}</span> 
    )
}
export default PriceSpan