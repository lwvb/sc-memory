import React, { Component } from 'react';
import Deck from './Deck';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
       
        <Deck size={6} />

        <Deck size={20} />
        
        
      </div>
    );
  }
}

export default App;
