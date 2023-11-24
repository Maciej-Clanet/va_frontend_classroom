import "./ProductCard.css"
import { useNavigate } from "react-router";


const ProductCard = ({image, title, artist, avatar, price,productLink}) =>{
    const navigate = useNavigate()

    return(
        <div className="product-card" onClick={() => navigate(productLink)}>
            <img src={image}/>
            <div className="product-info">
                <span className="text-title">{title}</span>
                <div className="product-info-row">
                    <img src={avatar}/>
                    <span className="text-label prominent">by {artist}</span>
                    <span className="text-label prominent product-price">£{price}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;