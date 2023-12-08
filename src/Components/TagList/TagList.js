import "./TagList.css"
import TagButton from "../TagButton/TagButton"

import { useState, useEffect } from "react"

const TagList = ({tags = [], callback = () => alert("pass function you moron")}) => {
    const [selectedTags, setSelectedTags] = useState([])

    useEffect(() => {
        callback(selectedTags)
    }, [selectedTags])


    function handleToggle(tag){
        var index = selectedTags.indexOf(tag)
        if(index === -1){
            selectTag(tag)
        }
        else{
            removeTag(index)
        }
    }
    function selectTag(tag){
        setSelectedTags([...selectedTags, tag])
    }
    function removeTag(index){
        var temp = [...selectedTags]
        temp.splice(index, 1)
        setSelectedTags([...temp])
    }

    return(
        <div className="tag-list-container">
            {selectedTags}
            {tags.map((tag) => <TagButton text={tag} onClick={() => handleToggle(tag)} />)}

        </div>
    )
}

export default TagList