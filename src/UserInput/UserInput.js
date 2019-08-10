import React from "react";
import './UserInput.css'
const userinput = (props) => {
    return (
        <div className="UserInput">
            <p>User Input Element</p>
            <input type="text" onChange={props.changeUserName} value={props.username} />

        </div>
    )
}

export default userinput