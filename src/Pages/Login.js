import "./AuthPage.css"
import AuthForm from "../Forms/AuthForm/AuthForm";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react"
import { useAuth } from "../Contexts/AuthContext";    

const Login = () =>{
    const navigate = useNavigate();
    const [error, setError] = useState()

    const {setUserId, setUsername} = useAuth()

    const onSubmit = async (e, email, password) => {
        e.preventDefault();

        const dataToSend = {
            "email" : email,
            "password" : password
        }

        axios.post("http://localhost:8000/users/login", dataToSend)
        .then( (res) => {
            setUsername(res.data.username)
            setUserId(res.data.id)
            localStorage.setItem("userId", res.data.id)
            localStorage.setItem("username", res.data.username)

            navigate("/profile")
        } )
        .catch( (err) => {
            //if there was an error
            //if we got an response, display that, otherwise display the axios err message, if even that is missing, default to unknown error text
            setError(err.response?.data?.detail || err.message || "An Unknown error occured")
        })
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