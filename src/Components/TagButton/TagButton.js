import "./TagButton.css"
import { useState } from "react"

const TagButton = ({text, onClick, selected=false}) => {
    const [isSelected, setIsSelected] = useState(selected);

    return(
        <button className={`tag-button ${isSelected && "selected"}`} onClick={() => { setIsSelected(!isSelected); onClick() }}>
            <span className="text-label">{text}</span>
        </button>
    )

}

export default TagButton;