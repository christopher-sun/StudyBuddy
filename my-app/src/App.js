import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './MapContainer'
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my app, you fucking loser LOL</h1>
        </header>
        <div class="container-fluid">
                <MapContainer/>
                <Button>Create Study Spot</Button>
        </div>
      </div>
    );
  }
}

export default App;
