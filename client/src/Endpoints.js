import React from 'react';
import Endpoint from './Endpoint';

export const Endpoints = () => {


  return(
    <div>
      <p>This is where the endpoints components will live.</p>
      <Endpoint endpoint_name="GET all states"/>
      <Endpoint endpoint_name="GET specific state"/>
      <Endpoint endpoint_name="POST new state" />
      <Endpoint endpoint_name="GET all senators" />
      <Endpoint endpoint_name="GET specific senator" />
      <Endpoint endpoint_name="POST new senator" />
      <Endpoint endpoint_name="DELETE senator" />
    </div>
  )
}