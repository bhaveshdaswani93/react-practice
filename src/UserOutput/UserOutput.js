import React from "react";

const useroutput = (props) =>{
    const style={
        backgroundColor:"yellow",
        // color:"white",
        width:"60%",
        boder:"3px solid black",
        textAlign:"center",
        margin:"20px auto"
    }
    return (
        <div style={style}>
            <p>User Output Element</p>
            <p>Username is: {props.username}</p>
        </div>
    )
}

export default useroutput