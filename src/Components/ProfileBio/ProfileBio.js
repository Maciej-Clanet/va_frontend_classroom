import "./ProfileBio.css"
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from "react";
import UpdateBioForm from "../../Forms/UpdateBioForm/UpdateBioForm";
import PrimaryIconButton from "../PrimaryIconButton/PrimaryIconButton";

const ProfileBio = ({ bio }) => {
    const [updatingBio, setUpdatingBio] = useState(false)
    return (
        <>
            <SectionHeading text="Bio" />
            <div className="profile-bio">
                {(!bio && !updatingBio) && <PrimaryIconButton text="Add Bio" onClick={() => setUpdatingBio(true)} />}
                {(bio && !updatingBio) && <div className="current-bio">{bio}</div>}
                {(bio && !updatingBio) && <PrimaryIconButton text="Change" onClick={() => setUpdatingBio(true)} /> }
                {updatingBio && <UpdateBioForm currentBio={bio} close={() => setUpdatingBio(false)} />}
            </div>
        </>
    )
}

export default ProfileBio;