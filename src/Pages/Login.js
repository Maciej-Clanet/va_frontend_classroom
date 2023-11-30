import "./AuthPage.css"
import AuthForm from "../Forms/AuthForm/AuthForm";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react"
// import { useAuth } from "../Contexts/AuthContext";    

const Login = () =>{
    const navigate = useNavigate();
    const [error, setError] = useState()

    // const {setUserId, setUsername} = useAuth()

    const onSubmit = async (e, email, password) => {

    }

    return(
        <div className="auth-page-container">
            <h2>Login</h2>
            {error && <div className="login-error text-label">{error}</div>}
            <AuthForm onSubmit={onSubmit} formLabel="Sign In"/>
        </div>
    )
}

export default Login;