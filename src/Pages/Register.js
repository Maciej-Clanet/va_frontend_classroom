import "./AuthPage.css"
import AuthForm from "../Forms/AuthForm/AuthForm"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
// import { useAuth } from "../Contexts/AuthContext"

import axios from "axios"

const Register = () =>{
    const navigate = useNavigate()
    const [error, setError] = useState()

    const onSubmit = async (e, email, password) => {

    }

    return(
        <div className="auth-page-container">
            <h2>Register</h2>
            {error && <div className="login-error text-label">{error}</div>}
            <AuthForm onSubmit={onSubmit} formLabel="Sign Up"/>
        </div>
    )
}

export default Register;