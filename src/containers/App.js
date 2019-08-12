import React, { Component } from 'react';
import classes from  './App.module.css';
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props)
    console.log(`[App.js] constructor called.`)
    this.state = {
      persons: [
        { id:'123',name:"bhavesh",age:"27"},
        { id:'654',name:"suresh",age:"26"},
        { id:'abc',name:"kapil",age:"29"}
      ],
      otherThing:"this is the other thing",
      toShowPersons:false
    }
  }

  shouldComponentUpdate(nextProps,nextState) {
    console.log('[App.js] shouldcomponentUpdate.');
    return true;
  }
  
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate.');
  }



  static getDerivedStateFromProps(props,state)
  {
    console.log(`[App.js] Derived state called.`)
    return state;
  }

  // state = 

  toggleShowPersonHandler = () => {
    // const doesShow =  !this.toShowPersons;
    this.setState({
      toShowPersons:!this.state.toShowPersons
    })
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

  changeNameHandler = (personId,event) =>{
    console.log(event);
    console.log(personId);
    const personIndex = this.state.persons.findIndex(p =>p.id===personId);
    console.log(personIndex);
    
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    })
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  componentDidMount() {
    console.log(`[App.js] Component Did mount hook called.`)
  }

  render() {
    
    console.log(`[App.js] render method called.`)
    let persons = null;
    if(this.state.toShowPersons) {
      persons = (
         <Persons 
            persons = {this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler}
         />
      );
     
    }
    
    return (
     
      <div className={classes.App}>
        <Cockpit 
          toShowPersons = {this.state.toShowPersons}
          clicked = {this.toggleShowPersonHandler}
          title = {this.props.appTitle}
        />
        {persons}
      </div>
     
    );
  }

}

export default App;
