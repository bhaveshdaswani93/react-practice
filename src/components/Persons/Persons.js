import React,{ Component } from 'react';
import Person from './Person/Person'

class Persons extends Component 
 {
  //  static getDerivedStateFromProps(props,state)
  //  {
  //   console.log(`[Persons.js] getDerived state called.`)
  //    return state;
  //  }

   shouldComponentUpdate(nextProps,nextState) {
     
    console.log(`[Persons.js] should component update state called.`)
    console.log(`[Persons.js] should component update state called.`,this.props)
    console.log(`[Persons.js] should component update state called.`,nextProps)
     return true;
   }

   render() {
     console.log(`[Persons.js] Render hook called.`)
     return this.props.persons.map((person,index)=>{
      // return <Person name={person.name} age={person.age} click={()=>this.deletePersonHandler(index)} />
      return  <Person 
                  key={person.id}  
                  name={person.name} 
                  age={person.age} 
                  click={(event)=>this.props.clicked(index,event)} 
                  change = {(event)=>this.props.changed(person.id,event)}
      />
    })
   }

   getSnapshotBeforeUpdate(prevProps,prevState) {
    console.log(`[Persons.js] getSnapshot hook called.`);
    return {message:'this is the snapshot from persons.'}
   }

   componentDidUpdate(prevProps,prevState,snapshot) {
    console.log(`[Persons.js] component did update hook called.`);
    console.log('[Persons.js] component did update',snapshot);
    console.log('[Persons.js] component did update',prevProps);
    console.log(`[Persons.js] component did update.`,this.props)
   }
  
}

  export default Persons