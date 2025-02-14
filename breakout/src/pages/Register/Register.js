import "./Register.css";
import MainBody from '../../components/MainBody/MainBody';
import SignUp from '../../components/SignUp/SignUp';

function Register() {
    return (
        <div className="register">
            <MainBody gender = "men"/>
            <SignUp/>
        </div>
    );
}

export default Register;