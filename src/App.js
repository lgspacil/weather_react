import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home'
import cloud1 from '../src/Images/cloud1.png';
import cloud2 from '../src/Images/cloud2.png';

class App extends Component {
  render() {
    return (
      <div className="BackGround">
        <img className="cloud1" src={cloud1} alt="cloud" />
        <img className="cloud2" src={cloud2} alt="cloud" />
        <Home />
      </div>
    );
  }
}

export default App;
