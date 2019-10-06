import React, { Component } from 'react';
import './App.css';
import { Endpoints } from './Endpoints';

class App extends Component {
  state = {
    states: null,
    senators: null,
  }

  // componentDidMount() {
  //   this.fetchData()
  //     .catch(err => console.log(err));
  // }

  // fetchData = async () => {
  //   let urls = ['/api/v1/states', 'api/v1/senators']

  //   let fetchPromises = urls.map(url => fetch(url))

  //   Promise.all(fetchPromises)
  //     .then(res => Promise.all(res.map(res => res.json())))
  //     .then(data => this.setState({ states: data[0], senators: data[1] }))
  //     .catch(error => console.log({ error }))
  // }

  render() {
    return(
      <main>
      <h1>Members of Congress API</h1>
      <Endpoints />
      </main>

    )
  }
}

export default App;
