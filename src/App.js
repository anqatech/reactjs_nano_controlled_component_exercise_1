import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    inputText: ''
  }
  
  updateInputText = (data) => {
    this.setState(() => ({
      inputText: data.trim()
    }))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input 
            type="text" 
            placeholder="Say Something" 
            value={ this.state.inputText }
            onChange={(event) => this.updateInputText(event.target.value)}
          />
          <p className="echo">Echo:</p>
          <p>{ this.state.inputText }</p>
        </div>
      </div>
    );
  }
}

export default App;
