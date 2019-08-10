import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username:'lalu'
  }

  setUserName = (event) => {
    this.setState({
      username:event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput changeUserName={this.setUserName}
          username={this.state.username}
        ></UserInput>
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
