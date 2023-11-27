import "./FeaturedArtistThumbnail.css"
import { useNavigate } from "react-router";
const FeaturedArtistThumbnail = ({ artistName, artistProfession, image, profileLink }) => {
    const navigate = useNavigate()

    return (
        <div className="featured-artist-thumbnail" onClick={() => navigate(profileLink)}>
            <img src={image} />
            <div className="artist-info">
                <span className="text-title">{artistName}</span>
                <span className="text-label">{artistProfession}</span>
            </div>

        </div>
    )
}

export default FeaturedArtistThumbnail;