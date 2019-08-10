import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name:"bhavesh",age:"27"},
      {name:"suresh",age:"26"},
      {name:"kapil",age:"29"}
    ],
    otherThing:"this is the other thing"
  }

  swithNameHandler = function(name,age)  {
    console.log(this.state)
    // this.state.persons[0].name = 'hero';
    this.setState({
      persons: [
        { name: name, age: age },
        { name: "suresh", age: "26" },
        { name: "kapil", age: "35" }
      ],
    })
    console.log(this.state)

  }

  twoWayDataHandling = (event) =>{
    this.setState({
      persons: [
        { name: "bhavesh", age: 27 },
        { name: event.target.value, age: "26" },
        { name: "kapil", age: "35" }
      ],
    })
  }

  render() {
    const style = {
      backgroundColor:'white',
      fontStyle:'inherit',
      color:'red',
      cursor:'pointer'
    }
    return (
      
      <div className="App">
        <p>THis is my first react app.</p>
        <button style={style} onClick={()=>this.swithNameHandler('hello',21)}>Swtich state</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
          click={this.twoWayDataHandling.bind(this, 'hello', 21)}
          change={this.twoWayDataHandling}
        />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} > <p>This is also a some text</p> </Person>
      </div>
    );
  }

}

export default App;
