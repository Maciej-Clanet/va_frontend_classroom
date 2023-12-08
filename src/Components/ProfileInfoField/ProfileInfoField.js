import "./ProfileInfoField.css"
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../Contexts/AuthContext";

const ProfileInfoField = ({ fieldName, fieldData, type = "small" }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [newData, setNewData] = useState("")

    const { userId } = useAuth()

    function modifyField(event) {
        event.preventDefault()

        const dataToSend = {
            "user_id": userId,
            [fieldName]: newData
        }
        axios.post("http://localhost:8000/users/UpdateProfile", dataToSend)
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
            {fieldData && <div>
                {fieldData}
                <button onClick={() => setIsEditing(!isEditing)}>Change</button>
            </div>}
            {!fieldData && <div>
                You have no {fieldName}
                <button onClick={() => setIsEditing(!isEditing)}>Add {fieldName}</button>
            </div>}


            {isEditing && <form onSubmit={modifyField}>
                {type == "small" && <input
                    type="text"
                    value={newData}
                    onChange={(e) => setNewData(e.target.value)}
                    maxLength={100}
                />}
                {type =="big" && 
                    <textarea 
                        value={newData}
                        onChange={(e) => setNewData(e.target.value)}
                        maxLength={2000}
                    />
                }

                <button type="submit">Confirm</button>
            </form>}

        </div>
    )
}

export default ProfileInfoField;