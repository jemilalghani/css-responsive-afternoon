import React, { Component } from 'react';
import Header from './Component/Header.js';
import Bodyimg from './Component/Bodyimg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="AppHeader">
          <Header />
          <Bodyimg/>
        </div>
      </div>
    );
  }
}

export default App;
