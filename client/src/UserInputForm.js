import React, { Component } from 'react';

export default class UserInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      abbreviation: '',
      state_abbr: '',
      title: '',
      state_id: '',
      rank: '',
      party: '',
      twitter_account: '',
      url: '',
      id: ''
    }
  }

  handlePostNewStateInputs = async (e) => {
    await this.setState({ [e.target.name]: e.target.value});
    this.props.updateRequestBody({ name: this.state.name, abbreviation: this.state.abbreviation })
  } 
  
  handlePostNewSenatorInputs = async (e) => {
    await this.setState({ [e.target.name]: e.target.value});

    let {
      name,
      title,
      state_abbr,
      state_id,
      rank,
      party,
      twitter_account,
      url
    } = this.state

    this.props.updateRequestBody({
      name,
      title,
      state_abbr,
      state_id,
      rank,
      party,
      twitter_account,
      url
    })
  }

  handleGetId = async (e) => {
    await this.setState({ id: e.target.value})
    this.props.updateRequestUrl(this.state.id)
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
    } else if (this.props.endpoint_name === 'POST new senator') {
      return(
        <form>
          <input onChange={this.handlePostNewSenatorInputs} placeholder="senator name" name="name" />
          <input onChange={this.handlePostNewSenatorInputs} placeholder="title" name="title" />
          <input onChange={this.handlePostNewSenatorInputs} placeholder="state abbreviation" name="state_abbr" />
          <input onChange={this.handlePostNewSenatorInputs} placeholder="state id" name="state_id" />
          <input onChange={this.handlePostNewSenatorInputs} placeholder="rank" name="rank" />
          <input onChange={this.handlePostNewSenatorInputs} placeholder="party" name="party" />
          <input onChange={this.handlePostNewSenatorInputs} placeholder="twitter account" name="twitter_account" />
          <input onChange={this.handlePostNewSenatorInputs} placeholder="official website url" name="url" />

          <button onClick={(e) => this.props.handleTestClick(e, undefined)}>Test API Call</button>
        </form>
      )
    } else if (this.props.endpoint_name === 'GET specific senator') {
        return(
          <form>
            <input onChange={this.handleGetId} placeholder="id" name="id"/>
            <button onClick={(e) => this.props.handleTestClick(e, this.state.id)}>Test API Call</button>
          </form>
        )
      }
      else {
        return (
        <button onClick={(e) => this.props.handleTestClick(e, undefined)}>Test API Call</button>
      )
    }
  

  }

}