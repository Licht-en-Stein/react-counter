import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      status: true
    }
  }

  upCounter = () => {
    this.setState(prevState => {
     return {counter: prevState.counter + 1}
    })
  }

  downCounter = () => {
    this.setState(prevState => {
     return {counter: prevState.counter - 1}
    })
  }

  hideCounter = () => {
    this.setState(prevState => {
     return {status: !prevState.status}
    })
    
  }

  resetCounter = () => {
    this.setState(prevState => {
      return {counter: 0}
    })
  }


  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Counter</h1>
          <button onClick={this.upCounter}>1up</button>
          <button onClick={this.downCounter}>1down</button>
          <button onClick={this.resetCounter}>Reset</button>
          <button onClick={this.hideCounter}>Hide | Show</button>
          {this.state.status ? <h1>{this.state.counter}</h1> : null}
      </div>
    );
  }
}

export default App;
