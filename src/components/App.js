import React, { Component } from 'react';
import './App.css';
import Answers from './Answers/Answers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Cash Flow Quiz</h1>
        </header>
        <Answers />
      </div>
    );
  }
}

export default App;
