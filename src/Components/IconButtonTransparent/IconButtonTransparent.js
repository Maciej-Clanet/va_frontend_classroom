import "./IconButtonTransparent.css"

const IconButtonTransparent = ({text, icon, onClick, style}) =>{
    return <button className="icon-button-transparent text-label" style={style} onClick={onClick}>{icon}{text}</button>
}

export default IconButtonTransparent