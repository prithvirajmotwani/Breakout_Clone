import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSidebar.css";

function LoginSidebar({ isOpen, onClose }) {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3001/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                alert("Login successful");
                setFormData({
                    email: "",
                    password: ""
                });
                onClose(); 
            } else {
                alert(`Login failed: ${result.error}`);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleCreateAccount = () => {
        navigate("/register"); 
        onClose(); 
    };

    return (
        <div className={`login-sidebar ${isOpen ? "open" : ""}`}>
            <div className="sidebar-content">
                <button className="close-button" onClick={onClose}>×</button>
                <h5>Login</h5>
                <form className="form-group" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email Address <span>*</span></label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password">Password <span>*</span></label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <button type="submit" className="login-button">
                        Log In
                    </button>
                </form>
                <a href="#" className="forgot-password">Forgot your password?</a>
                <br />
                <button className="create-account-button" onClick={handleCreateAccount}>
                    Create Account
                </button>
            </div>
        </div>
    );
}

export default LoginSidebar;
