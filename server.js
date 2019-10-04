//import express, which is a framework on top of Node.js that allows us
//to simplify our server-side setup
const express = require('express');
//allows us to call express methods on our app
const app = express();

//sets the environment, and defaults to development if none specified
const environment = process.env.NODE_ENV || 'development';
// uses knexfile to set configuration and selects the specified 
// environment's configuration (in this case production or development)
const configuration = require('./knexfile')[environment];
// uses knex to access our database set in the "connection" key of 
// our knexfile configuration
const database = require('knex')(configuration);


// sets the port variable to either the provided port or port 3000 (defualt)
app.set('port', process.env.PORT || 3000);
// allows us to parse json from requests using a built-in middleware express function
app.use(express.json());

// listens for connections at the port set above, console logs message
app.listen(app.get('port'), () => {
  console.log(`App is listening on port ${app.get('port')}`)
})

//sets up endpoint for get all states, takes in request and response objects
app.get('/api/v1/states', (request, response) => {
  //grabs the states table from our database
  database('states').select()
    //since knex is promise-based, a promise is returned to the .then
    // with the states table as an array of objects
    .then((states) => {
      //if states is not empty, then send 200 status and states array 
      // in the response
      if (states.length) {
        response.status(200).json(states);
      } else {
        // if no states are found, sends 404 status and error message 
        // in response
        response.status(404).json({
          error: "No states found."
        })
      }
    })
    // if a server error occurs, the catch sends a 500 status
    // along with the error message
    .catch((error) => {
      response.status(500).json({ error });
    })
})


// sets up endpoint for posting a new state
app.post('/api/v1/states', (request, response) => {
  // the new state is assigned to the request body
  const state = request.body;

  // checks for required parameters of name and abbreviation
  // in the request body and sends a 422 and error
  // describing the missing parameter if one is missing
  for (let requiredParameter of ['name', 'abbreviation']) {
    if (!state[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { name: <String>, 
          abbreviation: <String> } You're missing a 
          ${requiredParameter} property.`});
    }
  }

  // if no problems with request body, insert the new state
  // into our states table in the database, then returns
  // the new id created by the database
  database('states').insert(state, 'id')
    // .then takes in the new id from the database
    // and returns a 201 response with the new id of the state
    // (the .insert returns an array of the requested
    // parameters, so bracket notation is needed to grab the
    // id from the 'state' array)
    .then(state => {
      response.status(201).json({ id: state[0] })
    })

    // if error is thrown, .catch returns a response with an error
    // and a 500 status code
    .catch(error => { 
      response.status(500).json({ error })
    });
})


// set up the endpoint to get a specific state by id
app.get('/api/v1/states/:id', (request, response) => {
  // query our states table in the database to find 
  // line that matches the id from the request parameters (parsed, 
  // since the parameter is a string and the 'id' in the database
  // expects a number)
  database('states').where('id', parseInt(request.params.id)).select()

    //the database returns an array of matching rows
    .then(states => {
      // check that the array isn't empty. if not empty, 
      // return a 200 status code with the array of matching state
      if (states.length) {
        response.status(200).json(states);
      } else {
        // if no matching states are found, send a 404 status code with
        // error message
        response.status(404).json({
          error: `Could not find state with id ${request.params.id}`
        })
      }
    })
    // if a server error occurs, a 500 status code is sent in the
    // response along with the error
    .catch(error => {
      response.status(500).json({ error });
    })
})

app.get('/api/v1/senators', (request, response) =>  {
  database('senators').select()
    .then((senators) => {
      if (senators.length) {
        response.status(200).json(senators)
      } else {
        response.status(404).json({
          error: `No senators found.`
        })
      }
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})

app.get('/api/v1/senators/:id', (request, response) => {
  database('senators').where('id', parseInt(request.params.id)).select()
    .then(senators => {
      if (senators.length) {
        response.status(200).json(senators);
      } else {
        response.status(404).json({
          error: `Could not find senator with id ${request.params.id}.`
        })
      }
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})

app.post('/api/v1/senators', (request, response) => {
  let senator = request.body;

  for (let requiredParameter of [
    'name', 
    'title',
    'state_abbr',
    'state_id',
    'rank',
    'party',
    'url'
    ]) {

      let errorText = `
        Expected format: { 
          name: <String>, 
          title: <String>, 
          state_abbr: <String>, 
          state_id: <Number>, 
          rank: <String>, 
          party: <String>, 
          url: <String> }
          You're missing a ${requiredParameter} property.`

      if (!senator[requiredParameter]) {
        return response.status(422)
        .json({ error: errorText });
      }
  }

  database('senators').insert(senator, 'id')
    .then(senatorId => {
      response.status(201).json({ id: senatorId[0]})
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})

app.delete('/api/v1/senators/:id', (request, response) => {

  database('senators').where('id', parseInt(request.params.id)).select().del()
    .then(success => {
      if (success) {
        response.status(204).json({ success })
      } else {
        response.status(404).send(`Delete unsuccessful. Make sure the senator id is correct in your request url.`)
      }
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})