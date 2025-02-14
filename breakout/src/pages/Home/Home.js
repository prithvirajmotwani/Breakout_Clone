import './Home.css'
import menBanner from "../../assets/banners/men.webp";
import womenBanner from "../../assets/banners/women.webp";
import boysBanner from "../../assets/banners/boys.webp";
import girlsBanner from "../../assets/banners/girls.webp";
import saleBanner from "../../assets/banners/sale.jpg";
import { NavLink } from 'react-router-dom';


function Home() {
    return (
        <div className="home" >
            <div className="block-container">
                <div className="block"> 
                    <NavLink to = "/men"> <img src={menBanner} alt="Men" /> </NavLink>
                </div>
                <div className="block"> 
                    <NavLink to = "women"> <img src={womenBanner} alt="Women" /> </NavLink>
                </div>
                <div className="block"> 
                    <NavLink to = "boys"> <img src={boysBanner} alt="Boys" /> </NavLink>
                </div>
                <div className="block"> 
                    <NavLink to = "girls"> <img src={girlsBanner} alt="Girls" /> </NavLink>
                </div>
            </div> 
            <div className='sale'>
                <div className='banner'>
                    <img src={saleBanner} alt="sale" />
                </div>
            </div>
        </div>
    );
}

export default Home;