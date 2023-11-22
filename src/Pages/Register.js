import "./AuthPage.css"
import AuthForm from "../Forms/AuthForm/AuthForm"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"

const Register = () =>{
    const navigate = useNavigate()

    const onSubmit = async (e, email, password) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //signedIn
            // const user = userCredential.user;
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
            <h2>Register</h2>
            <AuthForm onSubmit={onSubmit} formLabel="Sign Up"/>
        </div>
    )
}

export default Register;