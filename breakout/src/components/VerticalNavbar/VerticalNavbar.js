import "./VerticalNavbar.css";
import { NavLink } from "react-router-dom";


function VerticalNavbar(props) {
  return (
    <div className="vertical-navbar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li class="nav-item">
                <NavLink class="nav-link " to={"/" + props.genderType +"/new-drip"}><h5>NEW DRIP</h5></NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link " to={"/" + props.genderType + "/clothing"}> <h5>CLOTHING </h5></NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="#"><h5>BAGGY FIT</h5></NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="#"><h5>SHOES</h5></NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="#"><h5>ACCESSORIES</h5></NavLink>
            </li>            <li class="nav-item">
                <NavLink class="nav-link" style = {{color:"red"}}to="#"><h5>SUMMER SALE</h5></NavLink>
            </li>            <li class="nav-item">
                <NavLink class="nav-link" to="#"><h5>#BREAKOUT STYLE</h5></NavLink>
            </li>
        </ul>
    </div>

  );
}

export default VerticalNavbar;