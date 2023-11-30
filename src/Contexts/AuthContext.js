import {createContext, useContext, useState} from "react"

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [userId, setUserId] = useState( localStorage.getItem("userId") )
    const [username, setUsername] = useState( localStorage.getItem("username") )

    function logout(){
        setUserId(null)
        setUsername(null)
        localStorage.removeItem("userId")
        localStorage.removeItem("username")
    }

    return(
        <AuthContext.Provider value={{userId, setUserId, username, setUsername, logout}}>
            {children}
        </AuthContext.Provider>
    )
}