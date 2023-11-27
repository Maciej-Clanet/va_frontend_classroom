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
        const padding = 32;

        // const container = document.querySelector(".art-grid");
        const totalWidth = window.innerWidth;
        let maxItems = Math.floor(totalWidth / (cardWidth + gapSize))
        
        while ((maxItems - 1) * gapSize + maxItems * cardWidth + padding > totalWidth) {
            console.log("adjusting")
            maxItems--;
        }

        return maxItems
    }

    function updateThumbnails(){    
        const maxPerRow = getMaxPerRow()
        const newThumbnailsGrid = []

        for (let i = 0; i < rows; i++){
            const rowThumbnails = []
            for (let j = 0; j < maxPerRow; j++){
                rowThumbnails.push(
                    <ArtworkThumbnail key={`${i}-${j}`} image={tempArtworkThumbnail} artist="goober" title="test" imageLink="/test/image" />
                )
            }
            newThumbnailsGrid.push(rowThumbnails)
        }

        setThumbnails(newThumbnailsGrid)
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

            {thumbnails.map((row, i) => (
                <div key={`row${i}`} className="art-grid-row">
                    {row}
                </div>
            ))}

        </div>
    )
}

export default ArtGrid