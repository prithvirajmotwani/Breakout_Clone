import React, { useState } from "react";
import "./SignUp.css";

function SignUp() {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 


        try {
            const response = await fetch("http://localhost:3001/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                alert("User registered successfully");
                setFormData({
                    fname: "",
                    lname: "",
                    email: "",
                    password: ""
                });
            } else {
                alert(`Registration failed: ${result.error}`);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="signup">
            <div className="signup-content">
                <h5>Create Account</h5>
                <p>Please register below to create an account</p>
                <form className="form-group" onSubmit={handleSubmit}>
                    <label htmlFor="fname">First Name</label>
                    <input
                        type="text"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                    />

                    <label htmlFor="lname">Last Name</label>
                    <input
                        type="text"
                        name="lname"
                        value={formData.lname}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Your Email Address </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="password">Password </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <br />
                    <div className="email-marketing">
                        <input type="checkbox" />
                        <label> Subscribe To Email Marketing</label>
                    </div>

                    <button type="submit" className="create-account-button">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
