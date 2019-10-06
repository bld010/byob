import React, { Component } from 'react';
import './Endpoint.css'
import { getAllStatesInfo,
         getSpecificStateInfo, 
         getAllSenatorsInfo,
         getSpecificSenatorInfo,
         postNewStateInfo,
         postNewSenatorInfo,
         deleteSenatorInfo
        } from './endpointDescriptions';
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
        return getAllStatesInfo;

      case "GET specific state":
        return getSpecificStateInfo;

      case "GET all senators":
        return getAllSenatorsInfo; 

      case "GET specific senator":
        return getSpecificSenatorInfo;

      case "POST new state":
        return postNewStateInfo;

      case "POST new senator":
        return postNewSenatorInfo;

      case "DELETE senator":
        return deleteSenatorInfo

      default: return null
    }
  }


  componentDidMount() {

    this.setState({ endpoint_info: this.setEndpointInfo() })
  }

  render() {

      if (this.state.endpoint_info) {
        return (

          <section className="Endpoint">
            <h2>{this.state.endpoint_name}</h2>
            <p>{this.state.endpoint_info.description}</p>
            <code>{this.state.endpoint_info.endpoint_method_and_url}</code>
            {this.state.endpoint_info.parameters_table && 
              <>
              <h4>Parameters</h4>
              {parse(this.state.endpoint_info.parameters_table)}
              </>
            }
            <h4>Response</h4>
            {parse(this.state.endpoint_info.response_table)}
            
            {this.state.endpoint_info.example_response &&
              <>
              <h4>Example Response</h4> 
              <ReactJson src={this.state.endpoint_info.example_response}/>
              </>
            }
            <div>

              <h3>Where we will display user fetch component</h3>
              {/* <button>Click here to test endpoint</button>  */}
              {/* <div>Show results here based on state</div> */}
              
            </div>

          </section>

        )
      } else {
        return (
          <section className="Endpoint">
            <h2>{this.state.endpoint_name}</h2>
          </section>
        )
      }
      

   
  }
}