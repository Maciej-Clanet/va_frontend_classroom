import "./IconButtonTransparent.css"

const IconButtonTransparent = ({text, icon, onClick}) =>{
    return <button className="icon-button-transparent text-label" onClick={onClick}>{icon}{text}</button>
}

export default IconButtonTransparent