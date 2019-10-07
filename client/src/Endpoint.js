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
import UserInputForm from './UserInputForm';
import * as parse from '../node_modules/html-react-parser';
import ReactJson from 'react-json-view';

export default class Endpoint extends Component {

  constructor(props) {
    super(props);
    this.state = {
      endpoint_name: this.props.endpoint_name,
      endpoint_info: null,
      response_data: null,
      request_url: '',
      request_body: {}
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

      default: 
        return null
    }
  }

  fireUserFetchCall = async (id='') => {
    
    let options = this.state.endpoint_info.fetchCall.options;

    if (this.state.request_url.includes(':id')) {
      let request_url = this.state.request_url.replace(':id', id);
      await this.setState({ request_url })
    } else if (this.state.endpoint_name.includes('POST')) {
      options.body = JSON.stringify(this.state.request_body);
    }
    
    
    let results = await fetch(this.state.request_url, options)
    let data = await results.json()

    this.setState({ response_data: data })
  }
    
  handleTestClick = (e, id) => {
    e.preventDefault();
    this.fireUserFetchCall(id);
  }

  handleUserInput = (e) => {
    this.setState({ user_input: e.target.value })
  }

  componentDidMount = async () => {
    await this.setState({ endpoint_info: this.setEndpointInfo() })

    let request_url  = this.state.endpoint_info.fetchCall.request_url;

    await this.setState({ request_url: request_url });
  }

  updateRequestBody = (options) => {
    this.setState({ request_body: options })
  }

  updateRequestUrl = (id) => {
    let old_url = this.state.endpoint_info.fetchCall.request_url.replace(':id', '')
    let updated_url = old_url + id
    this.setState({ request_url: updated_url })
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
            <code>{endpoint_method_and_url} </code>

            {parameters_table && <> <h4>Parameters</h4> {parse(parameters_table)}</>}

            <h4>Response</h4>
            {parse(response_table)}
            
            {example_response &&
              <div class="exampleResponseContainer">
              <h4>Example Response</h4> 
              <ReactJson src={example_response} theme="solarized"/>
              </div>
            }


            {this.state.endpoint_name !== "DELETE senator" && 
              <div className="testApiContainer">
              <h3>Try it yourself:</h3>

              {<code>{this.state.request_url ? fetchCall.options.method + ' ' + this.state.request_url : endpoint_method_and_url}</code>}
              
              <UserInputForm 
                endpoint_name={this.state.endpoint_name} 
                updateRequestBody={this.updateRequestBody} 
                updateRequestUrl={this.updateRequestUrl}
                handleTestClick={this.handleTestClick}
              />
            
              <div>
                <p>Response:</p>
                {!this.state.response_data && <ReactJson src={{ note: "Your test API call results will show here"}} theme="solarized" />}
                {this.state.response_data && <ReactJson src={this.state.response_data} theme="solarized" />}
              </div>
              
             </div>
            }
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