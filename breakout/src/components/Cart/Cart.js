
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import "./Cart.css";

function Cart({ isOpen, onClose }) {
    const { cartItems, removeFromCart } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        onClose(); 
        navigate("/checkout"); 
    };

    return (
        <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
            <div className="sidebar-content">
                <button className="close-button" onClick={onClose}>×</button>
                <h5>Cart</h5>
                <ul className="cart-items">
                    {cartItems.map((item) => (
                        <li key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="item-image" />
                            <div className="item-details">
                                <p className="item-name">{item.name}</p>
                                <p className="item-size">Size: {item.size}</p>
                                <p className="item-quantity">Quantity: {item.quantity}</p>
                                <p className="item-price">PKR {item.price}</p>
                            </div>
                            <button 
                                className="remove-button" 
                                onClick={() => removeFromCart(item.id)}
                            >
                                🗑️
                            </button>
                        </li>
                    ))}
                </ul>
                <button className="checkout-button" onClick={handleCheckout}>
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default Cart;
