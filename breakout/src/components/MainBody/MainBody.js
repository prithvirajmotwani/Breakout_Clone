import './MainBody.css';
import Header from '../Header/Header';
import VerticalNavbar from '../VerticalNavbar/VerticalNavbar';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';



function MainBody(props) {
    return (
        <div className="main-body">
            <Header />
            <div className="middle-body">
                <div className="vertical-menu"> <VerticalNavbar genderType = {props.gender}/> </div>
                <div className = "logo-container"> <div className="logo"> <Logo/> </div> </div>
                <div className="search-icon"> <SearchBar/> </div>
            </div>
            <hr/>
        </div>
    )

}
export default MainBody;

