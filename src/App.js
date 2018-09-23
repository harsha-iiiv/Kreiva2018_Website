import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import Members from './components/Members/Members';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Home/>
          <Landing/>
          <Events/>
          <Members/>
          <Footer/>
      </div>
    );
  }
}

export default App;
