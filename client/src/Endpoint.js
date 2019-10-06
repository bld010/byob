import React, { Component } from 'react';
import './Endpoint.css'

export default class Endpoint extends Component {

  constructor(props) {
    super(props);
    this.state = {
      endpoint_name: this.props.endpoint_name,
      user_request_data: null,
    }

  }
  

  componentDidMount() {

  
  }

  render() {


    return (
      <section className="Endpoint">
        <h2>{this.state.endpoint_name}</h2>
        <p>Description</p>
        <div>
          <h4>Parameters Table</h4>
          <p>Example Response</p>
        </div>
        <div>
          <h3>Where we will display mock fetch? Fetch call component</h3>
          <button>Click here to test endpoint</button> 
          <div>Show results here based on state</div>
        </div>

      </section>

    )
  }
}