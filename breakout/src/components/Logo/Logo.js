import "./Logo.css";
import logo from "../../assets/icons/Breakout-logo.png";

function Logo() {
    return (
        <div className="logo-container">
            <img src={logo} alt="logo" className = "logo" />
        </div>
    )
}

export default Logo;