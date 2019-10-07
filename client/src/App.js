import React, { Component } from 'react';
import './App.css';
import { Endpoints } from './Endpoints';

class App extends Component {


  render() {
    return(
      <main className="App">
      <h1>Members of Congress API</h1>
      <Endpoints />
      </main>

    )
  }
}

export default App;
