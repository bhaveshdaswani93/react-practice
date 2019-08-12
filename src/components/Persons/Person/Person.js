import React, { Component } from "react";
import classes from './Person.module.css'

class Person extends Component {
    render()
    {
        console.log(`[Person.js] Render hook called.`)
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I am {this.props.name}, my age is {this.props.age} </p>
                {this.props.children}
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </div>
        );

    }
    // let random = Math.random();
    // if(random > 0.7) {
    //     throw new Error('some error occured in person component.');
    // }
    
    
}

export default Person;