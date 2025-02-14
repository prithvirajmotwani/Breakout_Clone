import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const openCart = () => {
        setIsCartOpen(true);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, openCart, closeCart, clearCart, isCartOpen, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};

// Create a custom hook to use the cart context
export function useCart() {
    return useContext(CartContext);
}
