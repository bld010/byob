import React, { Component } from 'react';

export default class UserInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      abbreviation: ''
    }
  }

  handlePostNewStateInputs = async (e) => {
    await this.setState({ [e.target.name]: e.target.value});

    this.props.updateRequestBody({ name: this.state.name, abbreviation: this.state.abbreviation })
  } 
  
  render = () => {

    if (this.props.endpoint_name === 'POST new state') {
      return(
        <form>
          <input onChange={this.handlePostNewStateInputs} placeholder="state name" name="name" />
          <input onChange={this.handlePostNewStateInputs} placeholder="state abbreviation" name="abbreviation" />
          <button onClick={(e) => this.props.handleTestClick(e, undefined)}>Test API Call</button>
        </form>
      )
    } else {
      return (
        <button>Test API Call</button>
      )
    }
  

  }

}