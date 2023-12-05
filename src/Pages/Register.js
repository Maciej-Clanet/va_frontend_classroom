import "./AuthPage.css"
import AuthForm from "../Forms/AuthForm/AuthForm"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../Contexts/AuthContext"

import axios from "axios"

const Register = () =>{
    const navigate = useNavigate()
    const {setUserId, setUsername} = useAuth()
    const [error, setError] = useState()

    const onSubmit = async (e, email, password) => {
        e.preventDefault()

        axios.post("http://localhost:8000/users/register", {email, password})
        .then((res) => {
            setUserId(res.data.id)
            setUsername(res.data.username)
            localStorage.setItem("userId", res.data.id)
            localStorage.setItem("username", res.data.username)

            navigate("/")
        })
        .catch((err) => {
            setError(err.response?.data?.detail || err.message || "An Unknown errror occured")
        })
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