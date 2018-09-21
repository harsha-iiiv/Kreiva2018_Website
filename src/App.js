import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import Events from './components/Events/Events';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Landing/>
          <Events/>
      </div>
    );
  }
}

export default App;
