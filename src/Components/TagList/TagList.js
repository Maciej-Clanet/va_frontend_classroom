import "./TagList.css"
import TagButton from "../TagButton/TagButton"
import PrimaryIconButton from "../PrimaryIconButton/PrimaryIconButton"
import IconButtonTransparent from "../IconButtonTransparent/IconButtonTransparent"

import { useState, useEffect } from "react"



const TagList = ({ tags = [], callback = () => alert("pass function you moron") }) => {
    const [selectedTags, setSelectedTags] = useState([])
    const [addingNew, setAddingNew] = useState(false)
    const [newTag, setNewTag] = useState("")

    useEffect(() => {
        callback(selectedTags)
    }, [selectedTags])


    function handleToggle(tag) {
        var index = selectedTags.indexOf(tag)
        if (index === -1) {
            selectTag(tag)
        }
        else {
            removeTag(index)
        }
    }
    function selectTag(tag) {
        setSelectedTags([...selectedTags, tag])
    }
    function removeTag(index) {
        var temp = [...selectedTags]
        temp.splice(index, 1)
        setSelectedTags([...temp])
    }

    function createNewTag(e){
        e.preventDefault()
        alert("creating")
    }

    return (
        <div className="tag-list-container">
            {selectedTags}
            {tags.map((tag) => <TagButton text={tag} onClick={() => handleToggle(tag)} />)}

            {!addingNew && <TagButton text="add new" selected={true} onClick={() => setAddingNew(true)} />}
            {
                addingNew && <form className="new-tag-form">
                    
                    <input 
                        
                        type="text" 
                        value={newTag}  
                        placeholder="enter new tag..."
                        onChange={(e)=> setNewTag(e.target.value)}
                        />
                        <TagButton text="confirm" selected={true} onClick={createNewTag} />
                    <IconButtonTransparent style={{"padding": "0"}} 
                    text="Cancel" onClick={() => setAddingNew(false)} />
                </form>
            }

        </div>
    )
}

export default TagList