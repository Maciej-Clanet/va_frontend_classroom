import "./ThemeToggleButton.css"
import { useTheme } from "../../Contexts/ThemeContext";

const ThemeToggleButton = () => {
    const {toggleTheme} = useTheme();
    
    return <button onClick={toggleTheme}>Toggle Theme</button>
}

export default ThemeToggleButton;