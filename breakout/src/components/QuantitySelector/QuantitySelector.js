
import React from 'react';
import './QuantitySelector.css';

const QuantitySelector = ({ quantity, onQuantityChange }) => {

    const increaseQuantity = () => {
        onQuantityChange(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            onQuantityChange(quantity - 1);
        }
    };

    return (
        <div className="quantity-selector">
            <button className="quantity-button" onClick={decreaseQuantity}>−</button>
            <span className="quantity-display">{quantity}</span>
            <button className="quantity-button" onClick={increaseQuantity}>+</button>
        </div>
    );
};

export default QuantitySelector;
