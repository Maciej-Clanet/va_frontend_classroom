import "./AuthPage.css"
import AuthForm from "../Forms/AuthForm/AuthForm";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import { useNavigate } from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate();

    const onSubmit = async (e, email, password) => {
        e.preventDefault()

        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //signedIn
            const user = userCredential.user;
            navigate("/")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message
            alert(errorCode + errorMessage)
        })
    }

    return(
        <div className="auth-page-container">
            <h2>Login</h2>
            <AuthForm onSubmit={onSubmit} formLabel="Sign In"/>
        </div>
    )
}

export default Login;