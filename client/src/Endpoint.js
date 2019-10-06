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
      endpont_info: null,
      response_data: null,
      user_input: null
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


  fireUserFetchCall = async (id_param='') => {
    let request_url  = this.state.endpoint_info.fetchCall.request_url;
    let options = this.state.endpoint_info.fetchCall.options

    if (request_url.includes(':')) {
      let id_url = request_url.replace(':id', id_param);

      fetch(id_url, options)
        .then(resp => resp.json())
        .then(data => this.setState({ response_data: data }))
    }

  
  }
    

  handleUserTestClick = () => {

  }

  componentDidMount = async () => {

    await this.setState({ endpoint_info: this.setEndpointInfo() })
  }

  render() {


      if (this.state.endpoint_info) {

        let {
          description,
          endpoint_method_and_url,
          parameters_table,
          response_table,
          example_response,
          fetchCall
        } = this.state.endpoint_info;

        return (
          <section className="Endpoint">
            <h2>{this.state.endpoint_name}</h2>
            <p>{description}</p>
            <code>{endpoint_method_and_url}</code>
            {parameters_table && 
              <>
              <h4>Parameters</h4>
              {parse(parameters_table)}
              </>
            }
            <h4>Response</h4>
            {parse(response_table)}
            
            {example_response &&
              <>
              <h4>Example Response</h4> 
              <ReactJson src={example_response}/>
              </>
            }

            <div>

              <h3>Try it yourself:</h3>

              {<code>{parse(fetchCall.request_url)}</code>}
              
              <input placeholder="Enter an id"></input>
              <p>Response:</p>
              <button onClick={this.handleUserTestClick}>Test API Call</button>
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