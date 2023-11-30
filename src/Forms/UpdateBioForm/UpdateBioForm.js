import "./UpdateBioForm.css"
import { useState } from "react"

const UpdateBioForm = ({currentBio}) => {
    const [bio, setBio] = useState(currentBio)

    const submitBio = (e) => {
        e.preventDefault()

        alert("submitted bio")
    }

    return(
        <form className="update-bio-form" onSubmit={submitBio}>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
            <button type="submit">save bio</button>
        </form>
    )

}


export default UpdateBioForm;