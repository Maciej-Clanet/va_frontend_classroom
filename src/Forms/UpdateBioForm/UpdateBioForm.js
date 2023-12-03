import "./UpdateBioForm.css"
import { useState } from "react"
import PrimaryIconButton from "../../Components/PrimaryIconButton/PrimaryIconButton"
import IconButtonTransparent from "../../Components/IconButtonTransparent/IconButtonTransparent"
import { useAuth } from "../../Contexts/AuthContext"
import axios from "axios"

const UpdateBioForm = ({currentBio, close}) => {
    const [bio, setBio] = useState(currentBio)
    const {userId} = useAuth()

    const submitBio = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8000/users/updateprofile", {"user_id" : userId, "bio" : bio})
        .then((res) => {
            window.location.reload();
        })
        .catch((err) => {
            alert(err)
        })
    }

    return(
        <form className="update-bio-form" onSubmit={submitBio}>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
            <div>
                <IconButtonTransparent text="Cancel" onClick={close}/>
                <PrimaryIconButton text="Confirm" onClick={submitBio}/>
            </div>
        </form>
    )

}


export default UpdateBioForm;