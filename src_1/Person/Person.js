import React from "react";
import './Person.css'

function person(props) {
    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name}, my age is {props.age} </p>
            {props.children}
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    );
}

export default person;