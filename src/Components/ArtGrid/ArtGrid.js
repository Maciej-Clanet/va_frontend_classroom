import "./ArtGrid.css"
import ArtworkThumbnail from "../ArtworkThumbnail/ArtworkThumbnail"
import tempArtworkThumbnail from "../../Assets/Temp/ArtworkThumb.png"

import { useEffect } from "react"
import { useState } from "react"

const ArtGrid = ({rows}) => {
    
    const [thumbnails, setThumbnails] = useState([]);

    function getMaxPerRow(){
        const cardWidth = 211;
        const gapSize = 8;

        const totalWidth = window.innerWidth;
        let maxItems = Math.floor(totalWidth / (cardWidth + gapSize))
    
        const buffer = 1;

        while ((maxItems - 1) * gapSize + maxItems * cardWidth + buffer > totalWidth) {
            console.log("adjusting")
            maxItems--;
        }
        return maxItems
    }

    function updateThumbnails(){
        let newThumbnails = []
            for(let i = 0; i < getMaxPerRow() * rows; i++){
                newThumbnails.push(
                        <ArtworkThumbnail key={i} image={tempArtworkThumbnail} artist="goober" title="test" imageLink="/test/image" />
                    )
            }
            setThumbnails(newThumbnails)
    }

    useEffect(() => {
        updateThumbnails()

        const handleResize = () => {
            updateThumbnails();
        }
        window.addEventListener("resize", handleResize); 
        
        return () => {
            window.removeEventListener("rezise", handleResize);
        }
    
    },[])

    return(
        <div className="art-grid">
            {thumbnails}
            {/* {            
                [...Array(getMaxPerRow() * rows)].map(thumb => <ArtworkThumbnail image={tempArtworkThumbnail} artist="goober" title="test" imageLink="/test/image" /> )
            } */}
        </div>
    )
}

export default ArtGrid