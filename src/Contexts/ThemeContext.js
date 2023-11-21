import {useState, useEffect, useContext, createContext} from "react"

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) =>{

    const [theme, setTheme] = useState();

    const toggleTheme = () => {
        const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "dark-theme"
        setTheme(storedTheme)
    }, [])

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}