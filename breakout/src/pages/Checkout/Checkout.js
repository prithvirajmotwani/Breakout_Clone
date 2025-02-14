import React, { useState } from "react";
import { useCart } from "../../components/Cart/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import "./Checkout.css";

function Checkout() {
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    

    const handlePlaceOrder = async (e) => {
        e.preventDefault();

        const orderData = {
            orderID: `ORD-${Date.now()}`, 
            orderDate: new Date().toLocaleDateString(),
            orderTime: new Date().toLocaleTimeString(),
            orderTotal: calculateTotal().toFixed(2),
            orderItems: cartItems,
            orderAddress: address,
            orderUser: name,
        };

        try {
            await axios.post("http://localhost:3001/api/order", orderData);
            alert("Order placed successfully!");

            clearCart(); 
            navigate("/"); 
        } catch (error) {
            console.error("Error placing order:", error);
            alert("Failed to place order. Please try again.");
        }
    };

    return (
        <div className="checkout-page">
            <h2>Checkout</h2>
            <div className="checkout-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="checkout-item">
                        <img src={item.image} alt={item.name} className="checkout-item-image" />
                        <div className="checkout-item-details">
                            <p className="checkout-item-name">{item.name}</p>
                            <p className="checkout-item-size">Size: {item.size}</p>
                            <p className="checkout-item-quantity">Quantity: {item.quantity}</p>
                            <p className="checkout-item-price">Price: {item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="checkout-total">
                <h3>Total: PKR {calculateTotal().toFixed(2)}</h3>
            </div>
            <form className="checkout-form" onSubmit={handlePlaceOrder}>
                <h3>Shipping Details</h3>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                />
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
}

export default Checkout;

