import "./ProductDetail.css";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { useState } from 'react';
import { useCart } from '../Cart/CartContext';

function ProductDetail({ productInfo, productPrice, productLink}) {
    productPrice = parseInt(productPrice.replace(/\D/g, ''));
    const [size, setSize] = useState(30);
    const [quantity, setQuantity] = useState(1);
    const { addToCart, openCart } = useCart(); 
    const changeSize = (e) => {
        setSize(e.target.getAttribute("data-value"));
    };

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    const handleAddToCart = () => {
        const product = {
            id: Date.now(),
            name: productInfo,
            size: size,
            quantity: quantity,
            price: productPrice * quantity,
            image: productLink
        };
        addToCart(product);
        openCart();
    };

    return (
        <div className="productDetail">
            <div className="product-img-div">
                <img src={productLink} className="product-img" alt="product" />
            </div>

            <div className="product-detail">
                <h2>{productInfo}</h2>
                <h4> PKR {productPrice}</h4>
                <p>Size: {size}</p>
                
                <div className="size-div" data-value="30" onClick={changeSize}>30</div>
                <div className="size-div" data-value="32" onClick={changeSize}>32</div>
                <div className="size-div" data-value="34" onClick={changeSize}>34</div>
                <div className="size-div" data-value="36" onClick={changeSize}>36</div>
                
                <QuantitySelector quantity={quantity} onQuantityChange={handleQuantityChange} />
                
                <div className="add-to-cart" onClick={handleAddToCart}>
                    <p>Add to cart</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
