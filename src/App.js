import React, { Component } from 'react';
import Card from './Card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
       
        <Card type={0} />
        <Card type={1} />
        <Card type={2} />
        <Card type={3} />
        <Card type={4} />
        
        
      </div>
    );
  }
}

export default App;
