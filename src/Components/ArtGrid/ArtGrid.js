import "./ArtGrid.css"
import ArtworkThumbnail from "../ArtworkThumbnail/ArtworkThumbnail"
import tempArtworkThumbnail from "../../Assets/Temp/ArtworkThumb.png"
import {useEffect, useState, useRef} from "react"
import axios from "axios"

const ArtGrid = ({rows}) => {
    const [thumbnails, setThumbnails] = useState([])
    const [thumbData, setThumbData] = useState([])
    const isLoading = useRef(false)

    function getMaxPerRow(){
        const cardWidth = 211;
        const gap = 8;
        const padding = 16;

        const totalWidth = window.innerWidth;

        const maxItems = Math.floor(   totalWidth / ( cardWidth + gap + padding ) )
        return maxItems;

    }
    function updateThumbnails(data){

        const maxPerRow = getMaxPerRow()
        const newThumbnailsGrid = []
        let thumbIndex = 0

        for(let i = 0; i < rows; i++){
            const rowThumbnails = []
            for(let j = 0; j < maxPerRow; j++){

                //if the thumbnail is not in memory
                if(thumbIndex >= data.length){
                    //create default
                    rowThumbnails.push(
                        <ArtworkThumbnail 
                            key={`${i}-${j}`}
                            image={tempArtworkThumbnail}
                            artist="goober"
                            title="test"
                            imageLink="/art/test"
                            loading={true}
                        /> 
                    )
                }else{
                    //create based on data
                    const artworkInfo = data[thumbIndex];
                    rowThumbnails.push(
                        <ArtworkThumbnail 
                            key={`${i}-${j}`}
                            image={artworkInfo["thumbnail_path"]}
                            artist={artworkInfo["username"]}
                            title={artworkInfo["title"]}
                            imageLink={`/${artworkInfo["username"]}/${artworkInfo["title"]}`}
                            loading={false}
                        /> 
                    )
                }
                thumbIndex++
            }
            newThumbnailsGrid.push(rowThumbnails)
        }
        setThumbnails(newThumbnailsGrid);
    }


    function getData(){

        console.log(isLoading)
        if(thumbData.length >= getMaxPerRow() * rows || isLoading.current){ 
            console.log(thumbData.length, getMaxPerRow() * rows, " - no need to fetch more, ignoring get - ", isLoading)
            updateThumbnails(thumbData)
            return
        }
        //there are existing items and we are not currently loading more data
        updateThumbnails(thumbData);

        isLoading.current = true
        axios.post("http://localhost:8000/art/newest", {amount: getMaxPerRow() * rows})
        .then((res) => {
            // console.log(res.data)
            console.log("updating based on new data")
            setThumbData(res.data)
            updateThumbnails(res.data)
        })
        .catch((error) => {
            console.log("error fetching: " ,error.message)
        })
        .finally(() => {
            isLoading.current = false
        })
    }

    useEffect(() => {
        getData()

        const handleResize = () =>{
            getData();
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }

    },[thumbData])

    return(
        <div className="art-grid">
            {
                thumbnails.map((row, i) => (          
                    <div key={`row-${i}`} className="art-grid-row">
                        {row}    
                    </div> 
                ))
            }
        </div>
    )
}

export default ArtGrid