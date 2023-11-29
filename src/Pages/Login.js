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
        e.preventDefault()

        axios.post("http://localhost:8000/users/login", {email, password})
        .then((res) => {
            setUserId(res.data.id)
            setUsername(res.data.username)
            localStorage.setItem("userId", res.data.id)
            localStorage.setItem("username", res.data.username)

            navigate("/")
        })
        .catch((err) => {
            setError(err.response.data.detail)
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