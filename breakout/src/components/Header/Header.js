import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import userIcon from "../../assets/icons/user.png";
import shoppingBagIcon from "../../assets/icons/shopping-bag.png";
import LoginSidebar from "../LoginSidebar/LoginSidebar";
import Cart from "../Cart/Cart";
import { useCart } from "../Cart/CartContext";

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { isCartOpen, openCart, closeCart } = useCart();
    const openSidebar = () => {
        setIsSidebarOpen(true);        
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    return (
        <>
            <header className="header">
                <nav className="navbar navbar-expand-lg  custom-navbar">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/men">MEN</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" to="/women">WOMEN</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" to="/boys">BOYS</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" to="/girls">GIRLS</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <img src={userIcon} alt="user" className="user-icon" id="userLogin" onClick={openSidebar} />
                                <img src={shoppingBagIcon} alt="cart" className="user-icon" onClick ={openCart} />
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
            <LoginSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            <Cart isOpen={isCartOpen} onClose={closeCart} />
        
        </>
    );
}

export default Header;
