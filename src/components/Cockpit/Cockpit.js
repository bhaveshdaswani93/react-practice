import React, { useEffect } from 'react'
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {

    useEffect(()=>{
        console.log('[Cockpit.js] use effect called');
    })

    console.log(`[Cockpit.js] Render hook called.`)
    let buttonCss = '';
    if(props.toShowPersons)
    {
        buttonCss = classes.Red;    
    }
    
    return (
    <div className={classes.Cockpit}>
        <p>{props.title}</p>
        <button className={buttonCss} onClick={props.clicked}>Swtich state</button>
    </div>
    )
}

export default Cockpit;