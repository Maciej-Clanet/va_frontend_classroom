import "./ArtworkThumbnail.css"
import { useNavigate } from "react-router";


const ArtworkThumbnail = ({image, title, artist, imageLink, loading}) => {
    const navigate = useNavigate()
    return(
        <div className="artwork-thumbnail" onClick={() => navigate(imageLink)}>
            <img src={image}/>
            {loading && <div className="artwork-loading"><span>Loading...</span></div>}
            <div className="artwork-details">
                <span className="text-label prominent">{title}</span>
                <span className="text-label">{artist}</span>
            </div>
        </div>
    )
}

export default ArtworkThumbnail;