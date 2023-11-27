import "./ThemeToggleButton.css"
import { useTheme } from "../../Contexts/ThemeContext";
import {ReactComponent as SunIcon} from "../../Assets/Icons/SunIcon.svg"
import {ReactComponent as MoonIcon} from "../../Assets/Icons/MoonIcon.svg"
const ThemeToggleButton = () => {
    const {theme, toggleTheme} = useTheme();
    
    return <button className={`theme-toggle-button ${theme}`} onClick={toggleTheme}>
        {
            theme === "light-theme"
            ? <MoonIcon/>
            : <SunIcon/> 
            }
        </button>
}

export default ThemeToggleButton;