import React from 'react'
const validation = (props) => {
    console.log(props)
    let textError = null;
    if(props.strText.length <= props.minimumLength) {
        textError = <p>Text too short</p>;
    } else if(props.strText.length >= props.maximumLenght) {
        textError = <p> Text long enough </p>;
    }
    return (
        <div>
            {textError}
        </div>
    );
}

export default validation;