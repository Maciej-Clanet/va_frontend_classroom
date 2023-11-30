import "./AuthForm.css"
import { useState } from "react"

const AuthForm = ({onSubmit, formLabel}) =>{
    // const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <form className="auth-form" onSubmit={(e) => onSubmit(e, email, password)}>
            <label htmlFor="email-address">Email:</label> 
                <input 
                    id="email-address"
                    type="email" 
                    name="email"
                    value={email}  
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    required
                    />
            <label htmlFor="password">Password:</label> 
                <input
                    id="password" 
                    type="password"
                    name="password" 
                    value={password}  
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    />
            <button type="submit">{formLabel}</button>
        </form>
    )
}

export default AuthForm