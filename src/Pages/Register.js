import "./AuthPage.css"
import AuthForm from "../Forms/AuthForm/AuthForm"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../Contexts/AuthContext"

import axios from "axios"

const Register = () =>{
    const {setUsername, setUserId} = useAuth()

    const navigate = useNavigate()
    const [error, setError] = useState()

    const onSubmit = async (e, email, password) => {
        e.preventDefault();

        const dataToSend = {
            "email" : email,
            "password" : password
        }

        axios.post("http://localhost:8000/users/register", dataToSend)
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
            <h2>Register</h2>
            {error && <div className="login-error text-label">{error}</div>}
            <AuthForm onSubmit={onSubmit} formLabel="Sign Up"/>
        </div>
    )
}

export default Register;