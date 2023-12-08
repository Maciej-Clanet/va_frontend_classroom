import "./ProfileInfoField.css"
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../Contexts/AuthContext";
import PrimaryIconButton from "../PrimaryIconButton/PrimaryIconButton";
import IconButtonTransparent from "../IconButtonTransparent/IconButtonTransparent";

const ProfileInfoField = ({ fieldName, fieldData, type = "small" }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [newData, setNewData] = useState(fieldData)

    const { userId } = useAuth()

    function modifyField(event) {
        event.preventDefault()

        const dataToSend = {
            "user_id": userId,
            [fieldName]: newData
        }
        axios.post("http://localhost:8000/users/updateprofile", dataToSend)
            .then((res) => {
                window.location.reload()
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <div className="profile-info-field">
            <span className="text-headline">{fieldName}</span>
            {(fieldData && !isEditing) && <div className="profile-info-data-container">
                <div className="text-body profile-info-data">{fieldData}</div>
                <PrimaryIconButton text="Change" onClick={() => setIsEditing(!isEditing)} />
            </div>}
            {(!fieldData && !isEditing) && <div>
                <PrimaryIconButton text={`Add ${fieldName}`} onClick={() => setIsEditing(!isEditing)} />
            </div>}


            {isEditing && <form onSubmit={modifyField}>
                {type == "small" && <input
                    autoFocus
                    className="text-body"
                    type="text"
                    value={newData}
                    onChange={(e) => setNewData(e.target.value)}
                    maxLength={100}
                    placeholder={`enter new ${fieldName}`}
                />}
                {type =="big" && 
                    <textarea 
                        autoFocus
                        className="text-body"
                        value={newData}
                        onChange={(e) => setNewData(e.target.value)}
                        maxLength={2000}
                        rows={4}
                        placeholder={`enter new ${fieldName}`}
                    />
                }

                <div className="info-field-buttons-row">
                    <IconButtonTransparent text="Cancel" onClick={() => setIsEditing(false)}/>
                    <PrimaryIconButton text="Confirm" onClick={modifyField} />
                </div>
            </form>}

        </div>
    )
}

export default ProfileInfoField;