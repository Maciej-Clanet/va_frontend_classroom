import "./FeaturedArtist.css"
import { useNavigate } from "react-router-dom"

const FeaturedArtist = ({name, profession, image, profileLink}) =>{
    const navigate = useNavigate()

    return(
        <div className="artist-thumbnail" onClick={() => navigate(profileLink)} >
            <img src={image}/>
            <div className="artist-info">
                <span className="text-title">{name}</span>
                <span className="text-body">{profession}</span>
            </div>
        </div>
    )
}
export default FeaturedArtist;
