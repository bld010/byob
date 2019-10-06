import React, { Component } from 'react';
import './Endpoint.css'
import { getAllStates, getSpecificState } from './endpointDescriptions';
import * as parse from '../node_modules/html-react-parser';
import ReactJson from 'react-json-view';

export default class Endpoint extends Component {

  constructor(props) {
    super(props);
    this.state = {
      endpoint_name: this.props.endpoint_name,
      user_request_data: null,
      endpont_info: null
    }

  }
  
  setEndpointInfo() {
    switch (this.state.endpoint_name) {
      case "GET all states":
        return getAllStates;

      // case "GET specific state":

      //   return getSpecificState;
      default: return null
    }
  }


  componentDidMount() {

    this.setState({ endpoint_info: this.setEndpointInfo() })
  }

  render() {


    return (
      <section className="Endpoint">
        <h2>{this.state.endpoint_name}</h2>
        <p>{this.state.endpoint_info && this.state.endpoint_info.description}</p>
        <h4>Parameters</h4>
        {this.state.endpoint_info && parse(this.state.endpoint_info.parameters_table)}
        <h4>Response</h4>
        {this.state.endpoint_info && parse(this.state.endpoint_info.response_table)}
        <h4>Example Response</h4> 
        {this.state.endpoint_info && <ReactJson src={this.state.endpoint_info.example_response} theme="solarized" />}
        <div>

          <h3>Where we will display user fetch component</h3>
          {/* <button>Click here to test endpoint</button>  */}
          {/* <div>Show results here based on state</div> */}
          
        </div>

      </section>

    )
  }
}